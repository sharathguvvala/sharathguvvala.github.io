if(window.screen.width<500) {
    if(username.length<8){
        usertext.style.fontSize = "5vh"
    }
}

function username(){
    username = prompt("Please enter your name","stranger");
    document.getElementById("usertext").innerHTML ="Hello,"+username;
    document.getElementById("btne").remove();
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
        //var a = confirm('Are you sure that the task is completed!!!')
        //if(a==true){
            
            setTimeout(function(){
                //completedtask.remove();
                /*$(document).ready(function(){
                    $("checkbtn").click(function(){
                        $("li").fadeOut(3000);
                    })
                })*/
                Completed.appendChild(completedtask);
                checkbtn.style.display='none';
            },500)
           
       // }
        
    });

    trashbtn.addEventListener('click',function(){
        const deltask = this.parentNode;
        var b = confirm('Are you sure to delete the task!!!')
        if(b==true){
            setTimeout(function(){
                deltask.remove();
            },500)
            
       }   
    });
}




var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
function daytime(){
    var today = new Date()
    var day = days[today.getDay()];
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var mins = today.getMinutes();
    var secs = today.getSeconds();
    mins = doubledigit(mins);
    secs = doubledigit(secs);
    var time = today.getHours()+':'+mins+':'+secs;
    var datetime = day +' '+ date +' '+ time;
    setTimeout(daytime,500);
    document.getElementById("dispdatetime").innerHTML = datetime;
}
daytime()
function doubledigit(i){
    if(i<10){
        i="0"+i;
    return i;
    }
    else{
        return i;
    }
}
/*
$(document).ready(function(){
    $(checkbtn).click(function(){
        $(this.parentNode).fadeOut(3000);
    })
})*/

