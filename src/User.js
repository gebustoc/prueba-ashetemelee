export class User{
    constructor(userName, passHash){
        this._userName = userName;
        this._passHash = passHash;
    }

    getUserName(){return this._userName;}
    getPassHash(){return this._passHash;}

    setUserName(val){this._userName = val;}
    setPassHash(val){this._passHash = val;}
}