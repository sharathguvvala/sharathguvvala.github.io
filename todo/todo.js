
function username(){
    username = prompt("Please enter your name","stranger");
    document.getElementById("usertext").innerHTML ="Hello,"+username;
}
const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');
btn.addEventListener('click', addTask);


input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("Btn").click();
    }
  });

function addTask(task){
    const notcompleted = document.querySelector('.notcompleted');
    const Completed = document.querySelector('.completed');
     

    const newLi = document.createElement('li');
    const checkbtn = document.createElement('button');
    const trashbtn = document.createElement('button');
    

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value==''){
        alert('Please enter a valid task');
    }
    else {
    //if(input.value!==''){
        newLi.textContent = input.value;
        input.value = '';
        notcompleted.appendChild(newLi);
        newLi.appendChild(trashbtn);
        newLi.appendChild(checkbtn);      

    }

    checkbtn.addEventListener('click',function(){
        const completedtask = this.parentNode;
        var a = confirm('Are you sure that the task is completed!!!')
        if(a==true){
            completedtask.remove();
            Completed.appendChild(completedtask);
            checkbtn.style.display='none';
        }
        
    });

    trashbtn.addEventListener('click',function(){
        const deltask = this.parentNode;
        var b = confirm('Are you sure to delete the task!!!')
        if(b==true){
            deltask.remove();
        }   
    });
}

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var today = new Date()
var date = days[today.getDay()]+' '+ today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
var datetime = date+' '+time
document.getElementById("dispdatetime").innerHTML = datetime;