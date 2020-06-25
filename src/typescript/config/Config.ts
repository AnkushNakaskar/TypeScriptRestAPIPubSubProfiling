import * as fs from 'fs'
import * as yaml from 'js-yaml'
import {ApplicationLogger} from "@logging/Logger";
import {plainToClass} from "class-transformer";
import ProjectConfig from "@config/ProjectConfig";
import {validate} from "class-validator";

let env = process.env["NODE_ENV"];
const configFileName = 'src/main/resources/application-' + env + '.yml'
let logger = ApplicationLogger.getAppLogger();
let projectConfig: ProjectConfig | undefined;

export class Config {
    static getConfig(): ProjectConfig | undefined {
        try {
            if (projectConfig === undefined) {
                console.log("Profile :: " + env)
                var projectjson = this.getYmlIntoJson();
                if (projectjson) {
                    projectConfig = plainToClass(ProjectConfig, projectjson, {excludeExtraneousValues: true});
                    validate(projectConfig).then((errors) => {
                        if (errors.length > 0) {
                            logger.error("validation failed. errors: ", errors);
                        } else {
                            logger.error("validation succeed");
                        }
                    });
                }
            }
        } catch (e) {
            logger.error("Error in converting json into project config ", e)
        }
        return projectConfig;
    }

    static getYmlIntoJson(configFile: string = configFileName): string | object | undefined {

        try {
            logger.info("Getting config from file : " + configFile);
            let yamlJson = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'));
            return yamlJson;
        } catch (e) {
            logger.error("Error in converting yml file into json: ", e);
        }
    }

}

Config.getConfig();
export default Config;
