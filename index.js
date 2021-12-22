function begin() {
    if (document.getElementById("innermain").contains(document.getElementById("power"))) {
        var one = document.getElementById("power")
        one.remove()
    }

    let create1 = document.createElement("div")
    create1.setAttribute("class", "book")
    create1.setAttribute("id", val)


    let tripping = document.createElement("p")
    tripping.setAttribute("class", "trip")
    tripping.setAttribute("id",val+"trip")
    tripping.setAttribute("onclick","insider(this.getAttribute('id'))")
    tripping.innerHTML = val

    let hori = document.createElement("hr")

    let upper = document.createElement("div")
    upper.setAttribute("class", "databox")
    upper.setAttribute("id", val + "in")

    let lower = document.createElement("div")
    lower.setAttribute("class", "databoxin")
    lower.setAttribute("id", val + "inner")

    let icon = document.createElement("span")
    icon.setAttribute("class", val + "icco")
    icon.setAttribute("onclick", "obtaindata(this.getAttribute('class'))")
    icon.innerHTML = '<i class="fas fa-plus-square fa-2x aria-hidden="true" "></i>'

    let icon2 = document.createElement("span")
    icon2.setAttribute("class", val + "iccodel")
    icon2.setAttribute("onclick", "delvalue(this.getAttribute('class'))")
    icon2.innerHTML = '<i class="fas fa-trash-alt fa-2x aria-hidden="true" "></i>'

    upper.appendChild(lower)
    upper.appendChild(icon)
    upper.appendChild(icon2)
    create1.appendChild(tripping)
    create1.appendChild(hori)
    create1.appendChild(upper)
    document.getElementById("innermain").appendChild(create1)

}
function insider(dat){
     let main=document.getElementById("main")
    main.style.display="none"
    var po=document.getElementById(dat)
    var re=po.parentNode
    var box=re.id
    var boxmain=document.getElementById(box)
    var back=document.createElement("span")
    back.setAttribute('class','backer')
    back.setAttribute("onclick","home(this.getAttribute('class'))")
    back.innerHTML = '<i class="fas fa-arrow-alt-circle-left aria-hidden="true""></i>'+'back'
    
    document.getElementById("separatemain").appendChild(back)
    document.getElementById("separatemain").appendChild(boxmain)
}
function home(fil){
    var past=document.getElementsByClassName(fil)
    var mi=past[0].parentNode
    var about=mi.id
    var node=document.getElementById(about)
    var bb=node.lastChild
        node.removeChild(node.firstChild)
    var rev=document.getElementById("main")
    rev.style.display="block"
    document.getElementById("innermain").appendChild(bb)

}
function nothing() {
    var openbox = document.createElement("div")
    openbox.setAttribute("id", "inputbox")

    var lab = document.createElement("label")
    lab.setAttribute("for", "datatrip")
    lab.innerHTML = "Enter Task list";


    var inputfiller = document.createElement("input")
    inputfiller.setAttribute("name", "datatrip")
    inputfiller.setAttribute("id", "datatrip")
    inputfiller.setAttribute("type", "text")

    var butt = document.createElement("button")
    butt.setAttribute("id", "adde")
    butt.setAttribute("type", "submit")
    butt.innerHTML = "Add"
    butt.setAttribute("onclick", "dop()")

    var butt2 = document.createElement("button")
    butt2.setAttribute("id", "del")
    butt2.setAttribute("type", "submit")
    butt2.innerHTML = "Close"
    butt2.setAttribute("onclick", "drop()")



    openbox.appendChild(lab)
    openbox.appendChild(inputfiller)
    openbox.appendChild(butt)
    openbox.appendChild(butt2)

    document.getElementById("main1").appendChild(openbox)
    var master = document.getElementById("main")

    master.style.filter = "blur(7px)"



}
let val;
function dop() {
    var a = document.getElementById("datatrip")
    val = a.value

    var master = document.getElementById("main")
    master.style.filter = "none"
    var del = document.getElementById("inputbox")
    del.remove()

    begin()


}
function drop() {

    var master = document.getElementById("main")
    master.style.filter = "none"
    var del = document.getElementById("inputbox")

    del.remove()

}
let take;
function againdop() {
    var a = document.getElementById("datatrip")
    take = a.value

    var master = document.getElementById("main")
    master.style.filter = "none"
    var del = document.getElementById("inputbox")

    del.remove()

    bring()





}
function bring() {

    var update = document.createElement("p")
    update.setAttribute("class", "taskdata")
    update.setAttribute("id", val + take + "task")

    var dat = document.createElement("span")
    dat.setAttribute("class", "markdata")
    dat.setAttribute('id', val + take + "markdata")
    dat.innerText = take


    var mar = document.createElement("span")
    mar.setAttribute("class", "mark")
    mar.setAttribute("id", val + take + "mark")
    mar.setAttribute("onclick", "und(this.getAttribute('id'))")
    mar.innerText = "mark"

    var put = document.getElementsByClassName(addres)
    var i = put[0].previousElementSibling
    var use = i.id



    update.appendChild(dat)
    update.appendChild(mar)
    document.getElementById(use).appendChild(update)
}

function und(go) {
    var i = document.getElementById(go)
    var t = i.previousElementSibling
    t.style.textDecorationLine = "line-through";
    i.remove()


}
var addres
function obtaindata(go) {
    var openbox = document.createElement("div")
    openbox.setAttribute("id", "inputbox")

    var lab = document.createElement("label")
    lab.setAttribute("for", "datatrip")
    lab.innerHTML = "Enter Task list";


    var inputfiller = document.createElement("input")
    inputfiller.setAttribute("name", "datatrip")
    inputfiller.setAttribute("id", "datatrip")
    inputfiller.setAttribute("type", "text")

    var butt = document.createElement("button")
    butt.setAttribute("id", "adde")
    butt.setAttribute("type", "submit")
    butt.innerHTML = "Add"
    butt.setAttribute("onclick", "againdop()")


    var butt2 = document.createElement("button")
    butt2.setAttribute("id", "del")
    butt2.setAttribute("type", "submit")
    butt2.innerHTML = "Close"
    butt2.setAttribute("onclick", "drop()")


    addres = go



    openbox.appendChild(lab)
    openbox.appendChild(inputfiller)
    openbox.appendChild(butt)
    openbox.appendChild(butt2)
    document.getElementById("main1").appendChild(openbox)
    var master = document.getElementById("main")

    master.style.filter = "blur(7px)"


}

function delvalue(go) {
    var i = document.getElementsByClassName(go)
    var a = i[0].previousElementSibling
    var b = a.previousElementSibling
    b = b.id

    let use = document.getElementById(b)
    var master = use.childElementCount
    if (master != 0) {
        var select = document.getElementById(b)
        select.removeChild(select.lastChild)
    }
    else {
        var main = document.getElementById(b)
        var mmain = main.parentNode.parentNode
        var parentbox = mmain.id
        mainbox = document.getElementById(parentbox)
        var isemp = mainbox.parentNode
        mainbox.remove()
        var count = isemp.childElementCount
        if (count == 0) {
            var empty = document.createElement("span")
            empty.setAttribute("id", "empty")
            empty.innerText = "task list is empty"
            isemp.appendChild(empty)
        }
    }

}






















































    


























































































































































































































