import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        // cats에 대한 라우터 설정 미들웨어
        this.app.use(catsRouter);
    }

    private setMiddleware() {
        //   use 함수는 전체적으로 사용하기 위함
        this.app.use(
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
        this.app.use(express.json());

        // cats에 대한 라우터 설정 미들웨어
        this.setRoute();

        // 존재하지 않는 URL 미들웨어
        this.app.use(
            (
                req: express.Request,
                res: express.Response,
                next: express.NextFunction,
            ) => {
                res.send({ error: '404 not found error' });
            },
        );
    }

    public listen() {
        this.setMiddleware();

        this.app.listen(8000, () => {
            console.log('server is on...');
        });
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();
