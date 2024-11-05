const quizzes = [
  {
    title: "JavaScript Basics",
    questions: [
      {
        question: "What does JS stand for?",
        options: ["a.JavaScript", "JavaSource", "JustScript", "JScript"],
        correctAnswer: 0,
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correctAnswer: 1,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "/* */"],
        correctAnswer: 0,
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
          "function = myFunction()",
          "function myFunction()",
          "myFunction() function",
          "create function myFunction()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          "call myFunction()",
          "call function myFunction()",
          "myFunction()",
          "execute myFunction()",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Number", "Boolean", "All of the above"],
        correctAnswer: 3,
      },
      {
        question:
          "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: 3,
      },
      {
        question:
          "What will the following code output: console.log(typeof NaN)?",
        options: ["number", "NaN", "undefined", "string"],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following methods is used to find the length of a string?",
        options: [".length", ".size()", ".count()", ".length()"],
        correctAnswer: 0,
      },
    ],
  },
  {
    title: "React-JS",
    questions: [
      {
        question: "What is React-JS?",
        options: [
          "A JavaScript library",
          "A CSS framework",
          "A backend framework",
          "A database",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which company developed React?",
        options: ["Google", "Facebook", "Microsoft", "Twitter"],
        correctAnswer: 1,
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML",
          "JavaScript Extension",
          "Java XML",
          "JavaScript Compiler",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which hook is used to manage state in a functional component?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 0,
      },
      {
        question:
          "Which method is used to render a React component to the DOM?",
        options: [
          "ReactDOM.render()",
          "React.render()",
          "ReactDOM.create()",
          "React.create()",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the virtual DOM in React?",
        options: [
          "A real representation of the DOM",
          "A lightweight copy of the actual DOM",
          "A part of the browser's DOM",
          "An API provided by React",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of a key in React lists?",
        options: [
          "To uniquely identify elements",
          "To improve performance",
          "To avoid bugs",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "What does 'lifting state up' mean in React?",
        options: [
          "Moving state to a parent component",
          "Creating state in a child component",
          "Using state in a higher-order component",
          "Deleting state from a component",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is true about React fragments?",
        options: [
          "They allow returning multiple elements without a wrapper",
          "They are a way to style components",
          "They replace divs in JSX",
          "They are used for lazy loading",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between state and props in React?",
        options: [
          "State is mutable, props are immutable",
          "Props are used to pass data, state manages local data",
          "State can change, props cannot",
          "All of the above",
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    title: "OOP",
    questions: [
      {
        question: "What does OOP stand for?",
        options: [
          "Object-Oriented Programming",
          "Overloading Operator Programming",
          "Object-Operating Process",
          "Open Operation Programming",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of OOP?",
        options: [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is encapsulation in OOP?",
        options: [
          "Wrapping data and methods into a single unit",
          "Hiding the implementation details",
          "Using existing classes as a base",
          "Both A and B",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "implements", "inherits", "derives"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is not a pillar of OOP?",
        options: ["Abstraction", "Encapsulation", "Inheritance", "Compilation"],
        correctAnswer: 3,
      },
      {
        question: "What is polymorphism in OOP?",
        options: [
          "Multiple inheritance",
          "Ability to take multiple forms",
          "Hiding implementation details",
          "Using a single method for different purposes",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which OOP concept involves using existing classes as a base?",
        options: [
          "Inheritance",
          "Encapsulation",
          "Polymorphism",
          "Abstraction",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is method overloading?",
        options: [
          "Defining multiple methods with the same name but different parameters",
          "Overriding a method in a subclass",
          "Using a method multiple times in a class",
          "None of the above",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following best describes abstraction?",
        options: [
          "Hiding the implementation details and showing only the functionality",
          "Wrapping data and methods together",
          "Creating a blueprint for objects",
          "Inheriting features from a parent class",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is a constructor in OOP?",
        options: [
          "A special method used to initialize objects",
          "A method used to destroy objects",
          "A method used to copy objects",
          "A method used to create interfaces",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    title: "Assembly",
    questions: [
      {
        question: "What is Assembly Language?",
        options: [
          "Low-level programming language",
          "High-level programming language",
          "Markup language",
          "Scripting language",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the role of an assembler?",
        options: [
          "Converts assembly code to machine code",
          "Converts high-level code to assembly code",
          "Executes machine code",
          "Links object code",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is an opcode in assembly language?",
        options: ["Operation code", "Operand", "Memory address", "Variable"],
        correctAnswer: 0,
      },
      {
        question:
          "Which register is commonly used to store the return address in assembly?",
        options: [
          "Stack Pointer (SP)",
          "Instruction Pointer (IP)",
          "Base Pointer (BP)",
          "Accumulator (AX)",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which directive is used to define data in assembly language?",
        options: ["DB", "MOV", "ADD", "JMP"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the purpose of the 'MOV' instruction in assembly language?",
        options: [
          "Move data from one location to another",
          "Multiply two values",
          "Perform logical operations",
          "Jump to another instruction",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is a register in assembly language?",
        options: [
          "A small storage location within the CPU",
          "A part of the memory",
          "A place where data is stored permanently",
          "A hardware component that executes instructions",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a conditional jump instruction?",
        options: ["JMP", "JE", "MOV", "ADD"],
        correctAnswer: 1,
      },
      {
        question: "What does the 'INT' instruction do in assembly?",
        options: [
          "Triggers a software interrupt",
          "Performs integer division",
          "Converts data to an integer",
          "Initializes a new process",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which segment is used to store the code in assembly language?",
        options: [
          "Code Segment (CS)",
          "Data Segment (DS)",
          "Stack Segment (SS)",
          "Extra Segment (ES)",
        ],
        correctAnswer: 0,
      },
    ],
  },
];

const quizListElement = document.getElementById("quiz-list");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const scoreText = document.getElementById("score-text");
const home = document.getElementById("home");
const next = document.getElementById("next-btn");
const quiztitle = document.getElementById("quiz-title");
const quizlist = document.getElementById("quiz-listone");
const quizlist3 = document.getElementById("quiz-list2");
const quizlist4 = document.getElementById("quiz-list3");
const option0 = document.getElementById("option0");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const scorecard = document.getElementById("score-card");
let i = 1,
  order = 0;

quizListElement.innerHTML = quizzes[0].title;
quizlist.innerHTML = quizzes[1].title;
quizlist3.innerHTML = quizzes[2].title;
quizlist4.innerHTML = quizzes[3].title;
function JavaScript(l) {
  quiztitle.innerHTML = quizzes[0].title;
  questionText.innerHTML = quizzes[0].questions[0].question;
  option0.innerHTML = quizzes[0].questions[0].options[0];
  option1.innerHTML = quizzes[0].questions[0].options[1];
  option2.innerHTML = quizzes[0].questions[0].options[2];
  option3.innerHTML = quizzes[0].questions[0].options[3];
  order = l;
}
function react(l) {
  quiztitle.innerHTML = quizzes[1].title;
  questionText.innerHTML = quizzes[1].questions[0].question;
  option0.innerHTML = quizzes[1].questions[0].options[0];
  option1.innerHTML = quizzes[1].questions[0].options[1];
  option2.innerHTML = quizzes[1].questions[0].options[2];
  option3.innerHTML = quizzes[1].questions[0].options[3];
  order = l;
}
function ubit(l) {
  quiztitle.innerHTML = quizzes[2].title;
  questionText.innerHTML = quizzes[2].questions[0].question;
  option0.innerHTML = quizzes[2].questions[0].options[0];
  option1.innerHTML = quizzes[2].questions[0].options[1];
  option2.innerHTML = quizzes[2].questions[0].options[2];
  option3.innerHTML = quizzes[2].questions[0].options[3];
  order = l;
}
function assembly(l) {
  quiztitle.innerHTML = quizzes[3].title;
  questionText.innerHTML = quizzes[3].questions[0].question;
  option0.innerHTML = quizzes[3].questions[0].options[0];
  option1.innerHTML = quizzes[3].questions[0].options[1];
  option2.innerHTML = quizzes[3].questions[0].options[2];
  option3.innerHTML = quizzes[3].questions[0].options[3];
  order = l;
  // console.log(order);
}
function displayBlock() {
  home.style.display = "none";
  quizSection.style.display = "block";
}
let score = 0,
  clicks = 0,
  j = 1,
  k = 0,
  length = 0;
let answer = [];
function changequestion(index) {
  console.log(index);
  length = quizzes[order].questions.length;
  clicks++;
  if (clicks <= length) {
    answer[k] = index;
  }

  if (i < length) {
    questionText.innerHTML = quizzes[order].questions[i].question;
    option0.innerHTML = quizzes[order].questions[i].options[0];
    option1.innerHTML = quizzes[order].questions[i].options[1];
    option2.innerHTML = quizzes[order].questions[i].options[2];
    option3.innerHTML = quizzes[order].questions[i].options[3];
    i++;
    k++;
  } else {
    questionText.innerHTML = "Would You Like To Submit The Quiz ??";
    optionsList.style.display = "none";
    option0.innerHTML = null;
    option1.innerHTML = null;
    option2.innerHTML = null;
    option3.innerHTML = null;
    next.innerHTML = "Submit";
  }
  if (clicks > length) {
    showResult();
  }
}
function showResult() {
  for (let m = 0; m < length; m++) {
    if (answer[m] == quizzes[order].questions[m].correctAnswer) {
      score += 10;
    }
  }
  resultSection.style.display = "Block";
  quizSection.style.display = "none";
  scorecard.innerHTML = score + " / 100";
}
function restart() {
  resultSection.style.display = "none";
  home.style.display = "block";
  optionsList.style.display = "block";
  next.innerHTML = "Next";
  score = 0;
  clicks = 0;
  j = 1;
  k = 0;
  length = 0;
  i = 1;
  order = 0;
}
