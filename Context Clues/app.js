window.addEventListener("resize", myFunction);
function myFunction() {

  var w = window.innerWidth;
  if(w <=1000){
    document.getElementById("schoolName").innerHTML = "G F I N H S";
  }else{
    document.getElementById("schoolName").innerHTML = "Guronasyon Foundation Incorporated National High School";
  }

}

var arr1 = [1, 2, 3, 4];
var questionArray = [1,2,3,4,5];
shuffleArray2(arr1);
shuffleArray2(questionArray);
console.log(arr1);
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function shuffleArray2(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

/* Question */
var count = 1;
var countScore = 0;
var countScoreBoolean = new Boolean;
countScoreBoolean = true;

var QuestionArray = [

  ["Question","Option","Option","Option","Option"],
  ["The extremely dry weather <span>sweltered</span> the dried leaves in the backyard.","burned","ate","slept","sunbathed"],
  ["The Philippine government announced the needs to review the <span>tariff</span> imposed on imported products that have gradually taken over the local market.","tax","ad","prohibition","stamp"],
  ["Bernadette <span>precariously</span> climbed the highest mountain in the country.","dangerously","gracefully ","lazily","hopefully"],
  ["I used to visit Nami Island in South Korea to see the falling colorful dried <span>foliage</span>.","leaves","snow","plays","hurricane"],
  ["Two tickets were <span>allotted</span> to each student for the dance party.","allowed","joyful","taken","fed"]
 
];

/*call Option*/
const option1 = document.querySelector('.setOption1');
const option2 = document.querySelector('.setOption2');
const option3 = document.querySelector('.setOption3');
const option4 = document.querySelector('.setOption4');



option1.addEventListener('click', (e) => {
  callOption(e);

  
})
option2.addEventListener('click', (e) => {
  callOption(e);
  console.log(e.target.id);
  
});
option3.addEventListener('click', (e) => {
  callOption(e);
});
option4.addEventListener('click', (e) => {
  callOption(e);
});

function callOption(e){


  checkAnswer(e);
}


/*Check Answer*/
function checkAnswer(e){
  console.log(countScoreBoolean);

  if((e.target.innerText) == (QuestionArray[questionArray[count-1]][1]) ){
    document.getElementById(e.target.id).style.background = "limegreen";
    document.getElementById(e.target.id).style.color = "white";
    document.getElementById("NextQuestion").innerHTML = "Next Question";

    optionEvent("none");

    if(countScoreBoolean == true){
      countScore = countScore+1;
  
    }else{
  
    }

  }else{
    document.getElementById(e.target.id).style.background = "pink";
    document.getElementById(e.target.id).style.color = "red";

  }

 
  countScoreBoolean = false;
  if(count == QuestionArray.length-1){
  document.getElementById("NextQuestion").innerHTML = "Show Result";
  }


}


const Start = document.querySelector('.Start');
Start.addEventListener('click', () => {
  Start.classList.toggle('active');
  callQuestion(count);
});
/*Next Question */
const Result = document.querySelector('.Result');
const NextQuestion = document.querySelector('.NextQuestion');
NextQuestion.addEventListener('click', (e) => {


  if(count == QuestionArray.length-1){
   
  }else{

  }
  if(e.target.innerText == "Next Question"){
    shuffleArray2(arr1);
    count = count + 1;
    callQuestion(count);
    setOptionColor();
    countScoreBoolean = true;
  }else{

  }

  if(e.target.innerText == "Show Result"){
    /*show result*/
    console.log("working");
    Result.classList.toggle('active');
    document.getElementById("Topic").innerHTML = "Context Clues";
    document.getElementById("YourScore").innerHTML =  countScore +" / "+(QuestionArray.length-1);
  }
 
});

function setOptionColor(){
  document.getElementById("NextQuestion").innerHTML = "Choose the correct answer.";

  document.getElementById("myOption1").style.background = "lightblue";
  document.getElementById("myOption1").style.color = "black";
  document.getElementById("myOption3").style.background = "lightblue";
  document.getElementById("myOption3").style.color = "black";
  document.getElementById("myOption2").style.background = "lightgreen";
  document.getElementById("myOption2").style.color = "black";
  document.getElementById("myOption4").style.background = "lightgreen";
  document.getElementById("myOption4").style.color = "black";
  
  optionEvent("auto");
}



function callQuestion(myData1){
  for (var i=1;i<=4;i++){
    console.log(i);
    document.getElementById("myOption"+i).innerHTML = QuestionArray[questionArray[myData1-1]][arr1[i-1]];
  }
  document.getElementById("myQuestion").innerHTML = QuestionArray[questionArray[myData1-1]][0];

};

function optionEvent(myData1){
  for (var i=1;i<=4;i++){
    document.getElementById("myOption"+i).style.pointerEvents = myData1;
  }
}


/*

  document.getElementById("myOption1").style.pointerEvents = "none";
  document.getElementById("myOption1").style.pointerEvents = "none";
  document.getElementById("myOption1").style.pointerEvents = "none";
  document.getElementById("myOption1").style.pointerEvents = "auto";
const GradeLevel = document.querySelectorAll('.GradeLevel .Grade-Item ul');
const QuarterItem = document.querySelector('.Quarter-Item1');
const QuarterItem2 = document.querySelector('.Quarter-Item2');

GradeLevel.addEventListener('click', () => {
    console.log("Gervie");
    QuarterItem.classList.toggle('active');

 });


 
GradeLevel.forEach((item) => {

  item.addEventListener('click', (e) => {
    console.log("Gervie");
    console.log(e.target.innerText);

    sample();

    switch(e.target.innerText){
      case "Grade 7":
        QuarterItem.classList.toggle('active');
        return 120;

      break;
      case "Grade 8":
        QuarterItem2.classList.toggle('active');

      break;
      case "Grade 9":

      break;
      case "Grade 10":

      break;
 
    }

  });
 });

 function sample(){
  if(QuarterItem.classList.toggle('active')==true){
    QuarterItem.classList.toggle('active');
  }
  if(QuarterItem2.classList.toggle('active')==true){
    QuarterItem2.classList.toggle('active');
  }
 }

var QuestionArray = [

  ["Question","Option","Option","Option","Option"],
  ["The extremely dry weather sweltered the dried leaves in the backyard.","burned ","ate","slept","sunbathed"],
  ["The Philippine government announced the needs to review the tariff imposed on imported products that have gradually taken over the local market.","tax","ad","prohibition","stamp"],
  ["Bernadette precariously climbed the highest mountain in the country.","dangerously ","gracefully ","lazily ","hopefully"],
  ["I used to visit Nami Island in South Korea to see the falling colorful dried foliage.","leaves","snow","plays","hurricane"],
  ["Two tickets were allotted to each student for the dance party.","allowed","joyful","taken","fed"],
 
];

 */