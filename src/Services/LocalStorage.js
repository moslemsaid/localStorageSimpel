export default class LocalStorage{

    static save(k,v){
        localStorage.setItem(k,v);
    }
    static find(k){
        return localStorage.getItem(k);
    }
    static getAll(){
        const items =  {...localStorage};
        return items;
    }
    static remove(k){
        localStorage.removeItem(k);
    }
    static edit(k,v){
        localStorage.removeItem(k);
        localStorage.setItem(k,v);
    }
}