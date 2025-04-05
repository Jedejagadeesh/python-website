// Function to show the selected section
// Function to show the selected section
/*document.addEventListener('DOMContentLoaded', () => {
    let a = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16'];

    function mawa(id) {
        const element = document.getElementById(id);
        if (element) {
            document.getElementById('center').innerText = element.innerText;
        }
    }

    a.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => mawa(id));
        }
    });
});*/
function mawa(id) {
        document.getElementById('center').innerText =document.querySelector(`.${id}`).innerText;
}
function showSection(id) {
    // Hide all sections
    const sections = document.querySelectorAll('.item');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    // Show the selected section
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Show the selected section
    }
}
function jagga(){
    document.getdocument.getElementById('service').innerHTML;
}
let questions = [
    {
        p1: "What is a correct syntax to print 'Hello world' in Python?",
        p2: "print('Hello world!')",
        p3: "display('Hello world!')",
        p4: "output('Hello world')",
        p5: "write('Hello world')",
        correct: "p2"
    },
    {
        p1: "What is the output of the following code? type('Hello')",
        p2: "string",
        p3: "Integer",
        p4: "Float",
        p5: "Boolean",
        correct: "p2"
    },
    {
        p1: "What is the output of the following code? print(10*2+1)",
        p2: "30",
        p3: "12",
        p4: "21",
        p5: "22",
        correct: "p4"
    },
    {
        p1: "Which of the following is a Python keyword?",
        p2: "function",
        p3: "elif",
        p4: "define",
        p5: "returning",
        correct: "p3"
    },
    {
        p1: "What is the correct file extension for Python files?",
        p2: ".pyth",
        p3: ".pt",
        p4: ".py",
        p5: ".python",
        correct: "p4"
    },
    {
        p1: "Which operator is used for exponentiation in Python?",
        p2: "^",
        p3: "**",
        p4: "exp()",
        p5: "^^",
        correct: "p3"
    },
    {
        p1: "What is the output of the following code? print(5 == 5)",
        p2: "True",
        p3: "False",
        p4: "Error",
        p5: "None",
        correct: "p2"
    },
    {
        p1: "Which of the following is used to define a block of code in Python?",
        p2: "Curly braces {}",
        p3: "Parentheses ()",
        p4: "Indentation",
        p5: "Square brackets []",
        correct: "p4"
    },
    {
        p1: "What is the output of the following code? print(len('Python'))",
        p2: "5",
        p3: "6",
        p4: "7",
        p5: "Error",
        correct: "p3"
    },
    {
        p1: "Which of the following is a mutable data type in Python?",
        p2: "Tuple",
        p3: "String",
        p4: "List",
        p5: "Integer",
        correct: "p4"
    }
];

let currentQuestion = 0; // Track the current question index
let correctCount = 0; // Track the number of correct answers

// Function to load a question
function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("p1").innerText = question.p1;
    document.getElementById("p2").innerText = question.p2;
    document.getElementById("p3").innerText = question.p3;
    document.getElementById("p4").innerText = question.p4;
    document.getElementById("p5").innerText = question.p5;
}

// Function to check the answer
function checkAnswer(id) {
    const question = questions[currentQuestion];
    if (id === question.correct) {
        correctCount += 1;
    } else {
        correctCount-=1;
    }
    document.querySelector(".answer").innerText = `Correct: ${correctCount}`;
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed! You got ${correctCount} out of ${questions.length} correct.`);
        currentQuestion = 0; // Reset to the first question if needed
        correctCount = 0; // Reset the correct count
        document.querySelector(".answer").innerText = `Correct: ${correctCount}`;
        loadQuestion();
    }
}

// Load the first question when the page loads
loadQuestion();