let taskList = document.querySelector('.tasks');
let addBtn = document.querySelector('addButton');

addBtn.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.setAttribute('class','task');

    let inputTextBox = document.createElement('input');
    inputTextBox.setAttribute('class','inputTask');
    inputTextBox.setAttribute('type','textarea');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    checkBox.setAttribute('class','texkChecker');

    li.append(inputTextBox);
    li.append(checkBox);

    taskList.append(li);
})