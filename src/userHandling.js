// strip the stuff in the bottom
class UserControllerThingy{
    
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
        let users = JSON.parse(localStorage.getItem("users"));
        return users[userName] != undefined;
    }

    createUser(userName, passhash){
        if (this.userExists(userName)){
            console.error(`el usuario ${userName} ya existe en el sistema`);
            return UserControllerThingy.ErrorCodes.USER_EXISTS;    
        }

        saveUser({name:userName,hash:passhash});
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
        let curUser =getUser(userName)
        if (curUser == UserControllerThingy.ErrorCodes.USER_NOT_FOUND)return curUser;

        if (curUser.hash !== passhash){
            console.error(`contraseña incorrecta.`);            
            return UserControllerThingy.ErrorCodes.WRONG_PASSWORD;
        }

        return curUser;
    }  

    

    saveUser(user) {
        let users = JSON.parse(localStorage.getItem("users"));
        users[user.name] = user;        
        localStorage.setItem("users",JSON.stringify(users));
    }

    getUser(userName) {
        if (!this.userExists(userName)){
            console.error(`el usuario ${userName} no existe en el sistema`);
            return UserControllerThingy.ErrorCodes.USER_NOT_FOUND;    
        }
        return JSON.parse(localStorage.getItem("users"))[userName];
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
    new UserControllerThingy().createUser(name.value,pass.value);
    refreshText();
}
function eraseUser(){
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    new UserControllerThingy().eraseUser(name.value,pass.value);
    refreshText();
}

function switchPassword() {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    new UserControllerThingy().eraseUser(name.value,pass.value);
    refreshText();
}

function loginTest() {
    const name = document.getElementById("name");
    const pass = document.getElementById("pass");
    let res = new UserControllerThingy().loginUser(name.value,pass.value);
    switch (res) {
        case UserControllerThingy.ErrorCodes.USER_NOT_FOUND:
            alert("el usuario no existe.");            
            break;
        case UserControllerThingy.ErrorCodes.WRONG_PASSWORD:
            alert("contraseña incorrecta");
            break;

        default:
            alert("logeado :)")
            break;
    }
}




new UserControllerThingy().createUser("john pork","pene"); // init

refreshText();
