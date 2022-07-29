let taskList = document.querySelector('.tasks');
let addBtn = document.querySelector('.addButton');
let taskChecker = document.querySelector('.taskChecker');
let taskCounter = document.querySelector('.taskCounter');
let taskTotalNum = document.querySelector('.taskTotalNum');
let successNum = 0;

function taskTotalUpdate(finishedTaskNum){
    taskTotalNum.textContent(taskList.children.length);
    taskCounter.textContent = '✅ '+ finishedTaskNum + '/'
}
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
taskList.addEventListener('click', event => {
    if (event.target.type == 'checkbox'){
        if(event.target.checked == true){
            successNum += 1;
        }
        else{
            successNum -= 1
        }
        taskTotalNum = taskList.children.length;
        taskCounter.textContent = '✅ '+ successNum.toString() + '/' + 
    }
})