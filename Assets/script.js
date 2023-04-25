var correctAnswers = {
        question1: "a",
        question2: "c",
        question3: "c",
        question4: "d"
}


function confirm(data) {
    if (correctAnswers.question1 === data) {
      document.getElementById("question-1").hidden = true;
      document.getElementById("question-2").hidden = false;
      console.log("correct answer")
    } else {
      document.getElementById("question-1").hidden = true;
      document.getElementById("question-2").hidden = false;
      console.log("wrong answer");
    }
  }