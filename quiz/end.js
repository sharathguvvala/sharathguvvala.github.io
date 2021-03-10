let username = sessionStorage.getItem("username")
let tscore = sessionStorage.getItem("tscore")
let useranswers = sessionStorage.getItem("useranswers")
//console.log(useranswers)
let aq=0,uq=0,cq=0,wq=0;
if(useranswers==undefined){
    tscore=0
    aq=0
    uq=0
    cq=0
    wq=0
}
else{
    for(var k=0 ; k<useranswers.length ; k++){
        //console.log(useranswers[k])
        if(useranswers[k]=="c"){
            cq+=1
        }
        else if(useranswers[k]=="w"){
            wq+=1
        }
    }
}
aq=cq+wq
uq=10-aq
//console.log(aq,10-aq,cq,wq)
//console.log(username)
document.getElementById("username").innerHTML += username
document.getElementById("tscore").innerHTML = `You have scored  <strong><b>${tscore}</b></strong> marks!!!`  
document.getElementById("aq").innerHTML+=`${aq}`
document.getElementById("uq").innerHTML+=`${uq}`
document.getElementById("cq").innerHTML+=`${cq}`
document.getElementById("wq").innerHTML+=`${wq}`