
import { ItemController } from "./ItemController.js";
export function addCartas(container, limit) {
    
    container.innerHTML = "";
    
  
    let items = new ItemController().getItems();


    for (let i=0; i < limit; i++) {
        if (i >= items.length)return;

        const element = items[i];
        let price = element.getPrice() - ((1.0-element.getPriceMod()) * element.getPrice()); 
        
        let cardRoot = document.createElement("div");cardRoot.id = "product_card";
        let cardItems = document.createElement("div");cardItems.className="card product-card-items";
        cardItems.innerHTML = `
            <img src="${element.getImgSrc()}" width="300" class="productImage" alst="...">
            <div class="card-body">
                <h3 class="card-title">${element.getName()}</h3>
                <h4>${element.getDescription()}</h4>
                <p class="card-text"> $ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(price)} </p>
                <button class="btn btn-primary" >Comprar (${element.getStock()} en stock)</button>
            </div>`;
        const botonCompra = cardItems.children[1].children[3];
        botonCompra.disabled = element.getStock()==0;

        container.appendChild(cardRoot);
        cardRoot.appendChild(cardItems);
        botonCompra.onclick = ()=>{
            const url = new URL(window.location.href);
            url.pathname = "DetalleProducto.html";
            url.searchParams.set('item',element.getId());
            window.location.href = url;
        }

    }
    //shittySale(0)
}