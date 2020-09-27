
let btnBegin = document.getElementById('btn-begin');
let questionElement = document.getElementById('question-text');
let options = Array.from(document.getElementsByClassName('question-option'));
let banner = document.getElementById("banner");

let currentQuestion = -1;
let score = 0;

let questions = [
    {
        question: "What color is the sky?",
        correctAnswer: 0,
        options: ["blue", "gray", "red", "orange", "all of the above"]
    },
    {
        question: "Which way is up?",
        correctAnswer: 0,
        options: ["towards the sky", "towards the ground", "eas", "west", "none of the above"]
    },
    {
        question: "Which way is down?",
        correctAnswer: 1,
        options: ["towards the sky", "towards the ground", "eas", "west", "none of the above"]
    }
];

function hideQuestionDiv(){
    let div = document.getElementById("question-div");

    div.style.display = "none";
}

function showNextQuestion(optionIdx){

    updateScore(optionIdx);
    currentQuestion++;
    if(currentQuestion < questions.length){


        questionElement.innerHTML = questions[currentQuestion].question;
        options.forEach( (option, idx) => {
            option.innerHTML = questions[currentQuestion].options[idx];
        });
    }
    else{
        hideQuestionDiv();
        banner.innerHTML = "Game over you score you scored " + score + "/" + questions.length;
    }
}

function updateScore(optionsIdx){
    if(currentQuestion >= 0 && currentQuestion < questions.length){
        if(questions[currentQuestion].correctAnswer == optionsIdx){
            score++;
        }
    }
}

function handleBeginClick(e){
    let div = document.getElementById("question-div");

    div.style.display = "block";
    showNextQuestion();
}

function bindOptionsClick(){

    console.log(options);
    options.forEach( (option, idx) =>{
        let optionIdx = idx;
        option.onclick = (e) => showNextQuestion(optionIdx);
    })
}

hideQuestionDiv();

btnBegin.onclick = handleBeginClick;
bindOptionsClick();