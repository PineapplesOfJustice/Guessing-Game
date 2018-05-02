
var maxValue = 100;
var minValue = 1;
document.getElementById("headman").innerHTML = "Guess the number between " + minValue + " and " + maxValue + "."
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var attempt = 0;
var number = Math.floor( (Math.random() * (maxValue - minValue + 1) ) + minValue);
var text = 0;
var x = 1;
var y = 0;
var end = 0;
var tryHard = [];
var extra = 0;
var no = 0;
var i = 0;
var t = 0;

console.log("The number is " + number); 

function guess() {  
  attempt += 1;
  y = ""; 
  extra = tryHard.length;
  tryHard.sort(function(a, b){return a-b});  
  text = document.getElementById("guess").value;    
////doesn't wok    
  if(text == NaN){
    attempt -= 1;  
    document.getElementById("counter").innerHTML = "Please insert a number, por favor. Guesses so far: " + attempt;
    console.log("hello");  
  }
////doesn't work 
  else if(end == 1){} 
  else if(text == ""){
    no = 1;  
  }
  else if(text == number && attempt == 1){
    document.getElementById("counter").innerHTML = "It must be your red luck day! You guess " + number + " in one attempt!";
    end = 1;  
  }    
  else if(text == number){
    document.getElementById("counter").innerHTML = "Bingo! It took you " + attempt + " attempts to guess " + number + "!";
    end = 1;  
  }
    
  for(i = 0; i < extra; i++){
     if(text == tryHard[i]){
       no = 1;  
     }
  }
    
  if(no == 0 && end == 0){  
    if (text > number){
      document.getElementById("counter").innerHTML = "Too large, beef boy. Guesses so far: " + attempt;
    }
    else if (text < number){
      document.getElementById("counter").innerHTML = "Too small, add some meat to it. Guesses so far: " + attempt;
    }
    tryHard.push(text);  
    console.log(tryHard[extra]);
  }
  else{    
    attempt -= 1;  
    no = 0;
  }
  tryHard.sort(function(a, b){return a-b});  
  extra = tryHard.length;  
  for(i = 0; i < extra; i++){
    if(i == extra - 1 && tryHard[i] != text){
      y += tryHard[i];
    }
    else if(i == extra - 1 && tryHard[i] == text){
      y += "<b>" + tryHard[i] + "</b>";
    }
    else if(i != extra - 1 && tryHard[i] != text){  
      y += tryHard[i] + ", ";
    }
    else if(i != extra - 1 && tryHard[i] == text){  
      y += "<b>" + tryHard[i] + "</b>, ";
    }
  }
  document.getElementById("done").innerHTML = "Simply Wronged: (" + y + ")";       
}

function guess2(){
  attempt += 1;
  y = ""; 
  extra = tryHard.length;
  tryHard.sort(function(a, b){return a-b});  
  text = document.getElementById("guess").value;
  t = text;  
  if(t == ""){
    no = 1;  
  }
  text = Math.abs(text - number);      
////doesn't wok    
  if(text == NaN){
    attempt -= 1;  
    document.getElementById("counter").innerHTML = "Please insert a number, por favor. Guesses so far: " + attempt;
    console.log("hello");  
  }
////doesn't work   
  else if(end == 1){}  
  else if(text == 0 && attempt == 1){
    document.getElementById("counter").innerHTML = "AAArgggggg!!! My hand is dipped in the fire! You guess " + number + " in one attempt!";
    end = 1;  
  }
  else if(text == 0){
    document.getElementById("counter").innerHTML = "My hand felt like clapping! It took you " + attempt + " attempts to guess " + number + "!";
    end = 1;  
  }
    
  for(i = 0; i < extra; i++){
     if(t == tryHard[i]){
       no = 1;  
     }
  }
    
  if(no == 0 && end == 0){      
    if (text > 100){
      document.getElementById("counter").innerHTML = "Are you even serious? I am literally an iceberg in space. Guesses so far: " + attempt;
    }
    else if (text > 80){
      document.getElementById("counter").innerHTML = "My hand felt like it is frozen and thrown into space. Guesses so far: " + attempt;
    }
    else if (text > 60){
      document.getElementById("counter").innerHTML = "My hand felt like it is flowing in the Antartica water. Guesses so far: " + attempt;
    }
    else if (text > 50){
      document.getElementById("counter").innerHTML = "The refrigirator is very comfortable. Guesses so far: " + attempt;
    }
    else if (text > 30){
      document.getElementById("counter").innerHTML = "My hand felt like I am swimming in the tropic beach. It is getting warm. Guesses so far: " + attempt;
    }
    else if (text > 10){
      document.getElementById("counter").innerHTML = "I love to wash the dishes with hot water, did I ever tell you that? Guesses so far: " + attempt;
    }
    else if (text > 7){
      document.getElementById("counter").innerHTML = "So warm! My hand is within a centimeter from the candle. Guesses so far: " + attempt;
    }
    else if (text > 5){
      document.getElementById("counter").innerHTML = "So hot! My hand is within a millimeter from the candle. Guesses so far: " + attempt;
    }
    else if (text > 3){
      document.getElementById("counter").innerHTML = "My burning spirit! So close, so far. Guesses so far: " + attempt;
    }
    else if (text > 0){
      document.getElementById("counter").innerHTML = "Arghh, why is my hand in a stove! Guesses so far: " + attempt;
    }
    tryHard.push(t);  
    console.log(tryHard[extra]);
  }
  else{    
    attempt -= 1;  
    no = 0;
  }
  tryHard.sort(function(a, b){return a-b});  
  extra = tryHard.length;  
  for(i = 0; i < extra; i++){
    if(i == extra - 1 && tryHard[i] != t){
      y += tryHard[i];
    }
    else if(i == extra - 1 && tryHard[i] == t){
      y += "<b>" + tryHard[i] + "</b>";
    }
    else if(i != extra - 1 && tryHard[i] != t){  
      y += tryHard[i] + ", ";
    }
    else if(i != extra - 1 && tryHard[i] == t){  
      y += "<b>" + tryHard[i] + "</b>, ";
    }
  }
  document.getElementById("done").innerHTML = "Simply Wronged: (" + y + ")";       
}

function okay1(){
  x=1;
  document.getElementById("guessButton").setAttribute("onclick", "guess()");
  document.getElementById("button2").setAttribute("style", "color: beige; background-color: #ff9900;");
  document.getElementById("button1").setAttribute("style", "color: #ff9900; background-color: beige;");  
}

function okay2(){
  x=2;
  document.getElementById("guessButton").setAttribute("onclick", "guess2()");
  document.getElementById("button1").setAttribute("style", "color: beige; background-color: #ff9900;");
  document.getElementById("button2").setAttribute("style", "color: #ff9900; background-color: beige");
}

var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var f = document.getElementById("stay");
b2.addEventListener('mouseenter', function(){f.setAttribute("style", "opacity: 1;"); f.innerHTML = "Key: too small < <span style='color:red;'>goal</span> > too big";})
b2.addEventListener('mouseleave', function(){f.setAttribute("style", "opacity: 0;");})

b1.addEventListener('mouseenter', function(){f.setAttribute("style", "opacity: 1;"); f.innerHTML = "Key: <span style='color:red;'>Closer</span> = Hotter || <span style='color:blue;'>Farther</span> = Colder";})
b1.addEventListener('mouseleave', function(){f.setAttribute("style", "opacity: 0;");})

function reset(){
  end = 0;  
  document.getElementById("counter").innerHTML = "Guesses so far: 0";
  attempt = 0;
  number = Math.floor( (Math.random() * (maxValue - minValue + 1) ) + minValue);  
  console.log("The number is " + number);     
  tryHard = [];
  extra = 0; 
  document.getElementById("done").innerHTML = "";  
}

document.addEventListener('keypress',hello)
function hello(event) {       
  if(event.key == "Enter" && x == 1){
    guess();
  resetter();  
  }
  else if(event.key == "Enter" && x == 2){
    guess2();
  resetter();  
  }
  else if(event.key == "r"){
    reset();  
  resetter();  
  }
}

function resetter(){
  document.getElementById("guess").value = "";  
}