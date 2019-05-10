function main()
{
    var keys = [];
    keyPressed = function()
    {
    	keys[key.toString()] = true;
    };
    keyReleased = function()
    {
    	delete keys[key.toString()];
    };

	function createPoints(points, scalar)
	{
		var points2 = [];

		// var tempPoint = points[0];
		points2.push(points[0]);

		// var point, point2;
		for (var i = 0; i < points.length; i++) 
		{
			// point = points[i];
			// point2 = points[i - 1];

			// var a = 0/*atan2(point2.y - point.y, point2.x - point.x)*/ + angle;

			// points2.push({
				// x: point.x + cos(a) * length,
				// y: point.y + sin(a) * length
			// });

			var fPoint = points2[points2.length - 1];

			var tempPoint = {};
			tempPoint.x = fPoint.x - (fPoint.x - points[i].x) * 0.4;
			tempPoint.y = fPoint.y - (fPoint.y - points[i].y) * 0.4;

			// console.log(points2);

			// tempPoint.x += 40;
			// tempPoint.y += 40;

			points2.push(tempPoint);
		}

		points2.shift();
		console.log(points2);

		return points2;
	}

   	var points = [];
   	var newPoints = [];

    draw = function()
    {
    	size(800, 480);
    	background(255, 255, 255)

    	drawPoints(points);
    	drawPoints(newPoints);

    	if(keys[" "])
    	{
    		newPoints = createPoints(points, 3);
    	}
    };

    mousePressed = function()
    {
    	points.push({
    		x: mouseX,
    		y: mouseY
    	});
    };

	function drawPoints(points)
	{
		stroke(175, 175, 175);
		strokeWeight(3);

		for(var i = 1; i < points.length; i++)
		{
			line(points[i].x, points[i].y, points[i - 1].x, points[i - 1].y);
		}
	}    
}

// We can use this to combine multiple functions
createProcessing(message, main);
