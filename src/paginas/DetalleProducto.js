import { ItemController } from "../ItemController.js";
import { UserController } from "../UserController.js";




function setupPage() {
    const URLParams = new URLSearchParams(window.location.search);
    const itemData = new ItemController().getItem(URLParams.get("item"));
    const botonCompra = document.getElementById("boton-compra");
    document.getElementById("precio-producto").textContent = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(itemData.getPrice());
    document.getElementById("imagen-producto").src = itemData.getImgSrc();
    document.getElementById("nombre-producto").textContent = itemData.getName();
    document.getElementById("desc-producto").textContent = itemData.getDescription();


    let loggedUser = localStorage.getItem("cur_user");
    if (loggedUser == null){
        botonCompra.disabled = true;
        return;
    };
    let userData = new UserController().getUser(loggedUser);
    botonCompra.textContent = `🛒 Añadir al carrito (${itemData.getStock()} en stock)` 
    botonCompra.disabled = itemData.getStock()==0;

    botonCompra.onclick = ()=>{
        userData.getCarrito().push(itemData.getId());        
        new UserController().updateUser(userData);
        setupPage();
        alert("añadido al carrito :D")
    }
    
}


setupPage();