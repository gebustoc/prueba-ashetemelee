// strip the stuff in the bottom
class UserControllerThingy{
    
    static ErrorCodes = {
        OK:0,
        USER_EXISTS:1,
        USER_NOT_FOUND:2,
        WRONG_PASSWORD:3

    }
    dummyitem = {

    }


    // creates empty user dict
    constructor(){
        if (localStorage.getItem("items") !== null) return;
        localStorage.setItem("items",JSON.stringify({}))
    }

    itemExists(itemID){
        let users = JSON.parse(localStorage.getItem("items"));
        return users[itemID] != undefined;
    }

    createUser(userName, passhash){
        if (this.userExists(userName)){
            console.error(`el usuario ${userName} ya existe en el sistema`);
            return UserControllerThingy.ErrorCodes.USER_EXISTS;    
        }

        let users = JSON.parse(localStorage.getItem("users"));
        let curUser ={name:userName,hash:passhash}; 
        users[userName] = curUser;
        localStorage.setItem("users",JSON.stringify(users));
        return UserControllerThingy.ErrorCodes.OK;
    }

    eraseUser(userName, passhash){
        if (!this.userExists(userName)){
            console.error(`el usuario ${userName} no existe en el sistema`);
            return UserControllerThingy.ErrorCodes.USER_NOT_FOUND;    
        }
        let users = JSON.parse(localStorage.getItem("users"));
        let curUser =users[userName];
        if (!curUser.hash == passhash){
            console.error(`contraseña incorrecta.`);            
            return UserControllerThingy.ErrorCodes.WRONG_PASSWORD;
        }
        delete users[userName];
        localStorage.setItem("users",JSON.stringify(users));
        return UserControllerThingy.ErrorCodes.OK;
    }
    
    loginUser(userName, passhash){
        if (!this.userExists(userName)){
            console.error(`el usuario ${userName} no existe en el sistema`);
            return UserControllerThingy.ErrorCodes.USER_NOT_FOUND;    
        }
        let users = JSON.parse(localStorage.getItem("users"));
        let curUser =users[userName];
        if (!curUser.hash == passhash){
            console.error(`contraseña incorrecta.`);            
            return UserControllerThingy.ErrorCodes.WRONG_PASSWORD;
        }

        return curUser;
    }  

}


