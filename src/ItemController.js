import { Item } from "./item";
import { User } from "./user";

export class ItemController{
    
    static ErrorCodes = {
        OK:0,
        ITEM_EXISTS:1,
        ITEM_NOT_FOUND:2,
    }

    // creates empty user dict
    constructor(){
        if (localStorage.getItem("items") !== null) return;
        localStorage.setItem("items",JSON.stringify({}))
        let priceMult = 1.0
        this.saveItem(new Item("test-0","nose",Infinity,1,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"))
        this.saveItem(new Item("test-0","nose",Infinity,1,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"))
        this.saveItem(new Item("test-2","nosel",Infinity,2,priceMult,"https://media.tenor.com/xVZpEi-lU6kAAAAM/kasane-teto-teto-kasane.gif"))
        


    }
    getItems(){
        let items = JSON.parse(localStorage.getItem("items"));
        let userRet = []
        for (const id in items) {
            userRet.push(this.getItem(id))
        }
        return userRet;
    }



    itemExists(id){
        if (id == -1) return true;
        if (id == undefined) return false;
        let users = JSON.parse(localStorage.getItem("items"));
        return users[id] != undefined;
    }

    getNewestId(){
        let items = JSON.parse(localStorage.getItem("items"));
        if (Object.keys(items).length === 0)return 0;
        return Math.max(Object.keys(items))+1;
    }


    getItem(id){
        if (id == undefined) return null;
        let users = JSON.parse(localStorage.getItem("users"));
        let item = users[id];
        let truitem = User(item._name,item._description,item._price,item._stock,item._pricemod,item._imgsrc);
        truitem.setId(item._id);
        return truitem
    }

    saveItem(item){
        if (this.itemExists(item.getId())){
            console.error("el item", item, "ya existe en el sistema");
            return ItemController.ErrorCodes.ITEM_EXISTS;    
        }

        let items = JSON.parse(localStorage.getItem("users")); 
        item.setId(this.getNewestId());
        items[user.getId()] = item;
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
        localStorage.setItem("users",JSON.stringify(users));
        return ItemController.ErrorCodes.OK;
    }


}

