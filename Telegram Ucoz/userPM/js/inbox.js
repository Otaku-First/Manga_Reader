$(document).ready(function(){ 

var vhod = $('a[href="/index/14-0-0"] b').text(); 
var vyod = $('a[href="/index/14-0-1"] b').text(); 
var sumpam = parseInt(vhod)+parseInt(vyod); 
$('#vhod').text(vhod); $('#vyod').text(vyod); 
$('#sumpm').text(sumpam+" з 200"); 
$('.dpm-bar2 div').css('width', (100 / (200 / vhod)).toFixed(2)+'%'); 
$('.dpm-bar4 div').css('width', (100 / (200 / vyod)).toFixed(2)+'%'); 
$('.dpm-bar1 div').css('width', (100 / (200 / sumpam)).toFixed(2)+'%'); 
$('.dpm-bar5 div').css('width', (100 / (200 / $UNREAD_PM$)).toFixed(2)+'%'); 


$('.dpm-sidebar-menu-icon').click(function() { 
$('.dpm-menu-wrapper').css('display', 'block'); 
function open() { 
$('.dpm-menu-content').css('left', '0px'); 
}
setTimeout(open, 300); 
return false;}); 
$('.dpm-menu-close').click(function() { 
$('.dpm-menu-content').css('left', '-300px');
 function close() { 
 $('.dpm-menu-wrapper').css('display', 'none');}
 setTimeout(close, 300);
 return false;}); 
 var isMobile = { 
 Android: function() { 
 return navigator.userAgent.match(/Android/i);}, 
 BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i);}, 
 iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i);}, 
 Opera: function() {return navigator.userAgent.match(/Opera Mini/i);}, 
 Windows: function() {return navigator.userAgent.match(/IEMobile/i);}, 
 any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
 
 if(!isMobile.any()){ 
 $('#m-new-pm,#m-new-m-r').click(function() { 
 $('.dpm-menu-content').css('left', '-300px'); 
 function close_m() { 
 $('.dpm-menu-wrapper').css('display', 'none');} 
 setTimeout(close_m, 300); 
 var isPlayerp = $(this).attr('href'); $('#web_view').attr('src',isPlayerp); 
$('.dpm-dialog-loading').css('display', 'block'); 
function hidep() {$('.dpm-dialog-loading').css('display', 'none');} 
setTimeout(hidep, 2000);
return false; }); 

$('a[id="href"],a[title="Посмотреть сообщения"]').click(function() { 
var isPlayer = $(this).attr('href'); 
$('#web_view').attr('src',isPlayer); 
$('.dpm-dialog-loading').css('display', 'block'); 
function hidep() { $('.dpm-dialog-loading').css('display', 'none'); } 
setTimeout(hidep, 2000); return false; }); } 
$('.smena-fona-b-m .smena-fona-b i').click(function() { 
$('.smena-fona-b-m').css('display','none');return false; }); 
$('#opensm').click(function() { $('.smena-fona-b-m').css('display','block'); 
$('.dpm-menu-content').css('left', '-300px');function closemenu() { 
$('.dpm-menu-wrapper').css('display', 'none');}setTimeout(closemenu, 300);return false; });});
