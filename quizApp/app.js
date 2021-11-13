function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Question prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

//Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;

}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
    let question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

let q1 = new Question("En iyi programlama dili", ["C#", "javascript", "python", "asp.net"], "javascript");
let q2 = new Question("En popüler programlama dili", ["visualbasic", "javascript", "nodejs", "asp.net"], "javascript");
let q3 = new Question("En modern programlama dili", ["C#", "javascript", "python", "asp.net"], "javascript");

let questions = [q1, q2, q3];
//Start Quiz
let quiz = new Quiz(questions);
loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    } else {
        let question = quiz.getQuestion();
        let choices = question.choices;
        document.querySelector("#question").textContent = question.text;
        for (let i = 0; i < choices.length; i++) {
            let element = document.querySelector("#choice" + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    let btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex + 1;
    document.querySelector("#progress").innerHTML = "Question " + questionNumber + " of " + totalQuestion;
}