import {IsNotEmpty, IsNotEmptyObject} from "class-validator";
import {Expose} from "class-transformer";


export class ProjectConfig {


    @Expose()
    @IsNotEmpty()
    public podId: number | undefined;

    @Expose()
    @IsNotEmpty()
    public name: string | undefined;

    @Expose()
    @IsNotEmpty()
    public env: string | undefined;

    @Expose()
    @IsNotEmpty()
    public topicName: string | undefined;

    @Expose()
    @IsNotEmpty()
    public subscripberName: string | undefined;

    @Expose()
    @IsNotEmptyObject()
    public hibernate: Hibernate | undefined;

}

class Hibernate {

    @Expose()
    @IsNotEmpty()
    public dialect: string | undefined;

    @Expose()
    @IsNotEmpty()
    public strategy: string | undefined;


}


export default ProjectConfig;
