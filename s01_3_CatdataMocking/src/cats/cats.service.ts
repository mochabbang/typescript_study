import { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

// Read - 고양이 데이터 전체 조회(List)
export const readAllcat = (req: Request, res: Response) => {
    try {
        const cats: CatType[] = Cat;
        //throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Read - 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        console.log(params);

        const r_cat = Cat.find((cat) => {
            return cat.id == params.id;
        });
        //throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                r_cat,
            },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Create 새로운 고양이 추가
export const createCat = (req: Request, res: Response) => {
    try {
        const data = req.body;
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Update -> PUT
export const putCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;

        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
            }
        });

        //throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats: Cat,
            },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Update -> Patch (부분적 업데이트)
export const patchCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body };
                result = cat;
            }
        });

        //throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                r_cat: result,
            },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Delete
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id);

        //throw new Error('db connect error');
        res.status(200).send({
            success: true,
            data: {
                cats: newCat,
            },
        });
    } catch (error: any) {
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};
