$(function(){
	// menu link scroll
  var datas = document.getElementById('navi_marker').dataset;
  console.log(datas);
  var i = 0, j = 0;
  var menu = ['about', 'skills', 'activity', 'contact'];
  var offsets = [];
  var set = function(to, offset){
    $('a[href^=#' + to + ']').click(function() {
      $('html,body').animate({ scrollTop: offset }, 1000);
      return false;
    });
  }
  set('home', 0);
  for(key in datas){
    if(i++%2){
      set(menu[j++], key);
      offsets.push(key);
    }
  }

  // ハッシュで直リンク
  if(location.hash){
    var key = menu.indexOf(location.hash.replace('#', ''));
    $('html,body').animate({ scrollTop: offsets[key] }, 1000);
  }
})