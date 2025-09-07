
window.onload = (event) => {

    for (const loginButton of document.getElementsByClassName("no_cuenta") ){
        loginButton.style.visibility =localStorage.getItem("cur_user") === null ? "visible" :"hidden" ;
    }

}   

