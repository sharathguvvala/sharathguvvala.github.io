let username = sessionStorage.getItem("username")
let tscore = sessionStorage.getItem("tscore")
//console.log(username)
document.getElementById("username").innerHTML += username
document.getElementById("tscore").innerHTML = `You have scored  <strong><b>${tscore}</b></strong> marks!!!`  