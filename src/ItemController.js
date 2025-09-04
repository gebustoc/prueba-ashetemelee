import { Item } from "./item.js";
import { User } from "./user.js";

export class ItemController{
    
    static ErrorCodes = {
        OK:0,
        ITEM_EXISTS:1,
        ITEM_NOT_FOUND:2,
    }

    // creates empty user dict
    constructor(){
        if (localStorage.getItem("items") === null){
            localStorage.setItem("items",JSON.stringify({}));
            localStorage.setItem("newestItem",-1);
            let priceMult = 1.0;
            this.saveItem(new Item("test-0","nose",Infinity,1,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"));
            this.saveItem(new Item("test-1","nose",32,1,1.5,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"));
            this.saveItem(new Item("test-2","nosel",Infinity,2,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"));


        }
        
        

    }
    getItems(){
        console.log(localStorage.getItem("users"))
        let items = JSON.parse(localStorage.getItem("items"));
        let userRet = [];
        console.log(items);

        for (const id in items) {
            userRet.push(this.getItem(id))
        }
        return userRet;
    }



    itemExists(id){
        if (id == -1) return false;
        if (id == undefined) return false;
        let items = JSON.parse(localStorage.getItem("items"));
        return items[id] != undefined;
    }

    getNewestId(){
        return Number.parseInt(localStorage.getItem("newestItem"))+1;
    }


    getItem(id){
        if (id == undefined) return null;
        let users = JSON.parse(localStorage.getItem("items"));
        let item = users[id];
        let truitem = new Item(item._name,item._description,item._price,item._stock,item._pricemod,item._imgsrc);
        truitem.setId(item._id);
        return truitem;
    }

    saveItem(item){
        if (this.itemExists(item.getId())){
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
        items[user.getItem()] = item;
        localStorage.setItem("items",JSON.stringify(items));
        return ItemController.ErrorCodes.OK;
    }


    eraseItem(item){
        if (!this.itemExists(item.getId())){
            console.error("el item", item, "no existe en el sistema");
            return ItemController.ErrorCodes.ITEM_NOT_FOUND;    
        }
        let users = JSON.parse(localStorage.getItem("items"));
        delete users[user.getId()];
        localStorage.setItem("items",JSON.stringify(users));
        return ItemController.ErrorCodes.OK;
    }


}

