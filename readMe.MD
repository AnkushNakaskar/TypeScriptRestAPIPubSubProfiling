### This project is the standard Rest API implementation of express js in Type script, Annotations ,logging,container, DI
* This example give us litle demo of How Get,POST works using anotations
* Focus on UserController, It demonstrate below points
    * How Class request mapping  works(@JsonController)
        * You can see the get,post API.
        * You can see the path variable,(":id")
        * You can see the request param("email")
            * You can mark those as optional or mandatory
            * Only problem i can see is that, @QueryParam cant route the request
                * For example : Two mapping for "@Get("/users")", one with "email" and One with "limit"
            * While pathvariable , can route the request. like in case(:userID)
        * You can see the validation on User.ts
            ```
                @IsPositive()
                public id: number;
            ``` 
            * This validation works while using in @Body,@QueryParam,@Param, basically the inputs from API.
                             
* Focus on MainServer.ts
    * You will find the default configurations.
        * you can provide more details , like cors,controllers,middlewares,defaults configs, contextPath
        
* This project also explain about dependancy ingection. 
    * you can see the UserDao is ingestion in UserController.
    * This happen because of  `typedi` in mainServer.ts
        ```        
      useContainer(Container);
        ```                     
* Read about the method overloading in type script, In UserDao, we have to create separate function, findById and findByEmail
   * _TypeScript supports overloading based on number of parameters, but the steps to be followed are a bit different if we compare to OO languages. In answer to another SO question, someone explained it with a nice example: Method overloading?._
* Create new project with nodeJs with express JS.
* to add type script in project :  yarn add typescript --dev
* this project explain about the basics of project 
* nodemon is node application runtime. the difference between node and nodeman is
   * Nodeman takes the runtime changes and execute at the same time without re-starting the application
* Execute below command in project directory where package.json file is present
       ``` npm install
       ```
          ```npm start```
* This project also explain about below major points
    * Google pubsub
        * Check the PubSubService.ts -> It explain the message is consumed and handling error and max message at a time.
    * Profiling in typescript -> Check nodemon.json, we have provided env and used the same in config.ts.
        * Config.ts used the js-yaml to convert yml to json and json to object and did validation.
        * I had went through : https://github.com/motdotla/dotenv 
            * I can see this is very easy for profiling , but problem is mandatory check and object mapping 
            * hence handling the yaml file is easy and straight forward.

* Things needs to explore more are 
    * Open API spec
    * Hibernet validation like in Java -> This is done using the class-validation(check out config.ts)
    * Mysql connect to database
    * ORM like feature, Transaction handling
    * What is promise and related work
    * One more concept container in type script()
    
* References : 
    * http://www.lib4dev.in/info/typestack/routing-controllers/43418793
    * https://github.com/typestack/routing-controllers#inject-query-parameters
    * https://codebrains.io/express-typescript-routing-controllers/
    * https://www.npmjs.com/package/routing-controllers#inject-query-parameters
    * https://loopback.io/doc/en/lb4/Routes.html
    * https://medium.com/better-programming/typescript-and-node-js-a-simple-guide-to-creating-rest-apis-7bfac9f58b34    
