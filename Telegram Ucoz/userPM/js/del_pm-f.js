$('tbody tr').bind("contextmenu", function() { 

var delatribute = $(this).find('td[style="background: rgb(247, 247, 247) none repeat scroll 0% 0%;"] a').attr('onclick');

    $("ul.contextMenu").html('<li><a href="javascript://" onclick="'+delatribute+'"><i class="far fa-trash-alt"></i> Удалить</a></li> '); 
	$('ul.contextMenu li a').click(function() { $("ul.contextMenu").css('display','none').fadeOut("fast"); }); event.preventDefault(); 
	$("ul.contextMenu") .show() .css({top: event.pageY + 15, left: event.pageX + 10}); });
     $(document).click(function() { isHovered = $("ul.contextMenu").is(":hover"); if (isHovered == false){ $("ul.contextMenu").fadeOut("fast"); } });