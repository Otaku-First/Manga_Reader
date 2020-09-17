var urlconfrim = $('#for_urlconfrim').text(); 
 
 
 var urlconfrimo = urlconfrim;
 var urlconfrimor = urlconfrimo.slice(-1);


function setDynCSS(url) { 
if (!arguments.length) { 
url = (url = document.cookie.match(/\bdyncss=([^;]*)/)) && url[1]; 
 if(url=="/userPM/css/userpmInbox-dark.css"){

if(urlconfrimor=='1'){
 $("body").append('<style>tr[style="padding:20px;line-height: 22px"] td[colspan="2"] {background: #2b5278 !important;padding: 10px 20px;margin-bottom: 20px;color: #f5f5f5 !important;border-radius: 20px 0px 20px 20px;overflow: hidden;box-shadow: #464646ad 0px 0px 3px;min-width: 320px;}</style>');
 }
 }else{
if(urlconfrimor=='1'){
 $("body").append('<style>tr[style="padding:20px;line-height: 22px"] td[colspan="2"] {background: #eaffcc;padding: 10px 20px;margin-bottom: 20px;color: #333;border-radius: 20px 0px 20px 20px;overflow: hidden;box-shadow: #464646ad 0px 0px 3px;min-width: 320px;}</style>');
 }
}

} 

} 
setDynCSS(); 

 