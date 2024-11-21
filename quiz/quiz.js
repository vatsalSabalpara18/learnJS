const displayTimer = document.getElementById("timer");
const question_container = document.getElementById("question-container");
const question_option = document.getElementById("option-container");
const question_number = document.getElementById("question-number");
const question = document.getElementById("question");
const submit_question = document.getElementById("submit-question");
const score = document.getElementById("score");
let index = 0;
let scoreCount = 0;
const quizQuestion = [
    {
        question: "Which company developed javascript?",
        options: ["Microsoft", "Netscape", "Apple", "Google"],
        answer: "Netscape"
    },
    {
        question: "Which symbol is used for comments in javascript?",
        options: ["//", "/", "#", "<!-- -->"],
        answer: "//"
    },
    {
        question: "What does 'Nan' stand for in javascript?",
        options: ["Not a Name", "Not a Number", "No Answer Needed", "None of the above"],
        answer: "Not a Number"
    },
    {
        question: "Which keyword is used to declare a constant variable in javascript?",
        options: ["var", "Jet", "const", "constant"],
        answer: "const"
    }
];

function timer(timer) {
    let timerLeft = timer

    let timerId = setInterval(() => {
        if (quizQuestion.length === index) {
            submit_question.innerHTML = "Submit Quiz"
        }
        if (timerLeft === -1) {
            clearInterval(timerId);
            if (index < quizQuestion.length - 1) {
                index++
                displayQuestion();
            } else {
                question_container.innerHTML = "<h1>Quiz is Over<h1>"
                score.innerHTML = `Your score ${scoreCount} out of ${quizQuestion.length}`
            }

        } else {
            displayTimer.innerHTML = `00:${timerLeft}`
            timerLeft--
        }
    }, 1000)
}


function displayQuestion() {
    
    question_number.innerHTML = index + 1
    question.innerHTML = quizQuestion[index]?.question
    question_option.innerHTML = quizQuestion[index]?.options.map((v, i) => {
        let option = v;
        option = option.replaceAll("<", "&lt")
        option = option.replaceAll(">", "&gt")
        return `
        <input type="radio" name="${v}-${i + 1}" id="${v}-${i + 1}" value= "${v}" > ${option} <br>
        `
    }).join(" ")
    timer(59);
}
displayQuestion()



function handleClick() {
    quizQuestion[index]?.options?.forEach((option, Index) => {
        const radio_ele = document.getElementById(`${option}-${Index + 1}`)
        if (radio_ele?.checked) {
            console.log(quizQuestion[index]?.answer) 
            console.log(radio_ele.value)
            if(quizQuestion[index]?.answer === radio_ele.value){
                scoreCount++
            }
        }
    })
    index++
    if(quizQuestion.length !== index){
        displayQuestion()
    }
    if (submit_question.innerHTML === "Submit Quiz") {
        question_container.innerHTML = "<h1>Quiz is Over<h1>"
        score.innerHTML = `Your score ${scoreCount} out of ${quizQuestion.length}`
    }
}
