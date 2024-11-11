/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The neighbor",
    "My little brother",
    "My cat",
    "The robot vacuum",
    "An alien",
    "I"
  ];
  let action = ["spilled", "stole", "hid", "destroyed", "painted"];
  let what = [
    "my laptop",
    "the groceries",
    "my project",
    "my shoes",
    "the remote control"
  ];
  let when = [
    "while I was in the shower",
    "during my important call",
    "right before the deadline",
    "as I was about to leave",
    "during my meditation session"
  ];

  function Rand_Element(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateExcuse() {
    let rand_who = Rand_Element(who);
    let rand_action = Rand_Element(action);
    let rand_what = Rand_Element(what);
    let rand_when = Rand_Element(when);

    let excuse_str =
      rand_who + " " + rand_action + " " + rand_what + " " + rand_when;

    document.getElementById("excuse").innerHTML = excuse_str;
  }

  generateExcuse();

  console.log("Hello Rigo from the console!");
};
