const quizQuestions = [

    
    {
            "id": 1,
            "question": "HTML stands for?",
            "options": {
                "a": "Hyper Text Markup Language",
                "b": "Hyper Text Programming Language",
                "c": "Hyper Text Styling Language",
                "d": "Hyper Text Scripting Language"
            },
            "answer": "Hyper Text Markup Language"
        },
        {
            "id": 2,
            "question": "Which language is used for web development?",
            "options": {
                "a": "Python",
                "b": "JavaScript",
                "c": "C++",
                "d": "Java"
            },
            "answer": "JavaScript"
        },
        {
            "id": 3,
            "question": "CSS stands for?",
            "options": {
                "a": "Cascading Style Sheets",
                "b": "Cascading Script Sheets",
                "c": "Custom Styling System",
                "d": "Computer Style Sheets"
            },
            "answer": "Cascading Style Sheets"
        },
        {
            "id": 4,
            "question": "Which HTML tag is used to create a hyperlink?",
            "options": {
                "a": "a",
                "b": "link",
                "c": "href",
                "d": "url"
            },
            "answer": "a"
        },
        {
            "id": 5,
            "question": "What does SQL stand for?",
            "options": {
                "a": "Structured Query Language",
                "b": "Simple Query Language",
                "c": "Standard Query Logic",
                "d": "Sequential Query Language"
            },
            "answer": "Structured Query Language"
        },
        {
            "id": 6,
            "question": "Which tag is used to define a table in HTML?",
            "options": {
                "a": "table",
                "b": "tab",
                "c": "td",
                "d": "tr"
            },
            "answer": "table"
        },
        {
            "id": 7,
            "question": "What does PHP stand for?",
            "options": {
                "a": "Hypertext Preprocessor",
                "b": "Pre Hypertext Processor",
                "c": "Personal Hypertext Processor",
                "d": "Programming Hypertext Processor"
            },
            "answer": "Hypertext Preprocessor"
        },
        {
            "id": 8,
            "question": "Which attribute is used to provide a unique identifier in HTML?",
            "options": {
                "a": "class",
                "b": "id",
                "c": "name",
                "d": "key"
            },
            "answer": "id"
        },
        {
            "id": 9,
            "question": "Which property is used to change the background color in CSS?",
            "options": {
                "a": "color",
                "b": "background-color",
                "c": "bgcolor",
                "d": "background"
            },
            "answer": "background-color"
        },
        {
            "id": 10,
            "question": "Which JavaScript method is used to write into the browser console?",
            "options": {
                "a": "console.write()",
                "b": "console.log()",
                "c": "console.print()",
                "d": "console.output()"
            },
            "answer": "console.log()"
        }
    ]   


var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")
var nextBtn = document.getElementById("nextBtn")
var currentQuesNumber = document.getElementById("currentQuesNumber")
var totalQuesNumber = document.getElementById("totalQuesNumber")
totalQuesNumber.innerHTML = quizQuestions.length 
var indexNumber = 0

var correctAns = 0
var wrongAns = 0

var quizContainer = document.getElementById("quizContainer")

function handleQuestion(){
    var optionsObj = quizQuestions[indexNumber].options
    questionElement.innerHTML = quizQuestions[indexNumber].question
    optionElement.innerHTML = ""

    for(var key in optionsObj){
        optionElement.innerHTML += `<li onclick="checkAnswer(this)" >${optionsObj[key]}</li>`
    }
    currentQuesNumber.innerHTML = indexNumber + 1
}

function nextQues(){

    if (indexNumber < quizQuestions.length - 1) {
        nextBtn.disabled = true
        indexNumber++
        handleQuestion()
    } else {
        quizContainer.style.display = "none"
        var resultContainer = document.getElementById("resultContainer")
        resultContainer.style.display = "block"

        resultContainer.innerHTML = `<h1>Correct Answer: ${correctAns} </h1>
        <h1>Wrong Answer: ${wrongAns} </h1>
        <h1>Percentage%: ${(correctAns/ quizQuestions.length) * 100}% </h1>`
    }
}

function checkAnswer(element) {
    var allLiElement = optionElement.children
    var userSelection = element.innerHTML.toLowerCase()
    var ans = quizQuestions[indexNumber].answer.toLowerCase()
    var result = userSelection === ans

    if (result) {
        element.style.backgroundColor = "green"
        correctAns++
    } else {
        wrongAns++
        element.style.backgroundColor = "red"

        for (var i = 0; i < allLiElement.length; i++){
            if (allLiElement[i].innerHTML.toLocaleLowerCase() == ans) {
                allLiElement[i].style.backgroundColor = "green"

                break
                
            }
        }
    }
    for (var i = 0; i < allLiElement.length; i++) {
        allLiElement[i].style.pointerEvents = "none";
    }
    nextBtn.disabled = false
    
}