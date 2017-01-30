function manipulateDOM()
{
      //var h1header=$('h1');
      //h1header.text('Why so serious?');
      var h3Headers = $('h3');
      h3Headers.text('This is jQuery');
      h3Headers.css('color', '#37887D');
      h3Headers.last().css('text-decoration', 'line-through');
      var lastH3Header = $('h3:last');
      lastH3Header.css('color','#000000');
      lastH3Header.css('background-color', '#A6654B');    
}
$(document).ready(function()
{
       manipulateDOM();
});

