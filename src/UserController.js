import { User } from "./User.js ";

// strip the stuff in the bottom
export class UserController{
    
    static ErrorCodes = {
        OK:0,
        USER_EXISTS:1,
        USER_NOT_FOUND:2,
        WRONG_PASSWORD:3

    }

    // creates empty user dict
    constructor(){
        if (localStorage.getItem("users") !== null) return;
        localStorage.setItem("users",JSON.stringify({}))
    }

    userExists(userName){
        if (userName == undefined) return false;
        let users = JSON.parse(localStorage.getItem("users"));
        return users[userName] != undefined;
    }

    getUser(userName){
        if (userName == undefined) return null;
        let users = JSON.parse(localStorage.getItem("users"));
        let user = users[userName];
        return new User(user._userName,user._passHash);
    }



    saveUser(user){
        if (this.userExists(user.getUserName())){
            console.error(`el usuario ${user.getUserName()} ya existe en el sistema`);
            return UserController.ErrorCodes.USER_EXISTS;    
        }

        let users = JSON.parse(localStorage.getItem("users")); 
        users[user.getUserName()] = user;
        localStorage.setItem("users",JSON.stringify(users));
        return UserController.ErrorCodes.OK;
    }
    updateUser(user){
        if (!this.userExists(user.getUserName())){
            console.error(`el usuario ${user.getUserName()} no existe en el sistema`);
            return UserController.ErrorCodes.USER_NOT_FOUND;    
        }
        
        let users = JSON.parse(localStorage.getItem("users")); 
        users[user.getUserName()] = user;
        localStorage.setItem("users",JSON.stringify(users));
        return UserController.ErrorCodes.OK;
    }


    eraseUser(user){
        if (!this.userExists(user.getUserName())){
            console.error(`el usuario ${user.getUserName()} no existe en el sistema`);
            return UserController.ErrorCodes.USER_NOT_FOUND;    
        }
        let users = JSON.parse(localStorage.getItem("users"));
        delete users[user.getUserName()];
        localStorage.setItem("users",JSON.stringify(users));
        return UserController.ErrorCodes.OK;
    }
    
    loginUser(user){
        if (!this.userExists(user.getUserName())){
            console.error(`el usuario ${user.getUserName()} no existe en el sistema`);
            return UserController.ErrorCodes.USER_NOT_FOUND;    
        }
        let validUser = this.getUser(user.getUserName());

        if (validUser.getPassHash() !== user.getPassHash()){
            console.error(`contraseña incorrecta.`);            
            return UserController.ErrorCodes.WRONG_PASSWORD;
        }
        return UserController.ErrorCodes.OK;
    }  


}





function refreshText(){
    const Users = JSON.parse(localStorage.getItem("users"));
    const TextDump = document.getElementById("textdump");
    TextDump.innerHTML = "";
    for (const key in Users) {
        TextDump.innerHTML = TextDump.innerHTML+JSON.stringify(Users[key])+'<br>';
    }
    
}


function makeUser(){
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    
    new UserController().saveUser(new User(name.value,pass.value));
    refreshText();
}
function eraseUser(){
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    new UserController().eraseUser(
        new User(name.value,pass.value)
    );
    refreshText();
}

function switchPassword() {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    new UserController().updateUser(new User(name.value,pass.value));
    refreshText();
}

function loginTest() {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    let res = new UserController().loginUser(new User(name.value,pass.value));
    switch (res) {
        case UserController.ErrorCodes.USER_NOT_FOUND:
            alert("el usuario no existe.");            
            break;
        case UserController.ErrorCodes.WRONG_PASSWORD:
            alert("contraseña incorrecta");
            break;

        default:
            alert("logeado :)")
            break;
    }
}



