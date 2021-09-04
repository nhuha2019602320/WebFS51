var Print = document.getElementById('btn');
Print.addEventListener('click', () => {
    var inp_value = document.getElementById('inp_value').value;
    if (inp_value === "") {
        alert('No value entered')
    } else {
        addValue(inp_value);
        document.getElementById('inp_value').value = "";
    }
})

addValue = (itemList) => {
    var listItem = document.getElementById('listItem');
    var newItem = document.createElement('li')
    newItem.innerText = itemList;

    var buttons = document.createElement("span");
    buttons.classList.add("buttons");

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.addEventListener('click', removeItem)
    buttons.appendChild(remove);
    newItem.appendChild(buttons);
    listItem.insertBefore(newItem, listItem.childNodes[10]);
}

function removeItem(){
	var item = this.parentNode.parentNode; 
	var parent = item.parentNode; 
	parent.removeChild(item);
}
function clearAll() {
    var check = prompt('do you clean all ?', "Y/N")
    if(check == "Y") {
        document.getElementById('listItem').style.display = "none"
    } else {
        document.getElementById('listItem').style.display = "block"
    }
}