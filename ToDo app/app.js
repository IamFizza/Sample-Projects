var list = document.getElementById("list")


function addTodo(){
    var todo_item = document.getElementById("ToDo-item");
    // create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    //create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class", "delBtn");
    delBtn.setAttribute("onclick","deleteItem(this)") // by this we get or pick comp button in below fun
    // delBtn.setAttribute("onclick","deleteItem('FIZA')") //ab o/p me on del click fiza console me aye ga
    delBtn.appendChild(delText);
    // create edit button
    var eidtBtn = document.createElement("button") ;
    var eidtText = document.createTextNode("Edit");
    eidtBtn.appendChild(eidtText);
    eidtBtn.setAttribute("class", "editBtn");
    eidtBtn.setAttribute("onclick", "editItem(this)");
   
    // ab li k ander hi usk sath hi del btn rkhna
    li.appendChild(delBtn);
    li.appendChild(eidtBtn);
    list.appendChild(li);
    todo_item.value = "";
   
//    console.log(li);
}

function deleteItem(parameter){
    // console.log("hello"); //it is working
    // console.log(parameter);
    //ab hm ne ick parentnode ko target krna ha..delBtn ka parent li ha iclye ictrha li ko get kia
    console.log(parameter.parentNode);
    //ab hm ne mainly us li ko del krna ha in delitem fun:
    parameter.parentNode.remove();
}

function delAll(){
    var delAllBtn= document.getElementById("delAllBtn");
    list.innerHTML = "";
}

function editItem(e){
    var defVal =   e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit Task:", defVal);
    e.parentNode.firstChild.nodeValue = editValue;
    console.log(e.parentNode.firstChild); 

}