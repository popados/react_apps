
var textfield;
var output;
var submit;
var txt;

function preload() {
  txt = loadStrings("./federealist-docs.txt")

}
function setup() {
  noCanvas();
  // textfield = select("#words");
  textfield = select('#textfield');
  //textfield.changed(newText);
  textfield.input(newTyping);
  output = select("#output");
  submit = select("#submit");
  submit.mousePressed(newText);
  console.log(txt);
}

function newTyping() {
  output.html(textfield.value());
}

function newText() {
  //console.log(textfield.value());
  createP(textfield.value());
}
