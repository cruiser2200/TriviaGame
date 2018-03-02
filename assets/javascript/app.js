

// questions and answers array

var myQuestions = [
    {
        question: "The country Benin is located on which continent?",
        answers: {
            a: "Asia",
            b: "Africa",
            c: "Europe",
            d: "South America"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of these countries is not adjacent to the Caspian Sea?",
        answers: {
            a: "Tajikistan",
            b: "Azerbaijan",
            c: "Turkmenistan",
            d: "Iran"
        },
        correctAnswer: 'a'
    },
    {
        question: "The city of Lagos is in which Country?",
        answers: {
            a: "Tunisia",
            b: "Greece",
            c: "Cambodia",
            d: "Nigeria"
        },
        correctAnswer: 'd'
    },
    {
        question: "Which city in Austrailia boasts the largest population?",
        answers: {
            a: "Melbourne",
            b: "Perth",
            c: "Sydney",
            d: "Brisbane"
        },
        correctAnswer: 'b'
    },

]



// show/hide functionality for gameSpace (in progress)
(function ($) {
    $.fn.showHide = function (options) {
    
    //default vars for the plugin
    var defaults = {
    speed: 1000,
    easing: '',
    changeText: 0,
    showText: 'Show',
    hideText: 'Hide'

    }
    }
})