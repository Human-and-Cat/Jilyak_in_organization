function move(div) {
	div.style.cursor = 'move';
	document.onmousemove = function (e) {
		var x = e.pageX;
		var y = e.pageY;
		var left = div.offsetLeft;
		var top = div.offsetTop;
		left = x - left;
		top = y - top;
		document.onmousemove = function (e) {
			x = e.pageX;
			y = e.pageY;
			div.style.top = y - top + 'px';
			div.style.left = x - left + 'px';
		}
	}
	document.onmouseup = function () {
		div.style.cursor = 'auto';
		document.onmousedown = function () {};
		document.onmousemove = function () {};
	}
}

function koott() {
	var start = Date.now();
	var kote = document.getElementById("kott");

	var timer = setInterval(function () {
		var timePassed = Date.now() - start;

		if (timePassed >= 4750) {
			clearInterval(timer);
			return;
		}

		draw(timePassed);
	}, 20);

	function draw(timePassed) {
		kote.style.left = timePassed / 5 + 'px';
	}
}

function line() {

	var e = document.getElementById('kot');
	var x = 0;
	var y;
	var checkpoint = 0;
	var timer = setInterval(function () {
		x += 0.5 * 100;
		y = Math.sin(x) * 100;
		if (x / 100 == 10) {
			clearInterval(timer);
		}
		e.style.left = x + 'px';
		e.style.top = y + 'px';
	}, 30);
}


function build() {

	var fun;

	for (i = 0; i <= 4; i++) {
		if (document.forms[0].elements[i].checked) {
			fun = i;
		}
	}

	var col = document.getElementById('clr').value;

	switch (fun) {
		case 1:
			foo(1, col);
			break;
		case 2:
			foo(2, col);
			break;
		case 3:
			foo(3, col);
			break;
		case 4:
			foo(4, col);
			break;
		default:
			break;
	}
}

function foo(arg, col) {
	var can = document.getElementById('graph'),
		ctx = can.getContext('2d');

	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(can.width / 2, 0);
	ctx.lineTo(can.width / 2, can.height);
	ctx.moveTo(0, can.height / 2);
	ctx.lineTo(can.width, can.height / 2);
	ctx.stroke();

	var temp;

	var x0 = can.width / 2,
		y0 = can.height / 2,
		k = can.width / 10,
		x = -10,
		st = x0 + k * x;

	switch (arg) {
		case 1:
			y = x * x;
			break;
		case 2:
			y = x * x * x;
			break;
		case 3:
			y = Math.sin(x);
			break;
		case 4:
			y = Math.cos(x);
			break;
	}
	fn = y0 - k * y;

	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(st, fn);


	while (x < 10) {
		switch (arg) {
			case 1:
				y = x * x;
				break;
			case 2:
				y = x * x * x;
				break;
			case 3:
				y = Math.sin(x);
				break;
			case 4:
				y = Math.cos(x);
				break;
		}
		ctx.strokeStyle = col;
		ctx.lineTo(x0 + k * x, y0 - k * y);
		ctx.stroke;

		ctx.beginPath();
		ctx.fillStyle = col;
		x += 0.05;
		ctx.arc(x0 + k * x, y0 - k * y, 1, 0, 2 * Math.PI, true);
		ctx.fill();

		ctx.beginPath();
		x += 0.05;
		ctx.moveTo(x0 + k * x, y0 - k * y);

	}

}


document.getElementById('nav').onmouseover = function (event) {
	var target = event.target;
	if (target.className == 'menuI') {
		var s = target.getElementsByClassName('sub-nav');
		closeNav();
		s[0].style.display = 'block';
	}
}

document.onmouseover = function (event) {
	var target = event.target;
	console.log(event.target);
	if (target.className != 'menuI' && target.className != 'sub-nav') {
		closeNav();
	}
}

function closeNav() {
	var nav = document.getElementById('nav');
	var subn = document.getElementsByClassName('sub-nav');
	for (var i = 0; i < subn.length; i++) {
		subn[i].style.display = 'none';
	}
}
