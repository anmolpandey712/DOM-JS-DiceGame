// Create a random Number
var random_Number1=Math.floor(Math.random()*6+1);
var random_img="images/dice"+random_Number1+".png";
var source=document.querySelectorAll("img")[0].setAttribute("src",random_img);

var random_Number2=Math.floor(Math.random()*6+1);
var random_img2="images/dice"+random_Number2+".png";
var source2=document.querySelectorAll("img")[1].setAttribute("src",random_img2);

if(random_Number1>random_Number2)
{
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if(random_Number1<random_Number2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").textContent="Match Draw..."; 
}