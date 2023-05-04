var score=10;

function check() {
          var x = document.getElementById("image").getAttribute("src");
          var y = document.getElementById("image1").getAttribute("src");
          var z = document.getElementById("image2").getAttribute("src");
              document.getElementById("image").src="耶耶拿铁.jpg";
              document.getElementById("image1").src="耶耶脆薯饼.jpg";
              document.getElementById("image2").src="耶耶可爱鬼.jpg";
    }

    function answer(){
      var response=prompt("The answer is about a kind of drink.Write down for 2 Chinese words");
      if(response=="拿铁"){
        alert("right answer!");
        score+=30;
      }
      else {
        alert("wrong answer");
      }
    }

    function answer1(){
      var response=prompt("The answer is about a kind of food.Write down for 2 Chinese words.");
      if(response=="薯饼"){
        alert("right answer!");
        score+=30;
      }
      else {
        alert("wrong answer");
      }
    }

    function answer2(){
  var response=prompt("The answer is a kind of ghost.Write down for 3 Chinese words.");
  if(response=="可爱鬼"){
    alert("right answer!");
    score+=30;
  }
  else {
    alert("wrong answer");
  }
}

function sayhello(){
  if(score==100){
    alert("Your score is "+score+" ,you are a good doggie!");
  }
  if(score>10&score<=99){
    alert("Your score is "+score+" ,keep fighting!");
  }
  if(score==10){
    alert("Your score is "+score+" ,you still have a long way to go");
  }
}
