var countries = ["iran", "mexico","ecuador","venezuela","australia","guatemala","colombia", "italy", "switzerland", "china", "japan", "egypt", "france", "greece", "israel"];
var flags = {
    imageIran : "http://flags.fmcdn.net/data/flags/w580/ir.png",
    imageMexico  : "http://flags.fmcdn.net/data/flags/w580/mx.png",
    imageEcuador : "http://flags.fmcdn.net/data/flags/w580/ec.png"
};
var Wins = 0;
var userGuess;
var wrongGuesses = [];
var guessesRemaining = 10;
var underScores = [];

/* pick a country randomly */
var randomCountry = countries[Math.floor(Math.random() * countries.length)];
var remainingLetters = randomCountry.length;





/*Creating Underscores based on word length using a loop*/
for (i = 0; i < randomCountry.length; i++) 
{
    underScores.push("_");
}

/*HTML for underscores*/
document.getElementById("underscores").textContent = underScores.join(" ")



/*Function to verify what Key was pressed and what to do after the key was pressed*/

/*What key?*/
document.onkeyup = function(event) {
    
        userGuess = event.key; 


        
        

        

/*What to do*/

    /*Checking if the userguess is in the word*/

    if (randomCountry.indexOf(userGuess) > -1) {

        for (var i = 0; i < randomCountry.length; i++)
        {
           if (randomCountry[i] === userGuess){
           
            /*replacing underscores with letters*/
            underScores[i] = userGuess;
            document.getElementById("underscores").textContent = underScores.join(" ");
            remainingLetters--;
              

            }
            
        }

        /*printing flags on screen*/
        if ((underScores.join("") === countries[0])) {
            flagIran();
        }
        if ((underScores.join("") === countries[1])) {
            flagMexico();
        }
        if ((underScores.join("") === countries[2])) {
            flagEcuador();
        }
        if ((underScores.join("") === countries[3])) {
            flagVenezuela();
        }
        if ((underScores.join("") === countries[4])) {
            flagAustralia();
        }
        if ((underScores.join("") === countries[5])) {
            flagGuatemala();
        }
        if ((underScores.join("") === countries[6])) {
            flagColombia();
        }
        if ((underScores.join("") === countries[7])) {
            flagItaly();
        }
        if ((underScores.join("") === countries[8])) {
            flagSwitzerland();
        }
        if ((underScores.join("") === countries[9])) {
            flagChina();
        }
        if ((underScores.join("") === countries[10])) {
            flagJapan();
        }
        if ((underScores.join("") === countries[11])) {
            flagEgypt();
        }
        if ((underScores.join("") === countries[12])) {
            flagFrance();
        }
        if ((underScores.join("") === countries[13])) {
            flagGreece();
        }
        if ((underScores.join("") === countries[14])) {
            flagIsrael();
        }
        
      

    }
    /*printing letters guessed and guesses remaining*/
    else {
        guessesRemaining--;
        wrongGuesses.push(userGuess);
    
        document.getElementById("letters-guessed").textContent = wrongGuesses;
        document.getElementById("gremaining").textContent = guessesRemaining;

        if (guessesRemaining === 0) {
            alert("You lose");
            startOver();

        }
        
    
        
    }

    if (underScores.join("") === randomCountry) {
        Wins++;
        document.getElementById("wins").textContent = Wins;


                















        alert("You win, the word is " + randomCountry);
        startOver();
       
    }

    

    
    
};

/*Function to start the game after winning or losing*/
function startOver() {
   
    randomCountry = countries[Math.floor(Math.random() * countries.length)];
     /*reseting underscores*/
     underScores = [];
     remainingLetters = randomCountry.length; 
     wrongGuesses = [];
     guessesRemaining = 10;
     




    for (i = 0; i < randomCountry.length; i++)
    

{
    underScores.push("_");
    document.getElementById("underscores").textContent = underScores.join(" ");
    document.getElementById("letters-guessed").textContent = wrongGuesses;
    // document.getElementById("question-mark").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png");

}








};

/*Function for Flags pop up*/

function flagIran () {
    var iran = document.getElementById("question-mark");
    iran.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/ir.png");
    iran.setAttribute("alt", "Iran flag");



};

function flagMexico () {
    var mexico = document.getElementById("question-mark");
    mexico.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/mx.png");
    mexico.setAttribute("alt", "Mexico flag");



};
function flagEcuador () {
    var ecuador = document.getElementById("question-mark");
    ecuador.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/ec.png");
    ecuador.setAttribute("alt", "Ecuador flag");
};

function flagVenezuela () {
    var venezuela = document.getElementById("question-mark");
    venezuela.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/ve.png");
    venezuela.setAttribute("alt", "venezuela flag");
};

function flagAustralia () {
    var australia = document.getElementById("question-mark");
    australia.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/au.png");
    australia.setAttribute("alt", "australia flag");
};

function flagGuatemala () {
    var guatemala = document.getElementById("question-mark");
    guatemala.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/gt.png");
    guatemala.setAttribute("alt", "guatemala flag");
};

function flagColombia () {
    var colombia = document.getElementById("question-mark");
    colombia.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/co.png");
    colombia.setAttribute("alt", "colombia flag");
};
function flagItaly () {
    var italy = document.getElementById("question-mark");
    italy.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/it.png");
    italy.setAttribute("alt", "italy flag");
};
function flagSwitzerland () {
    var switzerland = document.getElementById("question-mark");
    switzerland.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/ch.png");
    switzerland.setAttribute("alt", "switzerland flag");
};
function flagChina () {
    var china = document.getElementById("question-mark");
    china.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/cn.png");
    china.setAttribute("alt", "china flag");
};
function flagJapan () {
    var japan = document.getElementById("question-mark");
    japan.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/jp.png");
    japan.setAttribute("alt", "japan flag");
};
function flagEgypt () {
    var egypt = document.getElementById("question-mark");
    egypt.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/jp.png");
    egypt.setAttribute("alt", "egypt flag");
};
function flagFrance () {
    var france = document.getElementById("question-mark");
    france.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/fr.png");
    france.setAttribute("alt", "france flag");
};
function flagGreece () {
    var greece = document.getElementById("question-mark");
    greece.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/gr.png");
    greece.setAttribute("alt", "greece flag");
};
function flagIsrael () {
    var israel = document.getElementById("question-mark");
    israel.setAttribute("src", "http://flags.fmcdn.net/data/flags/w580/il.png");
    israel.setAttribute("alt", "israel flag");
};




















    





