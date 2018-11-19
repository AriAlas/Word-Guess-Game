//Global variables
var countries = ["australia", "egypt", "spain", "ecuador", "colombia", "iran", "bolivia", "jordan", "finland", "greece","honduras", "japan", "peru", "switzerland", "turkey", "venezuela"];
var wrongLetters = [];
var rightLetters = [];
var guessesLeft = 10;
var randWord = [];
var underScores = [];
var userGuess = [];



function start() {

 
//picking random word from country array
randWord = countries[Math.floor(Math.random() * countries.length)];
console.log(randWord);

//Creating underscores based on randWord length
for (var i = 0; i < randWord.length; i++) {

    underScores.push("_");
     //reset
     
wrongLetters = [];
guessesLeft = 11;
       //HTML
       document.getElementById("underscores").textContent = underScores.join(" ");
       

}

}




start();


//User guesses
document.onkeyup = function(event) {
    userGuess = event.key;

//checking if letter guessed is inside of the word
    if(randWord.indexOf(userGuess) > -1)
    {
        for(var i = 0; i < randWord.length; i++) {
            

            if(randWord[i] === userGuess) {
                underScores[i] = userGuess;
console.log(userGuess);
            }
        }
        
    }
    else {
        wrongLetters.push(userGuess);
        guessesLeft--;
        console.log(wrongLetters);



        document.getElementById("letters-guessed").textContent = wrongLetters;

        document.getElementById("gremaining").textContent = guessesLeft;
      

 

    
    }
    
}




