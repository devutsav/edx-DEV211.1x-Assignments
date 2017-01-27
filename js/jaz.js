/*function correctMethodName()
{
	return "Output";
}
var result=correctMethodName(3);
document.writeln(result);
//alert(result);
try 
{
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error)
{
    document.writeln('An error occurred');
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
       // Action to be performed when the document is read;
    }
};
//xhttp.open("GET", "a.c", true);
//xhttp.send();
function getPositionResult(position) 
{
    console.log(position.coords.latitude + ' 'position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);*/
var canvas=document.getElementById("devil");
var context=canvas.getContext("2d");

context.lineWidth=3;
context.fills="#A9B0B3";

context.moveTo(0,0);
context.lineTo(700,350);
context.stroke();

context.beginPath();
context.arc(160,80,70,0,2*Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 345);
context.lineTo(700, 350);
context.lineTo(665, 315);
context.stroke();

context.beginPath();
context.fillStyle="#A20259";
context.font="75px Segoe UI";
context.fillText("Hello",190,230);
context.strokeText("World",250,300);
