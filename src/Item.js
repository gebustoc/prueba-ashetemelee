export class Item{
    constructor(name, description, price,stock,pricemod = 1.0, imgsrc){
        this._name = name;
        this._description = description;
        this._price = price;
        this._stock = stock
        this._pricemod = pricemod;
        this._id = -1;
        this._imgsrc = imgsrc
    }
    getId(){return this._id;}
    setId(id){
        if (this._id != -1) return;
        this._id = id;
    }
    setName(name){this._name = name;}
    setDescription(description){ this._description = description;}
    setPrice(price){this._price = price;}
    setStock(stock){this._stock = stock}
    setPricemod(pricemod){this._pricemod = pricemod;}
    setImgsrc(imgsrc){ this._imgsrc = imgsrc;}
}