


var myQuestions = [
    {
        question: "The country Benin is located on which continent?",
        choices: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: 1
    },
    {
        question: "Which of these countries is not adjacent to the Caspian Sea?",
        choices: ["Tajikistan", "Azerbaijan", "Turkmenistan", "Iran"],
        correctAnswer: 0
    },
    {
        question: "The city of Lagos is in which Country?",
        choices: ["Tunisia", "Greece", "Cambodia", "Nigeria"],
        correctAnswer: 3
    },
    {
        question: "Which city in Austrailia boasts the largest population?",
        choices: ["Melbourne", "Perth", "Sydney", "Brisbane"],
        correctAnswer: 2
    },

]
// create variable for current question
var currentQuestion = myQuestions[0];
// create variable for correct answer to current question
var currentAnswer = myQuestions[0].choices[myQuestions[0].correctAnswer];

// create variable for correct answers
var correctAnswers = 0;
// create variable for incorrect answers
var incorrectAnswers = 0;
// create variable for end of quiz
var quizOver = false;



// begin functions

$(document).ready(function() {
    // questions and answers array
    
    $(function () {
    
        $("#playSpace").hide();
        $("#timesUpSpace").hide();
        $("#incorrectSpace").hide();
        $("#correctSpace").hide();
        $("#gameOverSpace").hide();
    
    });

// var currentQuestion = (myQuestions[i].question);
// var currentAnswerA = (myQuestions[].answers.a);
// var currentAnswerB = (myQuestions[].answers.b);
// var currentAnswerC = (myQuestions[].answers.c);
// var currentAnswerD = (myQuestions[].answers.d);
// var currentCorrectAnswer = (myQuestions[].correctAnswer);

// testing

console.log(myQuestions[1].question);
console.log(myQuestions[1].choices[3]);

// create function to start game
    // event listener for startGameButton
    $("#startGameButton1").on("click", function() {
        // console.log("clicked");
        $("#startGameSpace").hide();
        $("#playSpace").show();
            $("#question").text(myQuestions[0].question);
            $("#answerA").text(myQuestions[0].choices[0]);
            $("#answerB").text(myQuestions[0].choices[1]);
            $("#answerC").text(myQuestions[0].choices[2]);
            $("#answerD").text(myQuestions[0].choices[3]);

// code for timer
            var count=30;

            var counter=setInterval(timer, 1000);

// code for showing the number of seconds here
            function timer() {
                count=count-1;
                if (count <= 0) {
                    clearInterval(counter);
                    //counter ended, do something here (function timesUp)
                    // console.log("times up");
                    // $("#playSpace").hide();
                    // $("#timesUpSpace").show();
                    // function timesUp() {
                        $("#playSpace").hide();
                        $("#timesUpSpace").show();
                            document.getElementById("correctAnswer1").innerHTML=currentAnswer;
                            console.log(currentAnswer);
                    // }

                return;
                }
                document.getElementById("timer").innerHTML=count + " seconds remaining";
                }

// code for submit button here:
                $("#submitButton").on("click", function() {
                    console.log("you clicked submit");
    // create variable for user's choice
                    var userChoice = $('input:radio[name=answerChoice]:checked').val();
    // if statement goes here:
                    if(userChoice = currentAnswer) {
                        $("#playSpace").hide();
                        $("#correctSpace").show();
                        document.getElementById("correctAnswerCorrect").innerHTML=currentAnswer;
                        clearInterval(counter);
                    }
                    else if(userChoice != currentAnswer) {
                        $("#playSpace").hide();
                        $("#incorrectSpace").show();
                        document.getElementById("correctAnswerIncorrect").innerHTML=currentAnswer;
                        clearInterval(counter);
                    }

                });
                
// end game function brackets            
    })




// show/hide functionality for gameSpace (in progress)
// (function ($) {
//     $.fn.showHide = function (options) {
    
//     //default vars for the plugin
//     var defaults = {
//     speed: 1000,
//     easing: '',
//     changeText: 0,
//     showText: 'Show',
//     hideText: 'Hide'

//     }
//     }
// })
})