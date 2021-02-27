const hexcode = "#" + Math.ceil(Math.random()*16777214).toString(16)
//const r = Math.ceil(Math.random()*256)
//const g = Math.ceil(Math.random()*256)
//const b = Math.ceil(Math.random()*256)
//console.log(r,g,b)
document.getElementById("hexcode").innerHTML += hexcode
//console.log(hexcode)
/*
color1 = "#" + Math.ceil(Math.random()*16777215).toString(16);
color2 = "#" + Math.ceil(Math.random()*16777215).toString(16);
color3 = "#" + Math.ceil(Math.random()*16777215).toString(16);
if(color1!=color2 && color2!=color3 &&color3!=color1){
    document.getElementById("color1").style.backgroundColor = hexcode
    document.getElementById("color2").style.backgroundColor = color2
    document.getElementById("color3").style.backgroundColor = color3
}
function success(){
    document.getElementById("message").innerHTML = "You have guessed it correct!!!" 
}
function failed(){
    document.getElementById("message").innerHTML = "It's wrong, please try again"
}
*/
const color2 = "#" + Math.ceil(Math.random()*16777214).toString(16)
const color3 = "#" + Math.ceil(Math.random()*16777214).toString(16)
const color4 = "#" + Math.ceil(Math.random()*16777214).toString(16)
if(hexcode!=color2 && color2!=color3 && color3!=color4 && color4!=hexcode){
    var arr = [hexcode,color2,color3,color4]
    index = Math.floor(Math.random()*4)
    btn1 = document.getElementById("1")
    btn2 = document.getElementById("2")
    btn3 = document.getElementById("3")
    btn4 = document.getElementById("4")
    buttons = [btn1,btn2,btn3,btn4]
    //buttons = document.querySelectorAll("button")
    //console.log(buttons)
    btn = Math.floor(Math.random()*4)
    //console.log(buttons)
    //divs = document.querySelectorAll("buttons")
    //console.log(divs)
    buttons[btn].style.backgroundColor = arr[0]
    answerbtn = buttons[btn]
    //function answerbtn(){
    //    return answerbtn
    //}
    //answerindex=buttons.findIndex(answerbtn)
    answerindex=buttons.indexOf(answerbtn)
    //console.log(answerindex)
    otherbuttons=buttons.splice(answerindex,1)
    //console.log(otherbuttons)
    //console.log(buttons)
    //answerindex = buttons.indexOf(answerbtn)
    //console.log(answerindex)
    answerbtn.addEventListener("click",()=>{
        document.getElementById("message").innerHTML = "You have guessed it correct!!!" 
    })
    othercolors = arr.splice(0,1)
    //console.log(othercolors)
    //console.log(arr)
    //for(var i = 0 ; i<buttons.Length ; i++ ){
    //    buttons[i].style.backgroundColor=arr[1]
    //}
    buttons[0].style.backgroundColor=arr[0]
    buttons[1].style.backgroundColor=arr[1]
    buttons[2].style.backgroundColor=arr[2]
    buttons[0].addEventListener("click",()=>{
        document.getElementById("message").innerHTML = "It's wrong, please try again"
    })
    buttons[1].addEventListener("click",()=>{
        document.getElementById("message").innerHTML = "It's wrong, please try again"
    })
    buttons[2].addEventListener("click",()=>{
        document.getElementById("message").innerHTML = "It's wrong, please try again"
    })
    //buttons[btn].style.backgroundColor=arr[1]
    //buttons[btn].style.backgroundColor=arr[2]

    
    //for(var i = 0 ; i<buttons.length ; i++){
    //   if(!answerbtn){
    //       buttons[btn].style.backgroundColor = color2
    //    }
    //}
    //console.log(answerbtn)
    
    //console.log(buttons[btn])
}

