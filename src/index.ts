import {ApplicationLogger} from '@logging/Logger';
import {plainToClass} from "class-transformer";
import MainServer from "@server/MainServer";
import User from "@entities/User";


let logger=ApplicationLogger.getAppLogger("main");


function convertJsonInputToObject(inputJsonString:string) {

    try {
        logger.info("Logger for file..this is new...")
        logger.error("Error level in logging")
    }catch (e) {
        logger.error("Exception in logging")
    }

    console.log( inputJsonString);

    let users =plainToClass(User,JSON.parse(inputJsonString), { excludeExtraneousValues: true });
    console.log("Users details")
    console.log(users)








}
// var inputJsonString="{\"id\": \"1123\",\"userId\": \"1\",\"test\": 1,\"idsxas\": 1,\"title\": \"Add Info about the new project\",\"done\": true}"
// convertJsonInputToObject(inputJsonString);

var server =new MainServer();
server.start(3000);


// import express from "express";
// import bodyParser from "body-parser";
// import "reflect-metadata";
// import { useExpressServer } from "routing-controllers";
//
// import {UserController} from "@controller/UserController";
//
// const server = express();
//
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
//
// useExpressServer(server, {
//     // register created express server in routing-controllers
//     controllers: [UserController] // and configure it the way you need (controllers, validation, etc.)
// });
//
// server.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// });
