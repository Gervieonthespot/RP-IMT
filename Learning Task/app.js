window.addEventListener("resize", myFunction);
function myFunction() {

  var w = window.innerWidth;
  if (w <= 1000) {
    document.getElementById("schoolName").innerHTML = "R P - I M T";
  } else {
    document.getElementById("schoolName").innerHTML = "Reviewer Print - Instructional Material Tutorial";
  }

}


/*variables*/
var count = 1;
var countScore = 0;
var countScoreBooleana = true;


/* shuffle */


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(shuffleOption);
shuffleArray(shuffleQuestion);



/*Start*/
const Start = document.querySelector('.Start');

Start.addEventListener('click', () => {
  console.log("Gervie");
  Start.classList.toggle('active');
  callQuestion(count);

});

const Logo = document.querySelector('.header .Logo');

Logo.addEventListener('click', () => {
  console.log("Gervie");
  Start.classList.toggle('active');

});

/*create Question*/



function callQuestion(myData1) {
  document.getElementById("QuestionCount").innerHTML = "Question no. " + count + "/" + (QuestionArray.length - 1)
  document.getElementById("myQuestion").innerHTML = QuestionArray[shuffleQuestion[myData1 - 1]][0];

  for (var i = 1; i <= 4; i++) {
    document.getElementById("Option" + i).innerHTML = QuestionArray[shuffleQuestion[myData1 - 1]][shuffleOption[i - 1]];
  }

};

/*set Option*/


/*call Option*/
const option1 = document.querySelector('.myOption1');
const option2 = document.querySelector('.myOption2');
const option3 = document.querySelector('.myOption3');
const option4 = document.querySelector('.myOption4');


option1.addEventListener('click', (e) => {
  callOption(e);

})
option2.addEventListener('click', (e) => {
  callOption(e);
});

option3.addEventListener('click', (e) => {
  callOption(e);
});
option4.addEventListener('click', (e) => {
  callOption(e);
});

function callOption(e) {
  console.log(e.target.innerText);
  console.log(QuestionArray[count][1]);

  if ((e.target.innerText) == QuestionArray[shuffleQuestion[count - 1]][1]) {
    document.getElementById(e.target.id).style.background = "lime";
    document.getElementById(e.target.id).style.color = "darkgreen";
    document.getElementById(e.target.id).style.fontWeight = "bold";
    document.getElementById("NextQuestion").innerHTML = "Next Question";
    StopEvent("none")
    FcountScore();

  } else {
    document.getElementById(e.target.id).style.background = "pink";
    document.getElementById(e.target.id).style.color = "red";

  }

  if (count == QuestionArray.length - 1) {
    document.getElementById("NextQuestion").innerHTML = "Show Result";
  }
  countScoreBooleana = false;
  console.log(countScore);


}

/* next Question */
/*Next Question */

const NextQuestion = document.querySelector('.NextQuestion');
const Result = document.querySelector('.ShowResult');
NextQuestion.addEventListener('click', (e) => {

  if (e.target.innerText == "Next Question") {
    count = count + 1;
    shuffleArray(shuffleOption);
    callQuestion(count);
    ResetOptionColor();
    countScoreBooleana = true;


  } else {
    if (e.target.innerText == "Show Result") {
      console.log("working")
      Result.classList.toggle('active');

      document.getElementById("ShowResultTitle").innerHTML = document.getElementById("myTitle").innerHTML;
      document.getElementById("myScore").innerHTML = countScore + " / " + (QuestionArray.length - 1);
    }

  }



});

function ResetOptionColor() {
  document.getElementById("NextQuestion").innerHTML = "Choose the correct answer.";

  document.getElementById("Option1").style.backgroundColor = "rgb(70, 250, 70)";
  document.getElementById("Option1").style.color = "darkgreen";
  document.getElementById("Option1").style.fontWeight = "normal";
  document.getElementById("Option2").style.backgroundColor = "rgb(150, 250, 150)";
  document.getElementById("Option2").style.color = "darkgreen";
  document.getElementById("Option2").style.fontWeight = "normal";

  document.getElementById("Option3").style.backgroundColor = "rgb(70, 250, 70)";
  document.getElementById("Option3").style.color = "darkgreen";
  document.getElementById("Option3").style.fontWeight = "normal";
  document.getElementById("Option4").style.backgroundColor = "rgb(150, 250, 150)";
  document.getElementById("Option4").style.color = "darkgreen";
  document.getElementById("Option4").style.fontWeight = "normal";



  StopEvent("auto")

}

function StopEvent(myData1) {
  for (var i = 1; i <= 4; i++) {
    document.getElementById("Option" + i).style.pointerEvents = myData1;
  }
}


/*Count Score*/


function FcountScore() {
  if (countScoreBooleana == true) {
    countScore = countScore + 1;
    countScoreBooleana = false;
  } else {

  }
}



