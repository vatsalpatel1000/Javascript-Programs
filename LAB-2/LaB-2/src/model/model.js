class Dish{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    instances={};

    static loadall(){
        var currdata=JSON.parse(window.localStorage.getItem('dish'));
        this.instances={...currdata};
        return currdata;
    }

    static create({id,name,price}){

        var newdish=new Dish(id,name,price);
        var data={...this.instances};
        data[`${id}`]=newdish;
        this.instances=data;
        Dish.save();
    }

    static saveall(){
        var newdata=JSON.stringify(this.instances);
        try{
            window.localStorage.setItem('dish',newdata);
        }
        catch{
            throw Error("not possibele");
        }
    }

    static save(){
        var dishes=JSON.parse(window.localStorage.getItem('dish'));
        var newdata=JSON.stringify({...dishes,...this.instances});
        try{
            window.localStorage.setItem('dish',newdata);
        }
        catch{
            throw Error("not possible");
        }
    }
    
    static delete(id){
        var data=this.instances[id];
        if(data){
            delete this.instances[id];
            Dish.saveall();
        }
    }

    static update(id,newdata){
        const currdata=Dish.loadall();
        var dish=currdata[id];
        dish.name=newdata.name;
        dish.price=newdata.price;
        Dish.save();
    }

}