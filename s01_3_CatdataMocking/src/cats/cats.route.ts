import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

// Read - 고양이 데이터 전체 조회(List)
router.get('/cats', (req, res) => {
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
});

// Read - 특정 고양이 데이터 조회
router.get('/cats/:id', (req, res) => {
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
});

// Create 새로운 고양이 추가
router.post('/cats', (req, res) => {
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
});

export default router;
