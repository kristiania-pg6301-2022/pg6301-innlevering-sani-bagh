

export function randomQuestion() {
    return Questions[Math.trunc(Math.random()*Questions.length)];
}

export const Questions = [
    {id: 1,
        question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
        options: {
            option_a: "#demo.innerHTML = \"Hello World!\";",
            option_b: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
            option_c: "document.getElement(\"p\").innerHTML = \"Hello World!\";"
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: true,
            option_c_correct: false
        },
        answer:  "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
    },
    {
        id: 2,
        question:  "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        options: {
            option_a: "<script name=\"xxx.js\">",
            option_b: "<script src=\"xxx.js\">",
            option_c: "<script href=\"xxx.js\">"
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: true,
            option_c_correct: false
        },
        answer: "<script src=\"xxx.js\">"
    },
    {
        id: 3,
        question: "Which operator is used to assign a value to a variable?",
        options: {
            option_a: "x",
            option_b:  "-",
            option_c: "="
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: false,
            option_c_correct: true
        },
        answer: "="
    },
    {
        id: 4,
        question: "How to insert a comment that has more than one line?",
        options: {
            option_a: "\/*This comment has more than one line*\/",
            option_b: "<!--This comment has more than one line-->",
            option_c: "\/\/This comment has more than one line\/\/"
        },
        correct_answer: {
            option_a_correct: true,
            option_b_correct: false,
            option_c_correct: false
        },
        answer: "\/*This comment has more than one line*\/"
    },
    {
        id: 5,
        question: "How do you round the number 7.25, to the nearest integer?",
        options: {
            option_a: "Math.round(7.25)",
            option_b: "round(7.25)",
            option_c: "Math.rnd(7.25)"
        },
        correct_answer: {
            option_a_correct: true,
            option_b_correct: false,
            option_c_correct: false
        },
        answer: "Math.round(7.25)"
    },
    {
        id: 6,
        question: "How do you find the number with the highest value of x and y?",
        options: {
            option_a: "ceil(x, y)",
            option_b: "Math.ceil(x, y)",
            option_c: "Math.max(x, y)"
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: false,
            option_c_correct: true
        },
        answer: "Math.max(x, y)"
    },
    {
        id: 7,
        question: "How to write an IF statement in JavaScript?",
        options: {
            option_a: "if i = 5 then",
            option_b: "if (i == 5)",
            option_c: "if i == 5 then"
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: true,
            option_c_correct: false
        },
        answer: "if (i == 5)"
    },
    {
        id: 8,
        question: "How does a FOR loop start?",
        options: {
            option_a: "for (i = 0; i <= 5; i++)",
            option_b: "for i = 1 to 5",
            option_c: "for (i = 0; i <= 5)"
        },
        correct_answer: {
            option_a_correct: true,
            option_b_correct: false,
            option_c_correct: false
        },
        answer: "for (i = 0; i <= 5; i++)"
    },
    {
        id: 9,
        question: "How does a WHILE loop start?",
        options: {
            option_a: "while (i <= 10)",
            option_b: "while i = 1 to 10",
            option_c: "while (i <= 10; i++)"
        },
        correct_answer: {
            option_a_correct: true,
            option_b_correct: false,
            option_c_correct: false
        },
        answer: "while (i <= 10)"
    },
    {
        id: 10,
        question: "What is the correct way to write a JavaScript array?",
        options: {
            option_a: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
            option_b: "var colors = \"red\", \"green\", \"blue\"",
            option_c: "var colors = [\"red\", \"green\", \"blue\"]"
        },
        correct_answer: {
            option_a_correct: false,
            option_b_correct: false,
            option_c_correct: true
        },
        answer: "var colors = [\"red\", \"green\", \"blue\"]"
    }

];



