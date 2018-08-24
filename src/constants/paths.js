class userPath {
    constructor(name,path, mode){
        this.name = name;
        this.path = path;
        this.mode = mode;
        // mode
        // 0 - logged and unlogged / unprotected
        // 1 - only unlogged / unprotected
        // 2 - only logged / protected
    }
}
const paths = [
    new userPath('Home', '/home', 2),
    new userPath('Login', '/login',1),
    new userPath('Register', '/register',1)
]

export default paths;
