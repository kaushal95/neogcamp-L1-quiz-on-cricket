// const readlineSync = require('readline-sync');
const readlineSync = require("readline-sync");

const userName = readlineSync.question("Please Enter username : ");

console.log(`Welcome ${userName}, Do You Know Kaushal ?`);

let score = 0;

function play(question, answer) {
  const userAnswer = readlineSync.question(question);
  if (answer == userAnswer.toLowerCase()) {
    score += 1;
  } else {
    score -= 1;
  }
  console.log("current score", score);
  console.log("--------------------");
}

const questionList = [
  {
    question: "Am I older than 25 years ",
    answer: "yes",
  },
  {
    question: "I live in which city? ",
    answer: "faridabad",
  },
  {
    question: "I started my career with which company? ",
    answer: "infosys",
  },
  {
    question: "My Btech stream was ? ",
    answer: "cse",
  },
  {
    question: "My favorite TV series so far? ",
    answer: "breaking bad",
  },
];

for (let i = 0; i < questionList.length; i++) {
  const question = questionList[i].question;
  const answer = questionList[i].answer;
  play(question, answer);
}

console.log(`Thanks for playing 😁, your final score is ${score} !!`);
