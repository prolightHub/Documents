function main()
{
    draw = function()
    {
    	background(0, 200, 0);
    	doMessage();
    };
}

// We can use this to combine multiple functions
createProcessing(message, main);
