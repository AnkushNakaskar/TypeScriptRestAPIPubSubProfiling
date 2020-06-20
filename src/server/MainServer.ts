import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
import { useExpressServer,useContainer } from "routing-controllers";
import { Container } from "typedi";

import {ApplicationLogger} from '@logging/Logger'
import * as log4js from "log4js";
import * as controllers from "@controller/index";



let logger = ApplicationLogger.getAppLogger("http");
const app = express();

export  class MainServer {

    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(log4js.connectLogger(logger, {level: 'info'}));
        this.setupControllers();
    }
    private setupControllers(): void {
        useContainer(Container);
        useExpressServer(app, {
            routePrefix:"/api",
            controllers: controllers.default
        });
    }

    public start(port: number): void {
        app.listen(port, () => {
            logger.info(this.SERVER_STARTED + port);
        });
    }
}
export default MainServer;

