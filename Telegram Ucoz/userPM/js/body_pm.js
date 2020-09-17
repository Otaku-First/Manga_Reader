 
 $('td[width="90%"]').each(function() {
 mTitle = $(this).children('b').html();
 mAuthor = $(this).children('a').text();
 mLinkAuthor = $(this).children('a').attr('href');
 $(this).html('<div class="msin_t"><div class="msin_l"><span class="r_round"><a href="'+mLinkAuthor+'" target="_blank"><span class="noava noava-'+mAuthor.substring(0,1).toUpperCase()+' lsbcavd">'+mAuthor.substring(0,1).toUpperCase()+'</span></a></span></div><div class="msin_r"><div class="m_author"><a href="'+mLinkAuthor+'" target="_blank">'+mAuthor+'</a></div><div class="m_title m_title2">'+mTitle+'</div></div></div>')
});

 $('td[colspan="2"]:eq(1)').parent('tr').attr('style','padding:20px;line-height: 22px')
 $('td[width="90%"]').css('height','60px'); 
 
 
 
function dw(elem) {if (elem.value == 'Логин пользователя') elem.value='';}
function lw(elem) {if (elem.value == '') elem.value='Логин пользователя';}


if(location.href.split('/')[4] == '14' || location.href.split('/')[4] == '14-0-0' || location.href.split('/')[4] == '14-0-1'){

$('.pmCatLink').parent().html( $('.pmCatLink').parent().html().split('[ ').join('').split(' ]').join('').split(' | ').join('').split('(').join(' ').split(')').join('').split('ые').join('ых') );
$('.pmCatLink:contains("Отправить ЛС")').text('Отправить сообщение');
 
 
 
 
$('.pmCatLink').parent().addClass('oloTab').next('hr').remove();
$('form[name="fuser"]').prev('hr').remove();
 
$(function () {
$("tr[id^='ent']").each(function() { 

if($(this).find('a:first b').length==1) {
$(this).css('background','#EDF0F5'); $(this).hover(function(){$(this).css('background','#EDF0F5');},function(){$(this).css('background','#EDF0F5');});
$(this).find('td:eq(0)').css({'border-bottom':'1px solid #ccc' , 'width':'40px'}).html('');
} 

else {
$(this).css('background','#fff');
$(this).find('td:eq(0)').css({'border-bottom':'1px solid #ccc' , 'width':'40px'}).html('');
} 
 
 
 
 
 

var DataTimewaakRu = $(this).find('td:eq(2)').text();
var temawaakRu = $(this).find('td:eq(1)');
var namewaakRu = [$(temawaakRu).find('a:eq(1)').attr('href'),$(temawaakRu).find('a:eq(1)').text()];


 
 $(this).find('td:eq(1)').css({'border-top':'none !important'}).html(' <a href="'+$(temawaakRu).find('a:first').attr('href')+'" title="Посмотреть сообщения" target="_blank"><div class="lsav'+namewaakRu[1]+' lsbcav"></div></a><div style="position: relative; margin:10px;"><a href="'+$(temawaakRu).find('a:first').attr('href')+'" id="href" class="avvvv'+namewaakRu[1]+' userlsnamss">'+namewaakRu[1]+'</a><br> <a href="'+$(temawaakRu).find('a:first').attr('href')+'" id="href">'+$(temawaakRu).find('a:first').text()+'</a> <span class="color_txt">'+DataTimewaakRu+'</span></div>');
$(this).find('td:eq(2)').hide();

 
$('.lsav'+namewaakRu[1]+'').each( 
 function(){ 
 var name = $('a.avvvv'+namewaakRu[1]+'').text(), 
 str = name.replace(/[^0-9-A-Za-zА-Яа-яЁё]/g, ''), 
 i = str.substr(0,1); 
 $(this).html('<span class="noava noava-' + i + ' lsbcavd">' + i + '</span>'); 
 } 
 ); 


$(this).find('td:eq(3)').css({'background' : '#f7f7f7' , 'border-top':'none !important', 'border-right':'none !important'}).attr({width: '2%', align: 'center'}).find('a').css({'margin-right' : '5px','margin-left' : '5px'}); });
$("img[src='/.s/img/fr/OmnD.gif']").removeAttr("onmouseout").removeAttr("onmouseover").attr({"src":"/trash.png", "cellspacing":"0","width":"12","height":"12"});
});


if ($('td:contains("Сообщений нет")').text()) {} else {$('.oloTab:last').append('<span class="udalitVsewaakRu" style="text-align:right; cursor: pointer" target="_blank" title="Удалить все сообщения"><i class="fa fa-trash" aria-hidden="true"></i></span>');}
if ($('td:contains("Сообщений нет")').text()) {$('td[align="center"]:contains("Сообщений нет")').hide().after('<div class="none_ls_str">НЕТ СООБЩЕНИЙ</div>');}



$(".udalitVsewaakRu").click(function(){
 $('input[title="Выбрать все"]').click();
 $('input[title="Выбрать все"]').click(); 
 $('input[id="dpms"]').click();
});

 
 
 

 $('input[id="dpms"]').parent().hide();
 $('input[title="Выбрать все"]').attr('checked', 'checked');
}








if(location.href == ''+window.location.protocol+'//'+document.domain+'/index/14-'+location.href.split('/')[4].split('-')[1]+'-0-1'){

$('.pmCatLink').parent().html( $('.pmCatLink').parent().html().split('[ ').join('').split(' ]').join('').split(' | ').join('').split('(').join(' ').split(')').join('').split('ые').join('ых') );
$('.pmCatLink:contains("Отправить ЛС")').text('Отправить сообщение');
$('.pmCatLink').parent().addClass('oloTab').next('hr').remove();
$('form[name="fuser"]').prev('hr').remove();
 


$(".smiles").parent('td').hide(); 
$('input[title="Bold"]').parent('span').parent('div').hide(); 
$("#pmSubject, #PMtoUser").parent('td').parent('tr').hide(); 
$('td:eq(2)').hide(); 
$(".captcha-block").parent('td').parent('tr').hide();
 

var kodBezopwaak = $(".captcha-block").parent('td').parent('tr').html(); 

 $("#message").before('<div style="position:relative;"><div class="inftemalsstr">Получатель<input type="text" id="LStoUser"> <div>Тема</div><input type="text" id="lsSubject" autofocus> </div> <div class="formlsstr"><div id="infoOdobavleniiKommentawaakRu"></div><div class="codbckap">'+kodBezopwaak+'</div> <textarea id="message2"></textarea><div class="butlsotpravitstrl"><ul><li><i class="far fa-image"></i></li><li><i class="fab fa-youtube"></i></li><li><i class="fas fa-music"></i></li></ul><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-paperclip fa-2x" style="transform: rotate(-34deg);"></i></a></div><div class="butlsotpravitstr"><div class="dropdownSmile"><div class="dropSml"><div class="smiles_content"><img src="/smiles/smile.gif" alt=""> <img src="/smiles/wink.gif"   alt=""><img src="/smiles/laugh.gif"  alt=""> <img src="/smiles/cool.gif"   alt=""> <img src="/smiles/sad.gif"    alt=""> <img src="/smiles/cry.gif"    alt=""> <img src="/smiles/care.gif"  alt=""> <img src="/smiles/tease.gif"  alt=""> <img src="/smiles/shock.gif"  alt=""> <img src="/smiles/angel.gif" alt=""> <img src="h/smiles/eye.gif"  alt=""> <img src="/smiles/fools.gif"  alt=""> <img src="/smiles/please.gif"  alt=""> <img src="/smiles/desman.gif"  alt=""> <img src="/smiles/xd.gif"  alt=""> <img src="/smiles/like.gif"  alt=""> <img src="/smiles/unlike.gif"  alt=""> <img src="/smiles/ok.gif"  alt=""> <img src="/smiles/peace.gif"  alt=""> <img src="/smiles/clups.gif"  alt=""></div> </div></div><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-smile fa-2x" style="transform: rotate(2deg);"></i></a><a  class="buttonwaakRu"><i aria-hidden="true"  class="far fa-link fa-2x" style="transform: rotate(-12deg);"></i></a> <a href="javascript://" onclick="$(\'#sbm\').click();" class="buttonwaakRu"><i aria-hidden="true" class="fab fa-telegram-plane fa-2x" style="transform: rotate(45deg);"></i></a></div></div>');
var polushatelTemawaakRu = ['#LStoUser', '#PMtoUser', '#lsSubject', '#pmSubject', '#message', '#message2' ]; 
$(polushatelTemawaakRu[0]).keyup(function () { $(polushatelTemawaakRu[1]).val($(polushatelTemawaakRu[0]).val()); }); 
$(polushatelTemawaakRu[2]).keyup(function () { $(polushatelTemawaakRu[3]).val($(polushatelTemawaakRu[2]).val()); }); 
$(polushatelTemawaakRu[5]).keyup(function () { $(polushatelTemawaakRu[4]).val($(polushatelTemawaakRu[5]).val()); }); 


$('.pmCatLink:contains("Отправить сообщение")').css('background','#F9DDCE');
$('.pmCatLinkActive').css('background','none');

$('#message, #sbm, input[value="Просмотреть"], input[value="Отменить"], #eMessage').hide();


var PMtoUser = $('#PMtoUser').val();
$('#LStoUser').val(PMtoUser);

}






function kommentiwaakRu() {
eMessage = $('#eMessage').text();
if(eMessage.indexOf('Сообщение успешно отправлено') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#64992b; color:#fff; font-size:12px; text-align:center; padding:5px;">Сообщение успешно отправлено</div>');}
if(eMessage.indexOf('Пользователь в базе не найден') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Пользователь в базе не найден</div>');}
if(eMessage.indexOf('Тема сообщения указана неправильно') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Тема сообщения указана неправильно</div>');}
if(eMessage.indexOf('Не указан текст сообщения') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Не указан текст сообщения</div>');}
if(eMessage.indexOf('Неправильный код безопасности') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Неправильный код безопасности</div>');}
if(eMessage.indexOf('Для вашего аккаунта любая активность временно заблокирована') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Для вашего аккаунта любая активность временно заблокирована</div>');}
if(eMessage.indexOf('Не выбрана ни одна из групп пользователей для массовой рассылки.') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#e74c3c; color:#fff; font-size:12px; text-align:center; padding:5px;">Не выбрана ни одна из групп пользователей для массовой рассылки.</div>');}
if(eMessage.indexOf('Массовая рассылка успешно выполнена.') != -1) {$('#infoOdobavleniiKommentawaakRu').html('<div style="background:#64992b; color:#fff; font-size:12px; text-align:center; padding:5px;">Массовая рассылка успешно выполнена.</div>');}
}
setInterval(kommentiwaakRu, 2000);

if(location.href.split('/')[4].split('-')[1] != 0) { 


$('.pmCatLink').parent().html( $('.pmCatLink').parent().html().split('[ ').join('').split(' ]').join('').split(' | ').join('').split('(').join(' ').split(')').join('').split('ые').join('ых') );
$('.pmCatLink:contains("Отправить ЛС")').text('Отправить сообщение');
$('.pmCatLink').parent().addClass('oloTab').next('hr').remove();
$('form[name="fuser"]').prev('hr').remove();

}











if(location.href.split('/')[4] == '14-0-5'){

$('.pmCatLink').parent().html( $('.pmCatLink').parent().html().split('[ ').join('').split(' ]').join('').split(' | ').join('').split('(').join(' ').split(')').join('').split('ые').join('ых') );
$('.pmCatLink:contains("Отправить ЛС")').text('Отправить сообщение');
$('.pmCatLink').parent().addClass('oloTab').next('hr').remove();
$('form[name="fuser"]').prev('hr').remove();


$(".smiles").parent('td').hide(); 
$('input[title="Bold"]').parent('span').parent('div').hide(); 
$("#pmSubject").parent('td').parent('tr').hide(); 

$('form[id="addform"] table tbody tr:eq(1) td:eq(0)').hide(); 
$('form[id="addform"] table tbody tr:eq(1) td:eq(1)').hide(); 
$('form[id="addform"] table tbody tr:eq(0) td:eq(0)').hide(); 
var poluchateliwaak = $('form[id="addform"] table tbody tr:eq(1) td:eq(1)').html(); 


var kodBezopwaak = $('td[colspan="2"]:eq(2)').html(); 

 $("#message").before('<div style="position:relative;"><div class="inftemalsstr" style="width: 370px;">Получатели <div class="strlspolgrupp">'+poluchateliwaak+'</div><div>Тема</div><br><input type="text" id="lsSubject" autofocus> </div> <div class="formlsstr"><div id="infoOdobavleniiKommentawaakRu"></div><div class="codbckap">'+kodBezopwaak+'</div> <textarea id="message2"></textarea> <div class="butlsotpravitstrl"><ul><li><i class="far fa-image"></i></li><li><i class="fab fa-youtube"></i></li><li><i class="fas fa-music"></i></li></ul><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-paperclip fa-2x" style="transform: rotate(-34deg);"></i></a></div><div class="butlsotpravitstr"><div class="dropdownSmile"><div class="dropSml"><div class="smiles_content"><img src="/smiles/smile.gif" alt=""> <img src="/smiles/wink.gif"   alt=""><img src="/smiles/laugh.gif"  alt=""> <img src="/smiles/cool.gif"   alt=""> <img src="/smiles/sad.gif"    alt=""> <img src="/smiles/cry.gif"    alt=""> <img src="/smiles/care.gif"  alt=""> <img src="/smiles/tease.gif"  alt=""> <img src="/smiles/shock.gif"  alt=""> <img src="/smiles/angel.gif" alt=""> <img src="/smiles/eye.gif"  alt=""> <img src="/smiles/fools.gif"  alt=""> <img src="/smiles/please.gif"  alt=""> <img src="/smiles/desman.gif"  alt=""> <img src="/smiles/xd.gif"  alt=""> <img src="/smiles/like.gif"  alt=""> <img src="/smiles/unlike.gif"  alt=""> <img src="/smiles/ok.gif"  alt=""> <img src="/smiles/peace.gif"  alt=""> <img src="/smiles/clups.gif"  alt=""></div> </div></div><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-smile fa-2x" style="transform: rotate(2deg);"></i></a><a  class="buttonwaakRu"><i aria-hidden="true"  class="far fa-link fa-2x" style="transform: rotate(-12deg);"></i></a> <a href="javascript://" onclick="$(\'#sbm\').click();" class="buttonwaakRu"><i aria-hidden="true" class="fab fa-telegram-plane fa-2x" style="transform: rotate(45deg);"></i></a></div></div>');
var polushatelTemawaakRu = ['#lsSubject', '#pmSubject', '#message', '#message2' ]; 
$(polushatelTemawaakRu[0]).keyup(function () { $(polushatelTemawaakRu[1]).val($(polushatelTemawaakRu[0]).val()); }); 
$(polushatelTemawaakRu[3]).keyup(function () { $(polushatelTemawaakRu[2]).val($(polushatelTemawaakRu[3]).val()); }); 
$('.strlspolgrupp label').after("<br>"); 

$('#message, #sbm, input[value="Просмотреть"], input[value="Отменить"], #eMessage').hide();
}






if(location.href == ''+window.location.protocol+'//'+document.domain+'/index/14-'+location.href.split('/')[4].split('-')[1]+'-0'){


$(".smiles").parent('td').hide(); 
$('input[title="Bold"]').parent('span').parent('div').hide(); 
$('input[name="subject"]').parent('td').parent('tr').hide(); 
$('a[onclick="new_message(1);return false;"]').click(); 
$('td[colspan="2"]:eq(4)').hide(); 
$('td[colspan="2"]:eq(0)').hide(); 
$('#message, #sbm, input[value="Просмотреть"], input[value="Отменить"], #eMessage').hide();



var userNapicalwaakRu = $('table[width="100%"] tbody tr td[width="90%"] a').text(); 
var temaNapicanawaakRu = $('input[name="subject"]').attr("value"); 
var timewaakRu = $('table[width="100%"] tbody tr td[align="right"]').text(); 
var kodBezopwaak = $('td[colspan="2"]:eq(4)').html(); 
var userwaakRu = $('#PMtoUser').attr("value"); 

$("#message").before('<div class="formlsstr"><div id="infoOdobavleniiKommentawaakRu"></div><div class="codbckap">'+kodBezopwaak+'</div> <textarea data="elastic" id="message2" autofocus></textarea><div class="butlsotpravitstrl"><ul><li><i class="far fa-image"></i></li><li><i class="fab fa-youtube"></i></li><li><i class="fas fa-music"></i></li></ul><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-paperclip fa-2x" style="transform: rotate(-34deg);"></i></a></div><div class="butlsotpravitstr"><div class="dropdownSmile"><div class="dropSml"><div class="smiles_content"><img src="/smiles/smile.gif" alt=""> <img src="/smiles/wink.gif"   alt=""><img src="/smiles/laugh.gif"  alt=""> <img src="h/smiles/cool.gif"   alt=""> <img src="/smiles/sad.gif"    alt=""> <img src="/smiles/cry.gif"    alt=""> <img src="/smiles/care.gif"  alt=""> <img src="/smiles/tease.gif"  alt=""> <img src="/smiles/shock.gif"  alt=""> <img src="/smiles/angel.gif" alt=""> <img src="/smiles/eye.gif"  alt=""> <img src="/smiles/fools.gif"  alt=""> <img src="/smiles/please.gif"  alt=""> <img src="/smiles/desman.gif"  alt=""> <img src="/smiles/xd.gif"  alt=""> <img src="/smiles/like.gif"  alt=""> <img src="/smiles/unlike.gif"  alt=""> <img src="/smiles/ok.gif"  alt=""> <img src="/smiles/peace.gif"  alt=""> <img src="/smiles/clups.gif"  alt=""></div> </div></div><a class="buttonwaakRu"><i aria-hidden="true" class="fal fa-smile fa-2x" style="transform: rotate(2deg);"></i></a><a  class="buttonwaakRu"><i aria-hidden="true"  class="far fa-link fa-2x" style="transform: rotate(-12deg);"></i></a> <a href="javascript://" onclick="$(\'#sbm\').click();" class="buttonwaakRu"><i aria-hidden="true" class="fab fa-telegram-plane fa-2x" style="transform: rotate(45deg);"></i></a></div></div>');
var polushatelTemawaakRu = ['#lsSubject', 'input[name="subject"]', '#message', '#message2']; 
$(polushatelTemawaakRu[0]).keyup(function () { $(polushatelTemawaakRu[1]).val($(polushatelTemawaakRu[0]).val()); $(polushatelTemawaakRu[4]).val($(polushatelTemawaakRu[0]).val()); }); 
$(polushatelTemawaakRu[3]).keyup(function () { $(polushatelTemawaakRu[2]).val($(polushatelTemawaakRu[3]).val()); }); 



$('#message2').keyup(function() { 
 $('#message').val($(this).val()) 
 }); 


$('td[colspan="2"]:eq(1)').css({"padding":"0px 0px 150px","overflow":"hidden;","line-height":"22px","max-width":"330px","min-height":"calc(101vh - 110px)","display":"block"})
$('td[colspan="2"]:eq(1)').prepend('');
$('table').css({"background":"#EFF4FA"});







$(function () {

 if(location.href.split('/')[4].split('-')[1] != 0) {
$('span[id^="dg"]').remove(); if($('td[colspan="2"]:eq(1)').html()) {$('td[colspan="2"]:eq(1)').html($('td[colspan="2"]:eq(1)').html().replace(/\[/g,'').replace(/\]/g,''));}
 $('.outputPM, .inputPM').removeAttr('style').show(); 
 }
})


$(document).ready(function() {
var wScrollTop = $('div[id^="pm"]:last').offset().top;
$('html,body').animate({scrollTop:wScrollTop},0);
});

 
 
}


