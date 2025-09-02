var StockPulento = {};

function createSellable(name,cost,stock,imgSrc){
    if (StockPulento[name] != undefined){
        console.warn("error:el item ya existe");
        return;
    }

    StockPulento[name] = {
        "cost":cost,
        "stock":stock,
        "img":imgSrc,
        "ventas":0
    };

    regenerateContainers()
}


function regenerateContainers() {
    const container = document.getElementById("product-container")
    console.log(container)
    container.innerHTML = ""
    
  
    for (const name in StockPulento) {
        const element = StockPulento[name];
        container.innerHTML = container.innerHTML+`
            <div id="product_card">
                <div class="card" style="width: 18rem;">
                    <img src="${element.img}" width="300" class="productImage" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                        <h4>pene</h4>
                        <p class="card-text"> $ ${new Intl.NumberFormat("de-DE", { style: "currency", currency: "CLP" }).format(element.cost)} </p>
                        <a href="#" class="btn btn-primary">Comprar (${element.stock} en stock)</a>
                    </div>
                </div>
            </div>        
        `

    }
}


createSellable(
    "RTX 5080",
    1_499_990,
    200,
    "https://static.gigabyte.com/StaticFile/Image/Global/38af2d89471f6b313a828c2825305f27/Product/43884/Png"
)

for (let i = 0; i < 4; i++) {
    createSellable(
        'test-element'+i,
        Infinity,
        1,
        "https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"
    )
    
    
}





