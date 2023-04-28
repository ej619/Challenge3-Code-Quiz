var questions =[
  {
      title: "What does CSS stand for?",
      choices:['Cascading Style Sheets', 'Cascading Single Sheets', 'Colored Style Sheets', 'Compound Single Sheets' ],
      answer: 'Cascading Style Sheets',

  },
  {
      title: "Which of the following is not a primitive data type in JavaScript?",
      choices:['Number', 'String', 'Object', 'Boolean' ],
      answer: 'Object',

  },
  {
      title: "What does API stand for?",
      choices:['Application Programming Interface', 'Automated Programming Interface', 'Application Processing Interface', 'Automated Processing Interface' ],
      answer: 'Application Programming Interface',

  },
  {
      title: "Which of the following is not a programming language?",
      choices:['Python', 'JavaScript', 'HTML', 'CSS' ],
      answer: 'HTML',

  },


]
var score = document.querySelector("#scoreRes")
var i =0
var time =20

showsButton();

document.getElementById('sbtn').onclick=function() {
  document.getElementById('btn').innerHTML = "";
  showQuestion();

  var runtime = setInterval(
      function(){
          if(time>0){

              time --
              document.getElementById('time').innerHTML = "Time = " + time;
          }
          if(time<1) {
              clearInterval(runtime);
              //alert('Time is up!');
          }
          if(i === 4) {
              //console.log("i=",i)
              score.textContent = "Your Score is = " + time;
              clearInterval(runtime);
              document.getElementById("time").remove();
              showInput();
          }
      }
      , 1000 //one second
  )

}

function showQuestion(){
  document.getElementById('questions').innerHTML =
  `
  <h3>${questions[i].title}</h3>
  <button>${questions[i].choices[0]}</button>
  <button>${questions[i].choices[1]}</button>
  <button>${questions[i].choices[2]}</button>
  <button>${questions[i].choices[3]}</button>
  `
}

function showsButton(){
document.getElementById('btn').innerHTML =
'<button id="sbtn">Start</button>'
};

function showInput(){
  document.getElementById('questions').innerHTML = "";
  document.getElementById('showRight').innerHTML = "";
  document.getElementById('input').innerHTML = 
  `
  <label>Enter your Initials<label>
  <input type="text" id="initials"> 
  <button type="button" id="sbutton">Submit</button>
  `
  var submitButton = document.getElementById('sbutton');

  submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      var initials = document.getElementById('initials').value;
  
      var highScore = {
        initials: initials,
        score: time
      };

      if (localStorage.getItem(initials) !==null && highScore.score < localStorage.getItem(initials)  ){
          
      } else {
          localStorage.setItem(highScore.initials, highScore.score);
      }

      //localStorage.setItem("userScore", JSON.stringify(userScore));
    renderMessage();
  });

};

//event listener for answer buttons
document.getElementById('questions').onclick = function(e) {
  var answer = e.target.innerText
  //check answer
  if(answer == questions[i].answer) {
      document.getElementById('showRight').innerHTML = 
      `
      <h3>Right</h3>
      `
  }  else{
      document.getElementById('showRight').innerHTML = 
      `
      <h3>Wrong</h3>
      `
      time-=5
  }
  //goes to next question
      i++
  
  showQuestion()

}

  function renderMessage() {
    var initials = document.getElementById('initials').value;
    var highScore = localStorage.getItem(initials);


   if (highScore !== null) {
      document.getElementById('message').textContent = "Your High score is " + highScore;
      score.textContent = "";
   }
  };
  