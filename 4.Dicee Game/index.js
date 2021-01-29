var random1=Math.ceil(Math.random()*6);//Generating random value between 1 to 6
var diceImage1="images/dice"+random1+".png";//Preparing the exact string to replace the static src path
var image1=document.querySelectorAll("img")[0];//selecting the first image in the HTML file
image1.setAttribute("src", diceImage1);//Changing image's path to this new random generated path

var random2=Math.floor(Math.random()*6)+1;
var diceImage2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

//Changing the title
if(random1>random2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (random1<random2)
{
  document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
else
{
  document.querySelector("h1").innerHTML="It's a draw!";
}
