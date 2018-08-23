class userPath {
    constructor(name,path){
        this.name = name;
        this.path = path;
    }
}
const paths = [
    new userPath('Home', '/home'),
    new userPath('Login', '/login'),
    new userPath('Register', '/register')
]

export default paths;
