
import { ItemController } from "../ItemController.js";

function createCards() {
    const ItemContainer = document.getElementById("item-container")
    ItemContainer.innerHTML = ""
    for (let i=0; i < 8; i++){
        let item = new ItemController().getItem(i);
        const CardRoot = document.createElement("div");CardRoot.className = "card mb-3";CardRoot.style.width = "100vw";
        ItemContainer.appendChild(CardRoot);    

        
        CardRoot.innerHTML = `
            <div class="card-body">
                <div class="row no-gutters flex-nowrap">
                <img src="${item.getImgSrc()}" class="card-img" style="width: 15rem;">
                <div class="col-md-8">
                    <h3 class="card-title">${item.getName()}</h3> 
                    <h5>$300.000.000</h5>
                    <button class="btn btn-primary" ${item.getStock()==0 ? 'disabled=""' : ""}>Comprar (stock ${item.getStock()})</button>
                    <button type="button" class="btn btn-primary me-2">
                        <img class="carrito" src="assets/img/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                    </button>
                </div>
            </div>`; 

        CardRoot.children[0].children[0].children[1].children[2].onclick = ()=>{
            item.setStock(item.getStock()-1);
            console.log(item.getStock())
            new ItemController().updateItem(item);
            createCards();

        }
        CardRoot.children[0].children[0].children[1].children[3].onclick = ()=>{
            console.log("tetoooooo!!!")

        }

    }
}


createCards();