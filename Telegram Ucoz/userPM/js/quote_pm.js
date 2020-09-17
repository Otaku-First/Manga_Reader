$(document).ready(function(){
$('.outputPM,.inputPM').bind("contextmenu", function(event) { 
 var quote = $(this).text();
$("ul.contextMenu").html('<li><a href="#"><i class="fas fa-quote-right"></i> Цитировать</a></li> '); 
$('ul.contextMenu li a').click(function() { 
$('#message2').val('[quote]'+quote+'[/quote]');
 $('#message2').keyup(); 
 $("ul.contextMenu").css('display','none').fadeOut("fast"); 
 return false;
}); 
event.preventDefault(); 
 $("ul.contextMenu") 
 .show() 
 .css({top: event.pageY + 15, left: event.pageX + 10}); 
 
 }); 
 $(document).click(function() { 
 isHovered = $("ul.contextMenu").is(":hover"); 
 if (isHovered == false){ 
 $("ul.contextMenu").fadeOut("fast"); 
 } 
}); 
 }); 