var readlineSync = require("readline-sync");
var score=0;
var userName = readlineSync.question("may i know your name ? ");
console.log("hi! "+userName+" welcome to #DO YOU KNOW JAGABANDHU quizGame ?");

function play(question, answer) {
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer) {
    console.log("right!");
    score=score+1;
    console.log("your score = "+score);
    console.log("-----------------------")
  }else {
    console.log("opps!wrong");
    score=score-1;
    console.log("your score = "+score);
  }
}

var questionOne={
  question:"where do i live ? ",
  answer:"puri"
}
var questionTwo={
  question:"what is my age ? ",
  answer:"27"
}


var questions=[questionOne,questionTwo];
for (i=0; i<questions.length; i++) {
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
}


// play("where do i live ? ","puri");
// play("what is my age ?  ","27");