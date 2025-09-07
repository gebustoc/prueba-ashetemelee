import { User } from "../User.js";
import { UserController } from "../UserController.js";

let passwordInput = document.getElementById("input-password");
let usernameInput = document.getElementById("input-username");

document.getElementById("boton-inicio").onclick = ()=>{
    let pass = passwordInput.value;
    let user = usernameInput.value;
    let userData = new User(user,pass);
    let login = new UserController().loginUser(userData);
    switch (login) {
        case UserController.ErrorCodes.USER_NOT_FOUND:
            alert("el usuario no existe.");            
            break;
        case UserController.ErrorCodes.WRONG_PASSWORD:
            alert("contraseña incorrecta");
            break;

        default:
            alert("logeado :)");
            localStorage.setItem("cur_user",userData.getUserName());
            window.location.href = "index.html";
            break;
    }


};

