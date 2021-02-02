if(window.screen.width<500) {
    if(username.length<8){
        usertext.style.fontSize = "5vh"
    }
}

function username(){
    username = prompt("Please enter your name","user");
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

function addTask(){
    const notcompleted = document.querySelector('.notcompleted');
    const Completed = document.querySelector('.completed');
   
    const newLi = document.createElement('li');
    const checkbtn = document.createElement('button');
    const trashbtn = document.createElement('button');
    const redobtn = document.createElement('button');
    

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
    redobtn.innerHTML  =  '<i class="fas fa-redo-alt"></i>';


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
                completedtask.remove();
                /*$(document).ready(function(){
                    $("checkbtn").click(function(){
                        $("li").fadeOut(3000);
                    })
                })*/
            Completed.appendChild(completedtask);
                
        },200)
        checkbtn.style.display='none';
        newLi.appendChild(redobtn);                 
        
    });
    redobtn.addEventListener('click',function(){
        const redotask = this.parentNode;
        checkbtn.style.display='block'
        notcompleted.appendChild(redotask);
       // redobtn.style.display = 'none';
        
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
/*
function notcompletedtask(){
    var notcompleted = document.querySelector('.notcompleted');
    notcompletedli = document.createElement('li');
    const checkbtn = document.createElement('button');
    const trashbtn = document.createElement('button'); 
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
    if(input.value==''){
        alert('Please enter a valid task');
    }
    else{
        notcompletedli.textContent = input.value;
        text = notcompletedli.textContent
        //console.log(text)
        text = input.value
        input.value = '';
        notcompleted.appendChild(notcompletedli);
        notcompletedli.appendChild(trashbtn);
        notcompletedli.appendChild(checkbtn);
        

        checkbtn.addEventListener("click",completedtask)
        checkbtn.addEventListener("click",function(){
            notcompletedli.remove();
        })
        

        trashbtn.addEventListener("click",function(){
            const deltask = this.parentNode;
                var b = confirm('Are you sure to delete the task!!!')
                if(b==true){
                    setTimeout(function(){
                        deltask.remove();
                    },500)    
               }
        })
    }
}
function completedtask(){
    var completed = document.querySelector('.completed');
    completedli = document.createElement('li');
    const redobtn = document.createElement('button');
    const trashbtn = document.createElement('button'); 
    redobtn.innerHTML = '<i class="fas fa-redo-alt"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
    completedli.textContent = this.parentNode.textContent
    //input.value=''
    completed.appendChild(completedli);
    completedli.appendChild(trashbtn);
    completedli.appendChild(redobtn);

    redobtn.addEventListener("click",redotask)
    redobtn.addEventListener("click",function(){
        completedli.remove()
    })

    trashbtn.addEventListener("click",function(){
        const deltask = this.parentNode;
            var b = confirm('Are you sure to delete the task!!!')
            if(b==true){
                setTimeout(function(){
                    deltask.remove();
                },500)    
           }
    })
}
function redotask(){
    var notcompleted = document.querySelector('.notcompleted');
    notcompletedli = document.createElement('li');
    const checkbtn = document.createElement('button');
    const trashbtn = document.createElement('button'); 
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
    notcompletedli.textContent = this.parentNode.textContent
    //console.log(notcompletedli)
    notcompleted.appendChild(notcompletedli);
    notcompletedli.appendChild(trashbtn);
    notcompletedli.appendChild(checkbtn);
    checkbtn.addEventListener("click",completedtask)
    checkbtn.addEventListener("click",function(input=notcompletedli.textContent){
        notcompletedli.remove()
    })
    trashbtn.addEventListener("click",function(){
        const deltask = this.parentNode;
            var b = confirm('Are you sure to delete the task!!!')
            if(b==true){
                setTimeout(function(){
                    deltask.remove();
                },500)    
           }
    })
}*//*
function completeredotask(){
    var notcompleted = document.querySelector('.notcompleted');
    const notcompletedli = document.createElement('li');
    const checkbtn = document.createElement('button');
    const trashbtn = document.createElement('button'); 
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
    completedli.textContent = this.parentNode.textContent
    notcompleted.appendChild(notcompletedli);
    notcompletedli.appendChild(trashbtn);
    notcompletedli.appendChild(checkbtn);
    checkbtn.addEventListener("click",completedtask)
    checkbtn.addEventListener("click",function(){
        notcompletedli.remove()
    })
    trashbtn.addEventListener("click",function(){
        const deltask = this.parentNode;
            var b = confirm('Are you sure to delete the task!!!')
            if(b==true){
                setTimeout(function(){
                    deltask.remove();
                },500)    
           }
    })    
}*/


/*
checkbtn.addEventListener("click", function(){
    const completedtask = this.parentNode;
    completed.appendChild(completedtask);
})
trashbtn.addEventListener("click",function(){
    const deltask = this.parentNode;
        var b = confirm('Are you sure to delete the task!!!')
        if(b==true){
            setTimeout(function(){
                deltask.remove();
            },500)    
       }
})
redobtn.addEventListener("click",function(){
    const redotask = this.parentNode;
    notcompleted.appendChild(redotask)
})*/