init.view.list={
    dish:()=>{
        var currdata=Dish.loadall();
        var keys=Object.keys(currdata);
        const table=document.getElementById("table");
        for(i in keys){
            var key=keys[i];
            const row=table.insertRow();
            row.insertCell(-1).textContent=currdata[key].id;
            row.insertCell(-1).textContent=currdata[key].name;
            row.insertCell(-1).textContent=currdata[key].price;
        }
    }
}