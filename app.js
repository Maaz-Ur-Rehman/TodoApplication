// var list = document.getElementById("list")

// function addTodo() {
//     var todoitem = document.getElementById("todo");

//     var li = document.createElement('li');
//     var litext = document.createTextNode(todoitem.value)
//     li.appendChild(litext)


//     var deltbtn = document.createElement("button")
//     var delText = document.createTextNode("DELET");
//     deltbtn.setAttribute("class", "btn");
//     deltbtn.setAttribute("onclick", "deletItem(this)")
//     deltbtn.appendChild(delText)


//     var editbtn = document.createElement("button");
//     var editText = document.createTextNode("EDIT")
//     editbtn.appendChild(editText)
//     editbtn.setAttribute("class", "btn");
//     editbtn.setAttribute("onclick", "editItem(this)")
    


//     li.appendChild(deltbtn);
//     li.appendChild(editbtn);


//     list.appendChild(li);

//     todoitem.value = ""

// }

// function deletItem(e) {
//     e.parentNode.remove()
// }

// function deletAll() {
//     list.innerHTML = " ";
// }

// function editItem(a){
//     var val = prompt("Enter a update value", a.parentNode.firstChild.nodeValue);
//     a.parentNode.firstChild.nodeValue = val;

// }



var listItem=document.getElementById("list")

function addTodo(){
    var item=document.getElementById("todo")

    var li=document.createElement("li")
    var text=document.createTextNode(item.value)
    li.appendChild(text)

    var delBtn=document.createElement('button')
    var delBtnText=document.createTextNode("Delete")
    delBtn.appendChild(delBtnText)
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','delItem(this)')
    

    var edtBtn=document.createElement('button')
    var edtBtnText=document.createTextNode('Edit')
    edtBtn.appendChild(edtBtnText)
    edtBtn.setAttribute('class','btn')
    edtBtn.setAttribute('onclick','edtItem(this)')

    li.appendChild(edtBtn)
    li.appendChild(delBtn)


    listItem.appendChild(li)

    item.value=" "

    console.log(list)
}

function delItem(e){
    e.parentNode.remove()
    // console.log(e)

}

function edtItem(e){
    var newItem=prompt("Enter Update",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=newItem
}
function deletAll(){
    listItem.innerHTML=" "
}














































