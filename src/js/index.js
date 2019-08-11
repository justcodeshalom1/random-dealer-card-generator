/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  // console.log("Hello Rigo from the console!");

  let suit = ["\u2660", "\u2663", "\u2665", "\u2666"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = tiger => {
    let x = Math.floor(Math.random() * tiger.length);
    return tiger[x];
  };
  const randomNumber = tiger => {
    let y = Math.floor(Math.random() * tiger.length);
    return tiger[y];
  };
  //   console.log(randomNumber(suit));
  //   console.log(randomNumber(number));

  let randomSuitNumber = randomNumber(suit);
  //   let secondNumber = randomNumber(number);
  document.querySelector(".cards-footer").innerHTML = randomSuitNumber;
  document.querySelector(".cards-header").innerHTML = randomSuitNumber;
  document.querySelector(".cards-body").innerHTML = randomNumber(number);
};
