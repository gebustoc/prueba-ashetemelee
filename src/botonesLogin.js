

for (const loginButton of document.getElementsByClassName("no-cuenta") ){
    loginButton.style.display =localStorage.getItem("cur_user") === null ? "contents" :"none" ;
}


for (const logoutButton of document.getElementsByClassName("con-cuenta") ){
    logoutButton.style.display =localStorage.getItem("cur_user") === null ? "none" :"contents" ;
}


function logout(){
    localStorage.removeItem("cur_user");
    location.reload();
}