//alert('Working')
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

let imageOne = "images/dice" + randomNumber1 + ".png";
let imageTwo = "images/dice" + randomNumber2 + ".png";
 
document.querySelectorAll("img")[0].setAttribute("src", imageOne);
document.querySelectorAll("img")[1].setAttribute("src", imageTwo);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML ="Playr Two Wins";
}
else{
    document.querySelector('h1').innerHTML = "FIGHT TO THE DEATH";
}