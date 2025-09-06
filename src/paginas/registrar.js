import { User } from "../User.js";
import { UserController } from "../UserController.js";

onload = (event) => {
    let passwordInput = document.getElementById("input-password");
    let usernameInput = document.getElementById("input-username");
    console.log(passwordInput,usernameInput);

    document.getElementById("boton-inicio").onclick = ()=>{
        let pass = passwordInput.value;
        let user = usernameInput.value; 
        console.log(pass," ",user)

        if (pass === "" || user === ""){
            alert("no hay una contraseña o usuario.");
            return;
        }

        let userData = new User(user,pass);
        let login = new UserController().saveUser(userData);

        switch (login) {
            case UserController.ErrorCodes.USER_EXISTS:
                alert("el usuario ya existe.");            
                break;
            default:
                alert("usuario creado :)");
                localStorage.setItem("cur_user",userData)
                window.location.href = "index.html";
                break;
        }


    };


}




