 
 function smiles_comment(tx) { 
 $('#message2').val($('#message2').val()+' '+tx+' ') 
 $('#message2').keyup() 
 } 
 
 $(".fa-smile").click(function() {
 $(".dropdownSmile" ).toggleClass("dropdownSmile-active");


 });
 $(".fa-paperclip").click(function() {
 $(".butlsotpravitstrl ul" ).toggleClass("paperclip-active");
 });
 
 $(".fa-link").click(function() {
 $('.pm_modal_link').css('display','block');
 $('.pm_modal_img').css('display','none');
 $('.pm_modal_video').css('display','none');
 $('.pm_modal_audio').css('display','none');
 return false;
 
 });
 
 $(".fa-image").click(function() {
 $('.pm_modal_img').css('display','block');
 $('.pm_modal_link').css('display','none');
 $('.pm_modal_video').css('display','none');
 $('.pm_modal_audio').css('display','none');
 return false;
 
 });
 $(".fa-youtube").click(function() {
 $('.pm_modal_video').css('display','block');
 $('.pm_modal_link').css('display','none');
 $('.pm_modal_img').css('display','none');
 $('.pm_modal_audio').css('display','none');
 return false;
 
 });
 $(".fa-music").click(function() {
 $('.pm_modal_audio').css('display','block');
 $('.pm_modal_link').css('display','none');
 $('.pm_modal_video').css('display','none');
 $('.pm_modal_img').css('display','none');
 return false;
 
 });
 
 $(".pm_bb_modal_close_img").click(function() {
 $('.pm_modal_img').css('display','none');
 
 return false;
 });
 $(".pm_bb_modal_close_video").click(function() {
 $('.pm_modal_video').css('display','none');
 
 return false;
 });
 $(".pm_bb_modal_close_audio").click(function() {
 $('.pm_modal_audio').css('display','none');
 
 return false;
 });$(".pm_bb_modal_close").click(function() {
 $('.pm_modal_link').css('display','none');
 
 return false;
 });
 
 
 $('.pm_bb_modal_paste_img').click(function() { 
 var bb_href_img = $('#pm_bb_url_img').val();
 
 $('#message2').val('[img]'+bb_href_img+'[/img]');
 $('#message2').keyup(); 
 $('#pm_bb_url_img').val("");
$('.pm_modal_img').css('display','none');
 return false;
});
 $('.pm_bb_modal_paste_video').click(function() { 
 var bb_href_video = $('#pm_bb_url_video').val();
 
 $('#message2').val('[video]'+bb_href_video+'[/video]');
 $('#message2').keyup(); 
 $('#pm_bb_url_video').val("");
 
$('.pm_modal_video').css('display','none');
 return false;
});
 $('.pm_bb_modal_paste_audio').click(function() { 
 var bb_href_audio = $('#pm_bb_url_audio').val();
 
 $('#message2').val('[audio]'+bb_href_audio+'[/audio]');
 $('#message2').keyup(); 
 $('#pm_bb_url_audio').val("");
 
$('.pm_modal_audio').css('display','none');
 return false;
});
 
 $('.pm_bb_modal_paste').click(function() { 
 var bb_href = $('#pm_bb_url').val();
 var bb_href_name = $('.pm_bb_title').val();
 
 if(bb_href_name==""){
 var bb_href_name = bb_href;
 }
$('#message2').val('[url='+bb_href+']'+bb_href_name+'[/url]');
 $('#message2').keyup(); 
 $('#pm_bb_url').val("");
$('.pm_modal_link').css('display','none');
 return false;
}); 
 
 

 