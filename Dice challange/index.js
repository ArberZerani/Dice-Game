var random1 = Math.random();
random1 = random1 * 6;
random1 = Math.floor(random1)+1;

var random2 = Math.random();
random2 = random2 * 6;
random2 = Math.floor(random2)+1;



if (random1 == 1) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice1.png");
}
else if (random1 == 2) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice2.png");
}
else if (random1 == 3) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice3.png");
}
else if (random1 == 4) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice4.png");
}
else if (random1 == 5) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice5.png");
}
else if (random1 == 6) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice6.png");
}


if (random2 == 1) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice1.png");
}
else if (random2 == 2) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice2.png");
}
else if (random2 == 3) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice3.png");
}
else if (random2 == 4) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice4.png");
}
else if (random2 == 5) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice5.png");
}
else if (random2 == 6) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice6.png");
}


if (random1 == random2){
  document.querySelector("h1").textContent = "Draw";
}
else if(random1 > random2){
  document.querySelector("h1").textContent = "Player 1 wins";
}
else{
  document.querySelector("h1").textContent = "Player 2 wins";

}
