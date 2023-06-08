/* eslint-disable */
/*import "bootstrap";*/
import "./style.css";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuseHTMLcode =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 5)];
  return excuseHTMLcode;
};
document.querySelector("#excuse").innerHTML = window.onload();
