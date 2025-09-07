
onload = (event) => {
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementById("correo");
    let mensajeInput = document.getElementById("mensaje");



    document.getElementById("enviar").onclick = ()=>{
        if (nombreInput.value.length == 0){
            alert("el nombre no puede estar vacio");
            return
        }
        if (emailInput.value.length == 0){
            alert("el correo no puede estar vacio");
            return
        }
        if (mensajeInput.value.length == 0){
            alert("el mensaje no puede estar vacio");
            return
        }


        let correovali = emailInput.value.split("@").pop();
        if (correovali === undefined || correovali !== "duocuc.cl"){
            alert("el correo no es un correo duoc valido");
            return;
        }





    };


}




