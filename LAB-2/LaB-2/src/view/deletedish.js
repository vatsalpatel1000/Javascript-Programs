init.view.delete={
    dish:()=>{
        var dishdata=Dish.loadall();
        var keys=Object.keys(dishdata);
        for(i in keys){
            var key=keys[i];
            var dish=dishdata[key];

            var available=document.createElement('option');
            available.value=dish.id;
            available.text=dish.name;
            document.getElementById('selectdish').add(available,null);
        }
        document.getElementById('delete').addEventListener('click',init.view.delete.deletedish);
    },
    deletedish:()=>{

        var selectElement=document.getElementById('selectdish');
        var dishtoremove=selectElement.value;
        if (dishtoremove && confirm('Are you sure you want to delete this dish?')) {
            Dish.delete(dishtoremove);
            selectElement.remove(selectElement.selectedIndex);
        }

    }
}