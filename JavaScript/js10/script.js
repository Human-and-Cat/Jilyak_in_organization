$(document).ready(function () {
	$('#btn').click(function () {
		var $graph = $('#graph');

		$graph.drawPath({
			strokeStyle: '#000',
			strokeWidth: 1,
			p1: {
				type: 'line',
				x1: $graph.width()/2,
				y1: 0,
				x2: $graph.width()/2,
				y2: $graph.height()
			},
			p2: {
				type: 'line',
				x1: 0,
				y1: $graph.height()/2,
				x2: $graph.width(),
				y2: $graph.height()/2
			}
		});

		var $fun = $(":radio");
		var $funct;
		for (i = 0; i < 4; i++) {
			if ($fun[i].checked) {
				$funct = $fun[i].value;
			}
		}

		var $color = $('#clr').val();
		
		if($funct==1){
			var i=-10;
			for (var X = 162.5; X <= 362.5; X += 1) {	
				$graph.drawArc({
					fillStyle:$color,
					x: X,
					y: $graph.height()/2 - Math.pow(i, 2),
					radius:1
				});
				i+=0.1;
			};
		}
		else if($funct==2){
			var i=-10;
			for (var X = 162.5; X < 362.5; X += 1) {	
				$graph.drawArc({
					fillStyle:$color,
					x: X,
					y: $graph.height()/2 - Math.pow(i, 3),
					radius:1
				});
				i+=0.1;
			};
		}
		else if($funct==3){
			var i=-10;
			for (var X = -42; X < $graph.width(); X += 1) {	
				$graph.drawArc({
					fillStyle:$color,
					x: X,
					y:$graph.height()/2-Math.sin(i)*100,
					radius:1
				});
				i+=0.1;
			};
		}
		else if($funct==4){
			var i=-10;
			for (var X = -42; X < $graph.width(); X += 1) {	
				$graph.drawArc({
					fillStyle:$color,
					x: X,
					y:$graph.height()/2- Math.cos(i)*100,
					radius:1
				});
				i+=0.1;
			};
		};
	});
});
