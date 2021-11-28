const clicking=()=>{
    var b=document.getElementById("box");
    b.setAttribute("class","boxi");
    console.log(b);
    var a=document.createElement("p");
    a.innerText="Add New List";
    a.setAttribute("class","box1");
    console.log(a);
    b.appendChild(a);

    // var c=document.createElement("form");
    var d=document.createElement("input");
    d.setAttribute("type","text");
    d.setAttribute("class","box2");
    d.placeholder="add new list";
    console.log(d)
    var c=document.getElementById("box").appendChild(d);
    console.log(c);

    


    var e=document.createElement("button");
    e.setAttribute("class","box3");
    e.onclick="add()";
    e.innerText="Add";
    console.log(e);
    var f=document.getElementById("box").appendChild(e);
    console.log(e);

    var g=document.createElement("button");
    g.setAttribute("class","box4");
    g.onclick="close()";
    g.innerText="Close";
    console.log(g);
    var h=document.getElementById("box").appendChild(g);
    console.log(g);  
    
    var i=document.getElementById("box");
    console.log(i);

    
}






 // <div id="check" class="box">
    // <p class="box1">Add New List</p>
    // <input class="box2" type="text" placeholder="Add new list">
    // <button class="box3" onclick="add()">Add</button>
    // <button class="box4" onclick="close()">Close</button>
    // </div>


