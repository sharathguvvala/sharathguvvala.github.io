//sessionStorage.setItem("username",username.value)
let start = document.getElementById("start");
start.addEventListener("click",startquiz);
function startquiz(){
    let username = document.getElementById("name");
    if(username.value==''){
        alert("Please enetr your name");
    }
    else{
        let username = document.getElementById("name");
        sessionStorage.setItem("username", username.value);
        window.open("quiz.html","_parent","false");
    }
}