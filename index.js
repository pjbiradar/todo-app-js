


const clic=()=>{
    var bigbox=document.createElement("div");
    bigbox.setAttribute("id","bigbox1");
    
    
    var inside=document.createElement("label");
    inside.innerHTML="ADD NEW LIST";
    inside.setAttribute("for","insidee");
    bigbox.appendChild(inside);

    var inside1=document.createElement("input");
    inside1.setAttribute("placeholder","Enter the list")
    inside1.setAttribute("id","insidee1");
    inside1.setAttribute("name","text");
    inside1.setAttribute("type","text");
    bigbox.appendChild(inside1);

    var inside2=document.createElement("button");
    inside2.innerHTML="ADD";
    inside2.setAttribute("id","insidee2");
    inside2.setAttribute("type","submit");
    inside2.setAttribute("onclick","goo()");
    bigbox.appendChild(inside2);

    var inside3=document.createElement("button");
    inside3.innerHTML="CLOSE";
    inside3.setAttribute("id","insidee3");
    inside3.setAttribute("onclick","goo1()");
    inside3.setAttribute("type","submit");
    bigbox.appendChild(inside3);

    document.getElementById("top").appendChild(bigbox);

    var q=document.getElementById("top1");
    q.style.filter="blur(10px)";
    

}
var cap;
function goo(){
    var capture=document.getElementById("insidee1");
    cap=capture.value;
    //console.log(cap);

    var q=document.getElementById("top1");
    q.style.filter="none";

    var r=document.getElementById("bigbox1");
    r.remove();
    illusion();

}





const illusion=()=>{
   console.log(cap);
    var build=document.createElement("div");
    build.setAttribute("class","child");
    build.setAttribute("id",cap);
   
    
    var build1=document.createElement("p");
    build1.setAttribute("class","placee")
    build1.setAttribute("id",cap+"place");
    build1.innerHTML=cap;
    build1.innerHTML= <a href="#mark"></a>

    var line=document.createElement("hr");

    var build2=document.createElement("div");
    build2.setAttribute("class","thingsudid");
    build2.setAttribute("id",cap+"thingsudid")

    var build3=document.createElement("div");
    build3.setAttribute("class","write");
    build3.setAttribute("id",cap+"write")

    var icon1=document.createElement("span");
    icon1.setAttribute("class","ico1")
    icon1.setAttribute("id",cap+"ico1")
    icon1.setAttribute("onclick","add(this.getAttribute('id'))");
    icon1.innerHTML = '<i class="fas fa-plus-square fa-2x aria-hidden="true" "></i>'
    
    var icon2=document.createElement("span");
    icon2.setAttribute("class","ico2")
    icon2.setAttribute("id",cap+"ico2")
    icon2.setAttribute("onclick","dele(this.getAttribute('id'))");
    icon2.innerHTML = '<i class="fas fa-trash-alt fa-2x aria-hidden="true" "></i>'

    build2.appendChild(build3);
    build2.appendChild(icon1);
    build2.appendChild(icon2);
    build.appendChild(build1);
    build.appendChild(line);
    build.appendChild(build2);
    document.getElementById("start").appendChild(build);

}
function goo1(){
    var q=document.getElementById("top1");
    q.style.filter="none";
    var r=document.getElementById("bigbox1");
    r.remove();
}
var vall
function add(el){
    var bigboxx=document.createElement("div");
    bigboxx.setAttribute("id","bigbox2");
    
    
    var insideone=document.createElement("label");
    insideone.innerHTML="ADD NEW LIST";
    insideone.setAttribute("for","insideee");
    bigboxx.appendChild(insideone);

    var insidetwo=document.createElement("input");
    insidetwo.setAttribute("placeholder","Enter the list")
    insidetwo.setAttribute("id","insideee1");
    insidetwo.setAttribute("name","text");
    insidetwo.setAttribute("type","text");
    bigboxx.appendChild(insidetwo);

    var insidethree=document.createElement("button");
    insidethree.innerHTML="ADD";
    insidethree.setAttribute("id","insideee2");
    insidethree.setAttribute("type","submit");
    insidethree.setAttribute("onclick","secondclick()");
    bigboxx.appendChild(insidethree);

    var insidefour=document.createElement("button");
    insidefour.innerHTML="CLOSE";
    insidefour.setAttribute("id","insideee3");
    insidefour.setAttribute("onclick","secondclick2()");
    insidefour.setAttribute("type","submit");
    bigboxx.appendChild(insidefour);

    document.getElementById("top").appendChild(bigboxx);
    vall=el
    
}

var take;
function secondclick(){
    

    var gasp=document.getElementById("insideee1");
    take=gasp.value;
    console.log(take);

    var y=document.getElementById("top1");
    y.style.filter="none";

    var t=document.getElementById("bigbox2");
    t.remove(length);


    hurray()
}


function hurray(){
    var create1=document.createElement("p");
    create1.setAttribute("class","innerp")
    create1.setAttribute("id",cap+take+"master");
    
    var creater=document.createElement("span")
    creater.setAttribute("id",take+"mark")
    create1.innerHTML=take;

    var create2=document.createElement("span");
    create2.setAttribute("class","markdone")
    create2.setAttribute("id",take+"markdone");
    create2.setAttribute("onclick","change(this.getAttribute('id'))");
    create2.innerHTML="markdone";
    
    create1.appendChild(creater)
    create1.appendChild(create2)
    var find=document.getElementById(vall)
    var got=find.previousElementSibling
    got=got.id
    document.getElementById(got).appendChild(create1)
    



}
// the line is not changing
function change(markdone){
    var assign=document.getElementById(markdone);
    console.log(assign)
    var asking=assign.previousElementSibling
    console.log(asking)
    asking.style.color="purple";
    assign.remove()

    

}
// trying to remove the delete button
function dele(child){
    var will=document.getElementsByClassName("child");
    console.log(will);
    will.remove()



}

// function next(place){
//     var linc=document.getElementById(place);
//     linc.innerHTML=illusion+secondclick+hurray;
//     top1.appendChild(linc)


// }


    





















































































































































































































// var zeroo=document.getElementById("newyork");
// zeroo.style.visibility="hidden";

// var zeroo1=document.getElementById("paris");
// zeroo1.style.visibility="hidden";

// var mylist=[];
// function add(){
//     var p1=document.getElementById("text").value;
//     var tempObj={
//         name:p1
//     };
//     mylist.push(tempObj);
//     console.log(tempObj);
//     addie();
    
// }
// function addie(){
//     var y=document.getElementById("box");
//     y.style.visibility="hidden";
    
//     var zeroo=document.getElementById("newyork");
//     zeroo.style.visibility="visible";

//     const child=document.createElement("div");
//     child.setAttribute("id","any");
//     child.innerText=mylist[mylist.length-1].name;
//     var zeroo=document.getElementById("newyork");
//     zeroo.appendChild(child);
//     // zeroo.remove();

//     zeroo1=document.getElementById("paris");
//     zeroo1.style.visibility="visible";

//     const child1=document.createElement("div");
//     child1.setAttribute("id","any1");
//     child1.innerText=mylist[mylist.length-1].name;
//     zeroo1.appendChild(child1);

// }
// function clic(){
//     var y=document.getElementById("box");
//     y.style.visibility="visible";
    
// }

// var clicking=()=>{
//     var b=document.getElementById("box");
//     b.setAttribute("class","boxi");
//     console.log(b);     
//     var a=document.createElement("p");
//     a.innerText="Add New List";
//     a.setAttribute("class","box1");
//     a.appendChild(b);

    
//     var d=document.createElement("input");
//     d.setAttribute("type","text");
//     d.setAttribute("class","box2");
//     d.setAttribute("id","text2");
//     d.placeholder="add new list";
    
//     console.log(d);
   
//     var c=document.getElementById("box").appendChild(d);
//     console.log(c);

//     var e=document.createElement("button");
//     e.setAttribute("class","box3");
//     e.innerHTML="Add";
//     // e.onclick="add()";
//     // e.getElementById("text2").value;
//     // console.log(o);
//     var f=document.getElementById("box").appendChild(e);

//     console.log(e);

//     var g=document.createElement("button");
//     g.setAttribute("class","box4");
//     g.innerText="Close";
//     console.log(g);
//     var h=document.getElementById("box").appendChild(g);
//     console.log(g);  

    
    
//     var i=document.getElementById("box");
//     console.log(i);

    
// }




