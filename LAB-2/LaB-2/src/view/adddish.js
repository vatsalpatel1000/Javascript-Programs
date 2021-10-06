init.view.create={
    dish:()=>{
        Dish.loadall();
        var btn=document.getElementById("submit");
        btn.addEventListener('click',init.view.create.newdish);
    },
    newdish:()=>{
        var form=document.getElementById('form');
        var dish={
            id:form.id.value,
            name:form.name.value,
            price:form.price.value
        }
        Dish.create(dish);
        form.reset();
    }
}