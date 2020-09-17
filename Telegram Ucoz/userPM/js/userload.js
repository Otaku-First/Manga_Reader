 var search = {
 run:function (inp, offset) {
 
 var linker = $('#for_userload').text();
 var linkertxt = linker.replace('/index/', '');
 if(inp.split('/')[inp.split('/').length-1] == linkertxt) {
 $('#LStoUser').blur(); $('#LStoUser').after('<div id="search_cont" style="width:309px;display:none"></div>').css({'widh':$('#LStoUser').width()+offset});
 }
 },
focus:function () {
if(!$('#search_cont').is(':visible')) { $('#search_cont').html('Введите никнейм пользователя').fadeIn(300); }
},
blur: function () {
if($('#search_cont').is(':visible') && $('#search_cont').text().indexOf('Введите никнейм пользователя') != -1) { $('#search_cont').fadeOut(300); }
},
start: function () {
if($('#LStoUser').val() != '') {
$.post('/index/', { 
 a: 15, 
 user: $('#LStoUser').val()
},function (ress) {
 if (parseInt($('#num_results', ress).text()) > 0) {
 $('#search_cont').html('');
 $('.uTable tr', ress).each(function(a, obj){
 var avatar = $('.uTd:eq(1)', obj).find('img').attr('src'); var avachka = avatar ? avatar : 'https://otaku-first.online/dleimages/noavatar.png';
 var group = $('.uTd:eq(3)',obj).text(); var user = $('.uTd > a[title!="Отправить Личное Сообщение"]', obj).html();
 if(user != null && group != null) { $('#search_cont').append('<div id="results_bg_users" onclick="$(\'#LStoUser\').val(\''+user+'\');$(\'#search_cont\').fadeOut(300)"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class="search-user-np"><td class="search_ava" width="15%"><img src="'+avachka+'" width="40" height="40" /></td><td class="search-user-np-txt-c" width="85%" style="padding:2px"><div class="search_login">'+user+'</div><div class="search_group">'+group+'</div></td></tr></tbody></table></div>')
 }
 });
 } else {$('#search_cont').html('<span onclick="$(\'#search_cont\').fadeOut(300)">К сожалению, по вашему запросу не найдено ни одного пользователя</span>')}
})}},
}