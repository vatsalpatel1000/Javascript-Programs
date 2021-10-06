init.view.update={
    dish:()=>{
        var select=document.getElementById('select');
         var currdata=Dish.loadall();
         var keys=Object.keys(currdata);
         for(i in keys){
             var key=keys[i];
             var option=document.createElement('option');
             option.value=currdata[key].id;
             option.text=currdata[key].name;
             select.add(option,null);
         }
        document.getElementById('selectdish').addEventListener('click',init.view.update.populate);
    },
    populate:()=>{
        var id=document.getElementById('select').value;
        if(id){
            var currdata=Dish.loadall();
            document.getElementById('id').value=currdata[id].id;
            document.getElementById('name').value=currdata[id].name;
            document.getElementById('price').value=currdata[id].price;
        }
        else{
            alert('choose a book to update')
        }
        document.getElementById('submit').addEventListener('click',init.view.update.updatedish);
    },
    updatedish:()=>{
        var id=document.getElementById('select').value;
        var newdata={
            name:document.getElementById('name').value,
            price:document.getElementById('price').value
        }
        Dish.update(id,newdata);
        document.getElementById('form').reset();
    }
}