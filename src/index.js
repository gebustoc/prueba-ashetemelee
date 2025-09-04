import { ItemController } from "./ItemController.js";



function regenerateContainers() {
    const container = document.getElementById("product-container")
    container.innerHTML = ""
    
  
    let items = new ItemController().getItems();
    for (const i in items) {
        const element = items[i];
        let price = element.getPrice() - ((1.0-element.getPriceMod()) * element.getPrice()); 

        container.innerHTML = container.innerHTML+
        `<button onclick="idk" >Comprar (${element.getStock()} en stock)</button>` 
        /*
        +`
            <div id="product_card">
                <div class="card" style="width: 18rem;">
                    <img src="${element.getImgSrc()}" width="300" class="productImage" alst="...">
                    <div class="card-body">
                        <h3 class="card-title">${element.getName()}</h3>
                        <h4>${element.getDescription()}</h4>
                        <p class="card-text"> $ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(price)} </p>
                        <button class="btn btn-primary" onclick="idk()" >Comprar (${element.getStock()} en stock)</button>
                    </div>
                </div>
            </div>        
        `// wea ql larga para formatear numeros 
        */    
    }
    //shittySale(0)
}
function idk() {
    console.log('32')
}

function shittySale(id){
    let item = new ItemController().getItem(id);
    item.setStock(item.getStock()-1);
    new ItemController().updateItem(item);
    regenerateContainers();

}

regenerateContainers()

