import {configure, getLogger, Logger} from "log4js";
configure("src/config/logging/log4js.json");
export class ApplicationLogger{

    public  static getAppLogger(name:string="default") : Logger{
        return  getLogger(name);
    }
}
export default ApplicationLogger;





