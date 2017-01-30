var slideInterval=3500;
function getFigures()
{

	document.getElementById('carousel').getElementsByTagName('figure');	
}
     

function moveForward()
{
	var pointer;
	var fig = getFigures();
	for(var i=0;i<fig.length;i++)
	{
		if(fig[i].className='visible')
		{
			fig[i].className=' ';
			fig[i+1].className='visible';
			pointer=i;
		}
	}
	if(pointer==fig.length-1)
	{
		pointer=0;
	}
	//fig[pointer].className='visible';
	setTimeout(moveForward,slideInterval);
}
function startPlayBack()
{
	setTimeout(moveForward,slideInterval);
}
startPlayBack();
