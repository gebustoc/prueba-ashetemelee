import { User } from "../User.js";
import { UserController } from "../UserController.js";

onload = (event) => {
    let passwordInput = document.getElementById("input-password");
    let usernameInput = document.getElementById("input-username");
    console.log(passwordInput,usernameInput);

    document.getElementById("boton-inicio").onclick = ()=>{
        let pass = passwordInput.value;
        let user = usernameInput.value; 

        if (pass === "" || user === ""){
            alert("no hay una contraseña o usuario.");
            return;
        }

        let correovali = user.split("@").pop();
        if (correovali === undefined || correovali !== "duocuc.cl"){
            alert("el correo no es un correo duoc valido");
            return;
        }


        let userData = new User(user,pass);
        let login = new UserController().saveUser(userData);

        switch (login) {
            case UserController.ErrorCodes.USER_EXISTS:
                alert("el usuario ya existe.");            
                break;
            case UserController.ErrorCodes.OK:
                alert("usuario creado :)");
                localStorage.setItem("cur_user",userData.getUserName())
                console.log("???");
                window.location.href = "/index.html";
                break;
            case UserController.ErrorCodes.EMAIL_TOO_LONG:
                alert("El correo es muy largo.");            
                break;
        }


    };


}




