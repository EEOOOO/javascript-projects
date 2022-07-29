let taskList = document.querySelector('.tasks');
let addBtn = document.querySelector('.addButton');
let taskChecker = document.querySelector('.taskChecker');
let taskCounter = document.querySelector('.taskCounter');
let taskTotalNum = document.querySelector('.taskTotalNum');
let completeNum = 0;
let deleteBtn = document.querySelector('.deleteButton');


taskTotalUpdate('0');

function taskTotalUpdate(finishedTaskNum){
    taskCounter.textContent = '✅ '+ finishedTaskNum + '/';
    taskTotalNum.textContent = taskList.children.length;
    taskCounter.append(taskTotalNum);
}
deleteBtn.addEventListener('click',event=>{
    console.dir(event.target);
    console.dir(deleteBtn);
    taskList.removeChild(deleteBtn.parentElement);
})
addBtn.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.setAttribute('class','task');

    let inputTextBox = document.createElement('input');
    inputTextBox.setAttribute('class','inputTask');
    inputTextBox.setAttribute('type','textarea');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    checkBox.setAttribute('class','texkChecker');

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','deleteButton');
    deleteButton.textContent = '❌';

    li.append(inputTextBox);
    li.append(checkBox);
    li.append(deleteButton);

    taskList.append(li);
    taskTotalUpdate(completeNum);
})
taskList.addEventListener('click', event => {
    if (event.target.type == 'checkbox'){
        if(event.target.checked == true){
            completeNum += 1;
        }
        else{
            completeNum -= 1
        }
        taskTotalUpdate(completeNum.toString());
    }
})