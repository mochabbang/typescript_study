"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.patchCat = exports.putCat = exports.createCat = exports.readCat = exports.readAllcat = void 0;
var cats_model_1 = require("./cats.model");
var readAllcat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllcat = readAllcat;
var readCat = function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var r_cat = cats_model_1.Cat.find(function (cat) {
            return cat.id == params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                r_cat: r_cat,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readCat = readCat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.createCat = createCat;
var putCat = function (req, res) {
    try {
        var params_2 = req.params;
        var body_1 = req.body;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_2.id) {
                cat = body_1;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats_model_1.Cat,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.putCat = putCat;
var patchCat = function (req, res) {
    try {
        var params_3 = req.params;
        var body_2 = req.body;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_3.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                r_cat: result_1,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.patchCat = patchCat;
var deleteCat = function (req, res) {
    try {
        var params_4 = req.params;
        var newCat = cats_model_1.Cat.filter(function (cat) { return cat.id !== params_4.id; });
        res.status(200).send({
            success: true,
            data: {
                cats: newCat,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map