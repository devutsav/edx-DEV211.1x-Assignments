/*function startLogic() {
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerid').innerHTML = newHtml;
}

startLogic();
function clickHandler()
{
	alert('Clicked me..just like that');
}*/
var sections = document.getElementsByTagName('section');

for (var index = 0; index < sections.length; index++) 
{
    sections[index].onclick = handleClick;
}

function handleClick (event)
{
    console.log('current element: ' + this.className + ' | target element: ' + event.target.className);

    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propogation stopped');
    }
}
/*var anonymousFunctionInAVariable = function() 
{
    alert('I am anonymous');
};
anonymousFunctionInAVariable();*/
function normalFunction(input, callbackFunction) 
{
    var newValue = input + 1;
    //callback(newValue);
    alert(newvalue);
};
normalFunction(1, function(inputViaCallback) 
{
    alert(inputViaCallback);
});
