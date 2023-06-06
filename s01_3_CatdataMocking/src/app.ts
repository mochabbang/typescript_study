import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();

// 미들웨어!
//   순서가 중요하다.
//   로깅이나 특정 작업을 진행할 때 사용하게 된다.

//   use 함수는 전체적으로 사용하기 위함
app.use(
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        console.log(req.rawHeaders[1]);
        console.log('this is loggin middleware');

        next();
    },
);

// json을 읽는 미들웨어 구서성
app.use(express.json());

// cats에 대한 라우터 설정 미들웨어
app.use(catsRouter);

// 존재하지 않는 URL 미들웨어
app.use(
    (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        res.send({ error: '404 not found error' });
    },
);

app.listen(8000, () => {
    console.log('server is on...');
});
