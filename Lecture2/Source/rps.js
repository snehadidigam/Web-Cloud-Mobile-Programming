var userInput = prompt("choose ROCK, PAPER or SCISSORS");
alert("your result is : " + userInput);
var rpsValues = Math.random();
if (rpsValues <0.30)
    {
    rpsValues = "ROCK";
    }
    else if(rpsValues <=0.60)
    {
    rpsValues = "PAPER";
    }
    else
    {
    rpsValues = "SCISSORS";
    }
alert("Computer value is :" + rpsValues);

function compareVal(c1,c2) {
    if(c1===c2)
    {
        // alert("RESULT IS TIE");
        return "The result is a tie!";
    }
    if(c1==="ROCK")
    {
        if(c2==="SCISSORS")
        {
            // alert("ROCK HAS WON");
            return "ROCK HAS WON";
        }
        else
        {
            // alert("PAPER HAS WON");
            return "PAPER HAS WON";
        }
    }
    if(c1==="PAPER"){
        if(c2==="ROCK"){
            // alert("PAPER HAS WON");
            return "PAPER HAS WON";
        }
        else{
            // alert("SCISSORS HAS WON");

            return "SCISSORS HAS WON";
        }
    }
    if(c1==="SCISSORS"){
        if(c2==="ROCK"){
            // alert("ROCK HAS WON");

            return "ROCK HAS WON";
        }
        else{
            // alert("SCISSORS HAS WON");
            return "SCISSORS HAS WON";
        }
    }
}
console.log(compareVal(userInput,rpsValues));
var c = compareVal(userInput,rpsValues);
alert(c);
