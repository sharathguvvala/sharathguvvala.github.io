/*const min = 0.1;
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
        time.innerHTML = "TIME UP!!!"
    };
};*/
let questions = [
    {
        question:"how old are you?",
        answer:"18",
        options:[
            "43",
            "67",
            "23",
            "15"
        ]
    },
    {
        question:"what is your name?",
        answer:"sharath",
        options:[
            "virat",
            "dhoni",
            "sharath",
            "rohith"
        ]
    },
    {
        question:"where do you live?",
        answer:"england",
        options:[
            "india",
            "australia",
            "england",
            "new zealand"
        ]
    }
]
let question = document.getElementById("question")
let options = document.getElementById("options")
let nextbtn = document.getElementById("nextbtn");
let prevbtn = document.getElementById("prevbtn");
let score = 0;
nextbtn.addEventListener("click",nextquestion);
prevbtn.addEventListener("click",prevquestion);
let question_num = 0;
if(question_num=0){
    prevbtn.style.display = "none";
}
console.log(questions[question_num].question)
window.onload = showquestion()
function showquestion(){
    question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
}
//function firstquestion(){
    //question.innerHTML = `1) ${questions[0].question}`
    //options.innerHTML = `<ul id="options"><li class="option">${questions[0].options[0]}</li><li class="option">${questions[0].options[1]}</li><li class="option">${questions[0].options[2]}</li><li class="option">${questions[0].options[3]}</li></ul>`
//}
function nextquestion(){
    question_num++;
    console.log(questions[question_num].question)
    showquestion()
    //question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    //console.log(questions[question_num].options[0])
    //options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
}
function prevquestion(){
    question_num--;
    console.log(questions[question_num].question)
    showquestion()
    //question.innerHTML = `${question_num+1}) ${questions[question_num].question}`
    //console.log(questions[question_num].options[0])
    //options.innerHTML = `<ul id="options"><li class="option">${questions[question_num].options[0]}</li><li class="option">${questions[question_num].options[1]}</li><li class="option">${questions[question_num].options[2]}</li><li class="option">${questions[question_num].options[3]}</li></ul>`
}
let option = document.querySelectorAll("li.option");
console.log(option)
for(var i=0 ; i<option.length ; i++){
    console.log(option[i])
    option[i].addEventListener("click",function(){
        console.log(option[i])
    })
}
