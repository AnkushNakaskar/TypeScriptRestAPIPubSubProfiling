import {
    Body,
    Delete,
    Get,
    JsonController,
    NotFoundError,
    OnUndefined,
    Param,
    Post,
    QueryParam
} from "routing-controllers";
import User from "../entities/User";
import {UserNotFoundError} from "../error/UserNotFoundError";
import {UserDao} from "../daos/UserDao";

@JsonController("/test")
export class UserController {
    constructor(private userRepository: UserDao) {
    }


    @Get("/users")
    @OnUndefined(UserNotFoundError)
    getUsers(@QueryParam("email", {required: false}) email: string) {
        var response : User|undefined;
        if (email) {
            response= this.userRepository.findByEmail(email);
        }
        if(response ==undefined && email !=undefined){
            throw new NotFoundError(`User was not found.`);
        }else{
            return this.userRepository.findAll();
        }

    }

    //Todo This below mapping will not work since , we have routing based on Url string , path variable but not on request variable.

    // @Get("/users")
    // getAll(@QueryParam("limit") limit: number) {
    //     if(limit){
    //         return this.userStore.slice(0, limit);
    //     }
    //     return this.userStore;
    //
    // }
    @Get("/users/:id")
    @OnUndefined(404)
    getOne(@Param("id") id: number) {
        let user = this.userRepository.findById(id);
        return user;
    }


    @Post("/users")
    post(@Body() user: User) {
        const newUser = new User(user.name, user.email, user.id);
        return newUser;
    }


    @Delete("/users/:id")
    remove(@Param("id") id: number) {
        return "Removing user...";
    }
}
