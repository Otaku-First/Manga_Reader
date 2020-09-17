var vhod = $('a[href="/index/14-0-0"] b').text();
 var vyod = $('a[href="/index/14-0-1"] b').text();
 var sumpam = parseInt(vhod)+parseInt(vyod);
 
 $('#sumpm').text(sumpam+" з 200");
 $('#vhod').text(vhod);
 $('#vyod').text(vyod);
 
$('.dpm-bar2 div').css('width', (100 / (200 / vhod)).toFixed(2)+'%');
$('.dpm-bar4 div').css('width', (100 / (200 / vyod)).toFixed(2)+'%');
$('.dpm-bar1 div').css('width', (100 / (200 / sumpam)).toFixed(2)+'%');
$('.dpm-bar5 div').css('width', (100 / (200 / $UNREAD_PM$)).toFixed(2)+'%');


$(document)
.on('click','.dpm-sidebar-menu-icon',function () {
 $('.dpm-menu-wrapper').css('display', 'block');
 
 function open() {
 $('.dpm-menu-content').css('left', '0px');
 }

setTimeout(open, 300);
 return false;
 })
 .on('click','.dpm-menu-close',function () {
 
 $('.dpm-menu-content').css('left', '-300px');
 function close() {
 $('.dpm-menu-wrapper').css('display', 'none');
 
 }

setTimeout(close, 300);
 return false;
 })
 
 .on('click','#m-new-pm,#m-new-m-r',function () {
 

$('.dpm-menu-content').css('left', '-300px');
 function close_m() {
 $('.dpm-menu-wrapper').css('display', 'none');
 
 }

setTimeout(close_m, 300);
 var isPlayerp = $(this).attr('href');
 $('#web_view').attr('src',isPlayerp);
 
 $('.dpm-dialog-loading').css('display', 'block');
 
function hidep() {
 $('.dpm-dialog-loading').css('display', 'none');
 }
setTimeout(hidep, 2000);
 

 
 

return false;
})
 
 .on('click','a[id="href"]',function () {
 
 

 var isPlayer = $(this).attr('href');
 $('#web_view').attr('src',isPlayer);
 
 $('.dpm-dialog-loading').css('display', 'block');
 
function hide() {
 $('.dpm-dialog-loading').css('display', 'none');
 }
setTimeout(hide, 2000);
 

 
 

return false;
})
 
 
 .on('click','a[title="Посмотреть сообщения"]',function () {
 
 

 var isPlayerp = $(this).attr('href');
 $('#web_view').attr('src',isPlayerp);
 
 $('.dpm-dialog-loading').css('display', 'block');
 
function hidep() {
 $('.dpm-dialog-loading').css('display', 'none');
 }
setTimeout(hidep, 2000);
 

 
 

return false;
})
 
 .on('click','a[id="href"]',function () {
 
 

 var isPlayer = $(this).attr('href');
 $('#web_view').attr('src',isPlayer);
 
 $('.dpm-dialog-loading').css('display', 'block');
 
function hide() {
 $('.dpm-dialog-loading').css('display', 'none');
 }
setTimeout(hide, 2000);
 

 
 

return false;
})
 ;