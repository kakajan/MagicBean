let list = [];
const title = document.getElementById('title');
const dueDate = document.getElementById('dueDate');
const display = document.getElementById('display');
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
function show() {
    let text = '';
    list.forEach((item, index) => (text += `<li>${item.kertop} due date: ${item.dueDate} 
    <button onclick="list.splice(${index},1);show(); localStorage.setItem('list', JSON.stringify(list)) " >❌</button><button>✏️</button></li>`));
    display.innerHTML=text
}