var button = document.querySelector("button");
var color = document.body.style.backgroundColor;


// function randomColor(){
// 	document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
// }

function randomColor(){
 document.body.style.background = "linear-gradient(to right, "+'#'+(Math.random()*0xFFFFFF<<0).toString(16)+", "+"#"+(Math.random()*0xFFFFFF<<0).toString(16)+")";
 }

button.addEventListener("click", randomColor);

