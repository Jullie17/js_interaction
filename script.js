var halfButton;
var halfInput;

var outfitButton;
var outfitInput;
var outfitOutput;

var text;
var restyleButton;

var outfit_colors = ["red","orange","yellow","green","blue","navy","purple","pink","white","black"]
var outfit_cloth = ["hoodie","pants","skirt","sweatpants","leggings","knitwear","socks","shoes","dress","cardigan"]


document.addEventListener("DOMContentLoaded", function(){
  halfButton = document.getElementById("half-button");
  halfInput = document.getElementById("half-input");

  outfitButton = document.getElementById("outfit-button");
  outfitInput = document.getElementById("outfit-input");
  outfitOutput = document.getElementById("outfit-output");

  text = document.getElementById("text");
  restyleButton = document.getElementById("restyle-button");

  halfButton.addEventListener("click", function(){
    var currentHalfInput = halfInput.value;
    halfNumber(currentHalfInput);
  });

  outfitButton.addEventListener("click", function(){
    var currentOutfitInput = outfitInput.value;
    fortune(currentOutfitInput);
  });

  restyleButton.addEventListener("click", restyle);
});



function halfNumber(num){
  half_num = num / 2;
  alert(half_num);

  console.log("Half of " + num.toString() + " is " + half_num.toString());
}


function fortune(name){
  var outfit_output = name + ", you will wear";
    outfit_output += " " + outfit_colors[Math.floor(Math.random() * outfit_colors.length)];
    outfit_output += " " + outfit_cloth[Math.floor(Math.random() * outfit_cloth.length)] + ".";
    text.innerText = outfit_output;
    /*var random1 = Math.random() * name.length;
    var random2 = Math.random() * name.length;
    var random3 = Math.random() * name.length;
    text.style.fontSize = (random1+random2+random3);*/
    text.style.fontSize = "50px";
  }

function restyle(){
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var outputColor = "rgb(" + red + "," + green + "," + blue + ")";

  var outputSize = Math.random(Math.random() * 120) + 20;
  outfitOutput.style.color = outputColor;
  text.style.fontSize = outputSize;

}
