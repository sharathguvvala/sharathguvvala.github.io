let username = sessionStorage.getItem("username")
document.getElementById("username").innerHTML += username
let questions = [
    {
        index:1,
        question:"Who among the following is the highest wicket taker in all formats of cricket ?",
        answer:"M Muralitharan",
        options:[
            "M Muralitharan",
            "SK Warne",
            "A Kumble",
            "GD McGrath"
        ]
    },
    {
        index:2,
        question:"Harold (“Dickie”) Bird is best known for his career in cricket as:",
        answer:"an umpire",
        options:[
            "a bowler",
            "a batsman",
            "an umpire",
            "pitch curater"
        ]
    },
    {
        index:3,
        question:"What is the name given to the biennial international Test cricket series played between England and Australia ?",
        answer:"the Ashes",
        options:[
            "the Cricket World Cup",
            "the Trans-Tasman Trophy",
            "the Sheffield Shield",
            "the Ashes"
        ]
    },
    {
        index:4,
        question:"In which year were the first laws of cricket believed to have been written ?",
        answer:"1774",
        options:[
            "1798",
            "1774",
            "1806",
            "1860"
        ]
    },
    {
        index:5,
        question:"Who was awarded as Man of the Match(MOM) in 1975 World Cup finale ?",
        answer:"Clive Lloyd",
        options:[
            "Roy Fredericks",
            "Vanburn Holder",
            "Clive Lloyd",
            "Gordon Greenidge"
        ]
    },
    {
        index:6,
        question:"How many teams are participating in the ICC World Cup 2019 ?",
        answer:"10",
        options:[
            "10",
            "8",
            "12",
            "9"
        ]
    },
    {
        index:7,
        question:"Which of the following Indian player have got first “Man of the Tournament” Award in the ICC Cricket World Cup ?",
        answer:"Sachin Tendulkar",
        options:[
            "M.S. Dhoni",
            "Yuvraj Singh",
            "Mohinder Amarnath",
            "Sachin Tendulkar"
        ]
    },
    {
        index:8,
        question:"Which of the following country has hosted the ICC World Cup most times ?",
        answer:"England",
        options:[
            "India",
            "Australia",
            "England",
            "West Indies"
        ]
    },
    {
        index:9,
        question:"Which county plays at home at the St. Lawrence Ground ?",
        answer:"Kent",
        options:[
            "Kent",
            "Glamorgan",
            "Yorkshire",
            "Warwickshire"
        ]
    },
    {
        index:10,
        question:"Which of the following cricketer entitled Dazzle as his autobiography ?",
        answer:"Darren Gough",
        options:[
            "Allen Border",
            "Darren Gough",
            "Steve Waugh",
            "Adam Gilchrist"
        ]
    }
]
let question = document.getElementById("question")
let options = document.getElementById("options")
let nextbtn = document.getElementById("nextbtn");
let prevbtn = document.getElementById("prevbtn");
nextbtn.addEventListener("click",nextquestion);
prevbtn.addEventListener("click",prevquestion);
let question_num = 0;
if(question_num=0){
    prevbtn.style.display = "none";
}
window.onload = showquestion()
function showquestion(){
    if(question_num==0){
        document.getElementById("prevbtn").classList.add("disabled")
    }
    else{
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    if(question_num==9){
        document.getElementById("nextbtn").classList.add("disabled")
    }
    else if(question_num!=9){
        document.getElementById("nextbtn").classList.remove("disabled")
    }
    question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
    selected();
    marking();
}
var useranswers = [0,0,0,0,0,0,0,0,0,0]
//console.log(useranswers)
function nextquestion(){
    document.getElementById("btn1").classList.remove("disabled")
    document.getElementById("btn2").classList.remove("disabled")
    document.getElementById("btn3").classList.remove("disabled")
    document.getElementById("btn4").classList.remove("disabled")
    document.getElementById("btn5").classList.remove("disabled")
    document.getElementById("btn6").classList.remove("disabled")
    document.getElementById("btn7").classList.remove("disabled")
    document.getElementById("btn8").classList.remove("disabled")
    document.getElementById("btn9").classList.remove("disabled")
    document.getElementById("btn10").classList.remove("disabled")
    document.getElementById("prevbtn").classList.remove("disabled")
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++){
        if(option[i].classList.contains("selected")){
            let useranswer = document.querySelector("li.option.selected").innerHTML;
            if(useranswer==questions[question_num].answer){
                useranswers.splice(question_num,1,"c")
            }
            else if(useranswer!==questions[question_num].answer){
                useranswers.splice(question_num,1,"w")
            }
        }
    }
    var tscore = 0 , pscore = 0 , nscore = 0;
    //console.log(useranswers)
    sessionStorage.setItem("useranswers",useranswers)
    for(var j=0 ; j<useranswers.length ; j++){
        if(useranswers[j]=="c"){
            pscore+=2
        }
        else if(useranswers[j]=="w"){
            nscore+=1
        }
    }
    tscore = pscore-nscore
    sessionStorage.setItem("tscore",tscore)
    //console.log(tscore)
    question_num=questions[question_num].index;
    marking()
    notattempted()
    if(question_num==0){
        document.getElementById("prevbtn").classList.add("disabled")
    }
    else{
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    if(question_num==9){
        document.getElementById("nextbtn").classList.add("disabled")
    }
    else if(question_num!=9){
        document.getElementById("nextbtn").classList.remove("disabled")
    }
    question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
    selected();
}
function prevquestion(){
    question_num=(questions[question_num].index)-2;
    if(question_num==0){
        document.getElementById("prevbtn").classList.add("disabled")
    }
    else{
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    if(question_num==9){
        document.getElementById("nextbtn").classList.add("disabled")
    }
    else if(question_num!=9){
        document.getElementById("nextbtn").classList.remove("disabled")
    }
    question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
    selected();
}
function selected() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            //console.log(Option[i])
            if (option[i].classList.contains("selected")) {
                option[i].classList.remove("selected");
            }
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("selected")) {
                option[i].classList.remove("selected");
                }
            }
        option[i].classList.add("selected");
        document.getElementById("prevbtn").classList.add("disabled")
        if(question_num!=9){
            document.getElementById("btn1").classList.add("disabled")
            document.getElementById("btn2").classList.add("disabled")
            document.getElementById("btn3").classList.add("disabled")
            document.getElementById("btn4").classList.add("disabled")
            document.getElementById("btn5").classList.add("disabled")
            document.getElementById("btn6").classList.add("disabled")
            document.getElementById("btn7").classList.add("disabled")
            document.getElementById("btn8").classList.add("disabled")
            document.getElementById("btn9").classList.add("disabled")
            document.getElementById("btn10").classList.add("disabled")
        }
      }
    }
}
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")
let btns = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10]
function marking(){
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++){
        if (option[i].classList.contains("selected")){
            btns[question_num-1].style.backgroundColor="green"
        }   
    }
}
function btn1q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext1 = document.getElementById("btn1").innerHTML
    question_num=btntext1-1
    showquestion()
}
function btn2q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext2 = document.getElementById("btn2").innerHTML
    question_num=btntext2-1
    showquestion()
}
function btn3q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext3 = document.getElementById("btn3").innerHTML
    question_num=btntext3-1
    showquestion()
}
function btn4q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext4 = document.getElementById("btn4").innerHTML
    question_num=btntext4-1
    showquestion()
}
function btn5q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext5 = document.getElementById("btn5").innerHTML
    question_num=btntext5-1
    showquestion()
}
function btn6q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext6 = document.getElementById("btn6").innerHTML
    question_num=btntext6-1
    showquestion()
}
function btn7q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext7 = document.getElementById("btn7").innerHTML
    question_num=btntext7-1
    showquestion()
}
function btn8q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext8 = document.getElementById("btn8").innerHTML
    question_num=btntext8-1
    showquestion()
}
function btn9q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext9 = document.getElementById("btn9").innerHTML
    question_num=btntext9-1
    showquestion()
}
function btn10q(){
    if(question_num!=0){
        document.getElementById("prevbtn").classList.remove("disabled")
    }
    let btntext10 = document.getElementById("btn10").innerHTML
    question_num=btntext10-1
    showquestion()
}
function endquiz(){
    document.getElementById("prevbtn").classList.remove("disabled")
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++){
        if(option[i].classList.contains("selected")){
            let useranswer = document.querySelector("li.option.selected").innerHTML;
            if(useranswer==questions[question_num].answer){
                useranswers.splice(question_num,1,"c")   
            }
            else if(useranswer!==questions[question_num].answer){
                useranswers.splice(question_num,1,"w")   
            }
        }  
    }
    var tscore = 0 , pscore = 0 , nscore = 0;
    sessionStorage.setItem("useranswers",useranswers)
    //console.log(useranswers)
    for(var j=0 ; j<useranswers.length ; j++){
        if(useranswers[j]=="c"){
            pscore+=2
        }
        else if(useranswers[j]=="w"){
            nscore+=1
        }
    }
    tscore = pscore-nscore
    sessionStorage.setItem("tscore",tscore)
    //console.log(tscore)
    if(confirm("Are you sure to end the quiz ?")){
        window.open("end.html","_parent","false");
    }
}
function notattempted(){
    let option = document.querySelectorAll("li.option");
    if(option[0].classList.contains("selected")==false){
        if(option[1].classList.contains("selected")==false){
            if(option[2].classList.contains("selected")==false){
                if(option[3].classList.contains("selected")==false){
                    btns[question_num-1].style.backgroundColor="red"
                }
            }
        }
    }
}
const min = 3;
let totaltime = min*60;
const time = document.getElementById("time");
setInterval(timer,1000);
function timer(){
    const minutes = Math.floor(totaltime/60);
    let seconds = totaltime%60;
    seconds = seconds<10 ? "0"+seconds : seconds;
    time.innerHTML = `${minutes}:${seconds}`;
    totaltime--;
    if(totaltime<60){
        time.style.color="red"
    };
    if(totaltime<0){
        var tscore = 0 , pscore = 0 , nscore = 0;
        sessionStorage.setItem("useranswers",useranswers)
        //console.log(useranswers)
        for(var j=0 ; j<useranswers.length ; j++){
            if(useranswers[j]=="c"){
                pscore+=2
            }
            else if(useranswers[j]=="w"){
                nscore+=1
            }
        }
        tscore = pscore-nscore
        sessionStorage.setItem("tscore",tscore)
        time.innerHTML = "TIME UP!!!"
        setTimeout(function(){ window.open("end.html","_parent",false); }, 500);
    };
};