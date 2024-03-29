 // questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
    new Question("Javascript is ____ language", ["Programming", "Application", "None of these", "Scripting"], "Scripting"),
    new Question("JavaScript is ______ Side Scripting Language.", ["Server", "ISP", "Browser", "None of these"], "Browser")
];

var quiz = new Quiz(questions);

populate();

function populate(){
    if(quiz.isEnded()){
        showScores()
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i < choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);
        }
        showProgress();
    }
}

function showProgress(){
    var curQuesNo = quiz.questionIndex + 1;
    var element = document.getElementById("progress")
    element.innerHTML = "Question " + curQuesNo + " of " + quiz.questions.length ;
}

function guess(id, choice){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(choice);
        populate();
    }
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>" ;
        gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>" ;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}


