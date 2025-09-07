import { Item } from "../Item.js";
import { ItemController } from "../ItemController.js";


function regenerateContainers() {
    
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    
  
    let items = new ItemController().getItems();


    for (let i=0; i < 12; i++) {
        if (i >= items.length)return;

        const element = items[i];
        let price = element.getPrice() - ((1.0-element.getPriceMod()) * element.getPrice()); 



        container.innerHTML = container.innerHTML+`
            <div id="product_card">
                <div class="card" style="width: 18rem;">
                    <img src="${element.getImgSrc()}" width="300" class="productImage" alst="...">
                    <div class="card-body">
                        <h3 class="card-title">${element.getName()}</h3>
                        <h4>${element.getDescription()}</h4>
                        <p class="card-text"> $ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(price)} </p>
                        <button class="btn btn-primary" onclick="idk(32)" >Comprar (${element.getStock()} en stock)</a>
                    </div>
                </div>
            </div>        
        `;
    }
    //shittySale(0)
}


new ItemController().saveItem(
    new Item("Gráfica RTX 5080", "Tarjeta gráfica de última generación", 800000, 5, 1.0, "https://gsmpro.cl/cdn/shop/files/pny-geforce-rtx-5080-16gb-argb-overclocked-triple-fan.webp?v=1747339989&width=800")
);
new ItemController().saveItem(
    new Item("tula", "Tarjeta gráfica de última generación", 800000, 5, 1.0, "https://gsmpro.cl/cdn/shop/files/pny-geforce-rtx-5080-16gb-argb-overclocked-triple-fan.webp?v=1747339989&width=800")
);

regenerateContainers();

/*.addEventListener('click', );*/