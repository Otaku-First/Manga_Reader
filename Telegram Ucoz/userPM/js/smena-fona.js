﻿var dmn= window.location.hostname;
$(document).ready(function() { 
$('#bgs').change(function(){ 
$('#bg').val($("select#bgs").val()); 
}); 
$('#str').change(function(){ 
if($("#str").is(':checked')){ 
setCookie("stretched", null, { expires: -1, path:"/", domain:dmn} ); 
$('body').removeClass('bg').addClass('bg_temp'); 
setCookie("stretched", "yes", { expires: 999999999999999, path:"/", domain:dmn} ); 
}else if($("#str").is(':not(:checked)')){ 
setCookie("stretched", null, { expires: -1, path:"/", domain:dmn} ); 
$('body').removeClass('bg_temp').addClass('bg'); 
setCookie("stretched", "no", { expires: 999999999999999, path:"/", domain:dmn} ); 
} 
}); 


var bg=document.getElementById('background') 
var backgr=getCookie("background") 
if(backgr){bg.innerHTML="<input id='bg' class='background-input' placeholder='Ваша прямая ссылка на фон' size='35' onkeyup='imgpast()' onclick='select()' value="+backgr+"></input>";

$("#bg").keyup(function() { 
 var getburl = document.getElementById('bg').value;
 document.getElementById('past_img').innerHTML = '<img class="fon-img" src="'+getburl+'">';
 });


      
$('.fon-img').attr("src", backgr);



} 
else if(!backgr){ 
bg.innerHTML="<input id='bg' class='background-input' placeholder='Ваша прямая ссылка на фон' size='35' onkeyup='imgpast()' onclick='select()'></input>"; 
$("#bg").keyup(function() { 
 var getburl = document.getElementById('bg').value;
 document.getElementById('past_img').innerHTML = '<img class="fon-img" src="'+getburl+'">';
 });
$('.fon-img').attr("src",backgr);
 
} 
if(backgr){$('#bgs :nth-child(2)').attr("value",backgr);$('#bgs :nth-child(2)').removeAttr("disabled");} 
}); 
function deletebg(){ 
if(!getCookie("background")){alert("У вас нет установленного фона, удалять нечего")}else{ 
setCookie("background", null, { expires: -1, path:"/", domain:dmn} ) 
alert("Фон выставлен по умолчанию"); 
$('.smena-fona-b-m').css('display', 'none')} 
} 
function bgchange(){ 
if(bg.value!=''){var bg_link=bg.value 
if(!bg_link.match(/http[^\s\"]+[^\" >]*?/ig)){alert("Вы ввели неверную ссылку на фон")} 
else{ 
setCookie("background", bg_link, { expires: 999999999, path:"/", domain:dmn} ) 
alert("Новый фон установлен") 
  $('.smena-fona-b-m').css('display', 'none')
} 
} else {alert("Вы не ввели ссылку на фон")} 
}

function getCookie(name) { 
var matches = document.cookie.match(new RegExp( 
"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" 
)) 
return matches ? decodeURIComponent(matches[1]) : undefined 
} 
function setCookie(name, value, props) { 
props = props || {} 
var exp = props.expires 
if (typeof exp == "number" && exp) { 
var d = new Date() 
d.setTime(d.getTime() + exp*1000) 
exp = props.expires = d 
} 
if(exp && exp.toUTCString) { props.expires = exp.toUTCString() } 
value = encodeURIComponent(value) 
var updatedCookie = name + "=" + value 
for(var propName in props){ 
updatedCookie += "; " + propName 
var propValue = props[propName] 
if(propValue !== true){ updatedCookie += "=" + propValue } 
} 
document.cookie = updatedCookie 
} 
var bg_li=getCookie("background") 

if(window.location.href==''+window.location.protocol+'//'+document.domain+'/index/14-0-0'|| window.location.href==''+window.location.protocol+'//'+document.domain+'/index/14-0-1'){
}else{
if(bg_li){$('table[width="100%"]').append('<style>body table[width="100%"]{background-image:url('+bg_li+') !important;background-repeat: no-repeat !important;background-size: 100% 100% !important;height: 100% !important;}.inputPM, .outputPM{box-shadow: #090909 0px 0px 3px !important;}tbody {background: #00000054 !important;}.inftemalsstr, .strlspolgrupp label {color: #e9e9e9 !important;}</style>');}else{

$('table[width="100%"]').append('<style>body #addform>table>tbody:first-child{background: none !important;}</style>');

}
}
if(getCookie("stretched")=="yes"){$('#str').attr('checked','true');$('body').removeClass('bg').addClass('bg_temp');} else if(getCookie("stretched")=="no" || !getCookie("stretched")){$('#str').removeAttr('checked');$('body').removeClass('bg_temp').addClass('bg');}
document.body.style.padding = '0';
document.body.style.margin = '0';
