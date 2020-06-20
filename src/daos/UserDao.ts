import User from "@entities/User";

export class UserDao {
    private userStore: User[];

    constructor() {
        this.userStore = [
            new User("James Coonce", "jcoonce", 1),
            new User("Jim Coonce", "jimcoonce", 2),
            new User("Norman", "jcoonce", 3)
        ];
    }

    /*
    TypeScript supports overloading based on number of parameters, but the steps to be followed are a bit different if we compare to OO languages. In answer to another SO question, someone explained it with a nice example: Method overloading?.

     */
    public findById(id: number): User | undefined {
        return this.userStore.find((user: User) => user.id === id);
    }
    public findByEmail(email: string): User | undefined {
        return this.userStore.find((user: User) => user.email === email);
    }

    public findAll():User[] |undefined{
        return this.userStore;
    }
}
