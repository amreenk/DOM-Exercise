// change the color of the body element to #6f84a5
// use document.body
var body = document.body
body.style.background = "#6f84a5";

// change the display property of the <a> elements to be block
// use document.getElementsByTagName()
var a = document.getElementsByTagName('a');
for(var i=0; i<a.length; i++){
	a[i].style.display = "block";
}

// change the font size of the first paragraph to be 20px
// use document.getElementById()
var p1 = document.getElementById("p1");
p1.style.fontSize = "20px";

// change the color of the elements with class "sam" to rgb(24, 84, 69)
// use document.getElementsByClassName()
var sam = document.getElementsByClassName("sam");
for(var i=0; i<sam.length; i++) {
	sam[i].style.color = "rgb(24, 84, 69)";
}

// change the color of the elements with class "angel" to rgb(77, 24, 84)
// use document.querySelectorAll()
var angels = document.querySelectorAll(".angel");
for(var i=0; i<angels.length; i++) {
	angels[i].style.color = "rgb(77, 24, 84)";
}

// change the font size of the fourth paragraph to be 20px
// use document.querySelector()
var p4 = document.querySelector("#p4");
p4.style.fontSize = "20px";

// center all the paragraphs
var paragraphs = document.querySelectorAll("p");
for(var i=0; i<paragraphs.length; i++) {
	paragraphs[i].style.textAlign = "center";
}

// bonus: select the first paragraph using each of the five different
// methods
var paragraph1 = document.getElementById("p1");
var paragraph1 = document.getElementsByClassName("sam")[0];
var paragraph1 = document.getElementsByTagName("p")[0];
var paragraph1 = document.querySelector("#p1");
var paragraph1 = document.querySelectorAll(".sam")[0];