const quiz_container = document.getElementById('quiz-container');
const score = document.getElementById('score');
const quizQuestion = [
    {
        question: "Which company developed javascript?",
        options: ["Microsoft", "Netscape", "Apple", "Google"],
        answer:"Netscape"
    },
    {
        question: "Which symbol is used for comments in javascript?",
        options: ["//", "/", "#", "&lt!-- --&gt"],
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
function handleDisplayQuiz(){
    let print = ''

    quizQuestion.map((v,i) => {
        print += `<span>${i + 1}. ${v.question}</span><br>`
        v.options.map((option, opIndex) => {
            print += `<input type="radio" id = "${option}-${opIndex + 1}" name="question-${i + 1}", value="${option}"> <label class ="option" for = "${option}-${opIndex + 1}"> ${option}</label> <br>`
        }) 
        print+='<br>'
    })
    
    quiz_container.innerHTML = print
}

handleDisplayQuiz()

let scoreCount = 0;

function handleSubmitQuiz() {
    quizQuestion.forEach((v) => {
        let selectedOptionValue;
        v.options.forEach((option, opIndex) => {
            let radio_id; 
            if(option === "&lt!-- --&gt"){
                radio_id = document.getElementById("<!-- -->-4");
            } else {
                radio_id = document.getElementById(`${option}-${opIndex + 1}`)
            }
            if(radio_id.checked){
                selectedOptionValue = radio_id.value;
            }
        })
        if(selectedOptionValue === v.answer){
            scoreCount++
        }
    })
    score.innerHTML = `Your score ${scoreCount} out of ${quizQuestion.length}`
}