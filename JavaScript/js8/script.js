function foo() {
	var el = document.getElementById("zad1");
	el.style.color = "red";
}

function foo1() {
	document.getElementById("zad2").style.fontSize = "30px";
}

function foo2() {
	var img = document.getElementById("zad3");
	img.src = "img1.jpg";
}

function foo3() {
	var img = document.getElementById("zad4");
	img.innerHTML = "<img src='img3.jpg' alt='picture'>";
}

function foo40() {
	var img = document.getElementById("zad3");
	img.width = "1000";
}

function foo41() {
	var img = document.getElementById("zad3");
	img.width = "650";
}

function foo5() {
	var pborder = document.getElementById("zad6");
	pborder.setAttribute('style', 'border:solid 1px red')
}