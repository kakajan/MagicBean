let list = [];
const title = document.getElementById('title');
const dueDate = document.getElementById('dueDate');
const display = document.getElementById('display');
const saveBtn = document.getElementById("saveBtn");
const addBtn = document.getElementById("Add");
let selectedTask;
function initialize () {
    if (localStorage.getItem('list') != null) {
        list = JSON.parse(localStorage.getItem('list'))
        show();
    }
}
initialize();
function addToList () {
    const data = {
        kertop: title.value,
        dueDate: dueDate.value,
    };


    list.push(
        data
    );
    localStorage.setItem('list',JSON.stringify(list))
    show();
    title.value = '';
    dueDate.value = '';
    title.focus()

}
function editTask (index) {
    selectedTask = index
    addBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
    title.value = list[index].kertop
    dueDate.value = list[index].dueDate
}
function show() {
    let text = '';
    list.forEach((item, index) => (text += `<li>${item.kertop} due date: ${item.dueDate} 
    <button onclick="list.splice(${index},1);show(); localStorage.setItem('list', JSON.stringify(list)) " >❌</button><button onclick="editTask(${index})">✏️</button></li>`));
    display.innerHTML=text
}
function update () {
    addBtn.style.display = "inline";
    saveBtn.style.display = "none";
    list[selectedTask].kertop = title.value;
    list[selectedTask].dueDate = dueDate.value;
    localStorage.setItem("list", JSON.stringify(list));
    show();
}