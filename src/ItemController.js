import { Item } from "./Item.js";

export class ItemController{
    
    static ErrorCodes = {
        OK:0,
        ITEM_EXISTS:1,
        ITEM_NOT_FOUND:2,
    }

    constructor(){

        if (localStorage.getItem("items") === null){
            localStorage.setItem("items",JSON.stringify({}));
            localStorage.setItem("newestItem",-1);
        }
        
        let priceMult = 1.0;
        for (let i = 0; i < 8; i++) {
            this.saveItem(new Item(`test-${i}`,"nose",Math.random()*99999999,1,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"));
            
        }
        

    }
    getItems(){
        let items = JSON.parse(localStorage.getItem("items"));
        let itemRet = [];

        for (const id in items) {
            itemRet.push(this.getItem(id));
        }
        return itemRet;
    }



    itemExists(id){
        if (id == -1) return false;
        if (id == undefined) return false;
        let items = JSON.parse(localStorage.getItem("items"));
        return items[id] != undefined;
    }
    itemNameExists(name){
        let items = JSON.parse(localStorage.getItem("items"));
        for (const i in items) {
            const element = items[i];
            if (element._name == name) return true;            
        }
        
        return false;
    }

    getNewestId(){
        return Number.parseInt(localStorage.getItem("newestItem"))+1;
    }


    getItem(id){
        if (id == undefined) return null;
        let items = JSON.parse(localStorage.getItem("items"));
        let item = items[id];
        let truitem = new Item(item._name,item._description,item._price,item._stock,item._pricemod,item._imgsrc);
        truitem.setId(item._id);
        return truitem;
    }

    saveItem(item){
        if (this.itemExists(item.getId()) || this.itemNameExists(item.getName())){
            console.error("el item", item, "ya existe en el sistema");
            return ItemController.ErrorCodes.ITEM_EXISTS;    
        }

        let items = JSON.parse(localStorage.getItem("items")); 

        item.setId(this.getNewestId());
        localStorage.setItem("newestItem",item.getId());
        items[item.getId()] = item;
        localStorage.setItem("items",JSON.stringify(items));
        return ItemController.ErrorCodes.OK;
    }

    updateItem(item){
        if (!this.itemExists(item.getId())){
            console.error("el item", item, "no existe en el sistema");
            return ItemController.ErrorCodes.ITEM_NOT_FOUND;    
        }
        
        let items = JSON.parse(localStorage.getItem("items")); 
        items[item.getId()] = item;
        localStorage.setItem("items",JSON.stringify(items));
        return ItemController.ErrorCodes.OK;
    }


    eraseItem(item){
        if (!this.itemExists(item.getId())){
            console.error("el item", item, "no existe en el sistema");
            return ItemController.ErrorCodes.ITEM_NOT_FOUND;    
        }
        let items = JSON.parse(localStorage.getItem("items"));
        delete items[user.getId()];
        localStorage.setItem("items",JSON.stringify(items));
        return ItemController.ErrorCodes.OK;
    }
    

}


