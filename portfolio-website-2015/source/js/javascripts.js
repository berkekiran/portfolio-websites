function down_button_clicked(){
  /*menutodown*/
  var menu = document.getElementsByClassName('menu');
  menu[0].style.transform="translateY(-52%)"; 
  menu[0].style.top="50%";
  /*chrometodown*/
  var forhoverchrome = document.getElementById("forhoverchrome");
  forhoverchrome.style.top="50%";
  /*addtodown*/
  var add = document.getElementsByClassName('add');
  add[0].style.top="50%";
  /*downbuttonchangetoupbutton*/
  var down_button_toup = document.getElementById("down_button");
  down_button_toup.style.visibility = "hidden";
  var down_button_toup = document.getElementById("down_button_toup");
  down_button_toup.style.visibility = "visible";
  /*smalllogotoinvisibleposition*/
  var smalllogo = document.getElementById("small_logo");
  smalllogo.style.marginLeft="-85px";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a><span style="opacity=0.5;"> . </span>2015-2016 All Rights Reserved .    ';
  /*commentandlikeanupbuttontoinvisibleposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-195px"; 
  /*aboutmeandclosebuttonunvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');
  aboutme[0].style.left="-2000px";
  aboutme[0].style.transform = "translateX(0)";
  aboutme[0].style.visibility="hidden";
  /*contactmandclosebuttonunvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="-350px";
  contactm[0].style.transform = "translateX(0)";
  /*slider_n,p-unvisibleposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="-100px";
  slider_p.style.left="-100px";
  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="-50px"; 
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="-600px"; 
}
function down_button_toup_clicked(){
  /*menutoup*/
  var menu = document.getElementsByClassName('menu');
  menu[0].style.transform="translateY(0)";
  menu[0].style.top="-305px";
  /*chrometoup*/
  var forhoverchrome = document.getElementById("forhoverchrome");
  forhoverchrome.style.top="-100px";
  /*upbuttonchangetodownbutton*/
  var down_button_toup = document.getElementById("down_button_toup");
  down_button_toup.style.visibility = "hidden";
  var down_button_toup = document.getElementById("down_button");
  down_button_toup.style.visibility = "visible";
  /*smalllogotonormalposition*/
  var smalllogo = document.getElementById("small_logo");
  smalllogo.style.marginLeft="20px";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a>&emsp;&emsp;&emsp;&emsp;&nbsp;2015-2016 All Rights Reserved .    ';
  /*commentandlikeanupbuttontonormalposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-164px"; 
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "visible";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "hidden";
  /*slider_n,p-normalposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="35px";
  slider_p.style.left="35px";
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="0"; 
    /*addtoup*/
  var add = document.getElementsByClassName('add');
  add[0].style.top="-300px";
  }
function commentandlike_upbutton_clicked(){
  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="0"; 
  /*ctomiddleposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="50%";
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "hidden";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "visible";
  /*aboutmeandclosebuttonunvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');
  aboutme[0].style.left="-2000px";
  aboutme[0].style.transform = "translateX(0)";
  aboutme[0].style.visibility="hidden";
  /*contactmandclosebuttonunvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="-350px";
  contactm[0].style.transform = "translateX(0)";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a><span style="opacity=0.5;"> . </span>2015-2016 All Rights Reserved .    ';
  /*slider_n,p-normalposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="35px";
  slider_p.style.left="35px";
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
      /*opentoclose*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebuttonq.style.visibility = "hidden";
  }
function commentandlike_upbutton_fordown_doubleclicked(){
  /*commentandlikeanupbuttontooldposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-164px";
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "visible";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "hidden";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a>&emsp;&emsp;&emsp;&emsp;&nbsp;2015-2016 All Rights Reserved .    ';
}
function aboutmeandclosebutton_clicked(){
	  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="0"; 
  /*menutoup*/
  var menu = document.getElementsByClassName('menu');
  menu[0].style.transform="translateY(0)";
  menu[0].style.top="-305px";
  /*chrometoup*/
  var forhoverchrome = document.getElementById("forhoverchrome");
  forhoverchrome.style.top="-100px";
    /*addtoup*/
  var add = document.getElementsByClassName('add');
  add[0].style.top="-300px";
  /*upbuttonchangetodownbutton*/
  var down_button_toup = document.getElementById("down_button_toup");
  down_button_toup.style.visibility = "hidden";
  var down_button_toup = document.getElementById("down_button");
  down_button_toup.style.visibility = "visible";
  /*smalllogotonormalposition*/
  var smalllogo = document.getElementById("small_logo");
  smalllogo.style.marginLeft="20px";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a>&emsp;&emsp;&emsp;&emsp;&nbsp;2015-2016 All Rights Reserved .    ';
  /*commentandlikeanupbuttontonormalposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-164px"; 
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "visible";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "hidden";
  /*aboutmeandclosebuttonvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');
  aboutme[0].style.left="50%";
  aboutme[0].style.transform = "translateX(-50%)";  
  aboutme[0].style.visibility="visible";
  /*contactmandclosebuttonunvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="-350px";
  contactm[0].style.transform = "translateX(0)";
    /*slider_n,p-normalposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="35px";
  slider_p.style.left="35px";
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
      /*opentoclose*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebuttonq.style.visibility = "hidden";
}
function contactmandclosebutton_clicked(){
	  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="0"; 
  /*menutoup*/
  var menu = document.getElementsByClassName('menu');
  menu[0].style.transform="translateY(0)";
  menu[0].style.top="-305px";
      /*addtoup*/
  var add = document.getElementsByClassName('add');
  add[0].style.top="-300px";
  /*chrometoup*/
  var forhoverchrome = document.getElementById("forhoverchrome");
  forhoverchrome.style.top="-100px";
  /*upbuttonchangetodownbutton*/
  var down_button_toup = document.getElementById("down_button_toup");
  down_button_toup.style.visibility = "hidden";
  var down_button_toup = document.getElementById("down_button");
  down_button_toup.style.visibility = "visible";
  /*smalllogotonormalposition*/
  var smalllogo = document.getElementById("small_logo");
  smalllogo.style.marginLeft="20px";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a>&emsp;&emsp;&emsp;&emsp;&nbsp;2015-2016 All Rights Reserved .    ';
  /*commentandlikeanupbuttontonormalposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-164px"; 
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "visible";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "hidden";
  /*contactmandclosebuttonvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="50%";
  contactm[0].style.transform = "translateX(-50%)";
  /*aboutmeandclosebuttonunvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');  
  aboutme[0].style.visibility="hidden";
  aboutme[0].style.left="-2000px";
  aboutme[0].style.transform = "translateX(0)";
  /*slider_n,p-normalposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="35px";
  slider_p.style.left="35px";
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
      /*opentoclose*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebuttonq.style.visibility = "hidden";
}
function home_button_clicked(){
  /*socialmediatonormalposition*/
  var socialmedia = document.getElementsByClassName('socialmedia');
  socialmedia[0].style.bottom="0"; 
  /*menutoup*/
  var menu = document.getElementsByClassName('menu');
  menu[0].style.transform="translateY(0)";
  menu[0].style.top="-305px";
      /*addtoup*/
  var add = document.getElementsByClassName('add');
  add[0].style.top="-300px";
  /*chrometoup*/
  var forhoverchrome = document.getElementById("forhoverchrome");
  forhoverchrome.style.top="-100px";
  /*upbuttonchangetodownbutton*/
  var down_button_toup = document.getElementById("down_button_toup");
  down_button_toup.style.visibility = "hidden";
  var down_button_toup = document.getElementById("down_button");
  down_button_toup.style.visibility = "visible";
  /*smalllogotonormalposition*/
  var smalllogo = document.getElementById("small_logo");
  smalllogo.style.marginLeft="20px";
  /*copyrighttextchanged*/
  var copyright=document.getElementById("copyright");
  copyright.innerHTML='&nbsp;© Copyrighted by <a href="index.html">Berke KIRAN</a>&emsp;&emsp;&emsp;&emsp;&nbsp;2015-2016 All Rights Reserved .    ';
  /*commentandlikeanupbuttontonormalposition*/
  var c = document.getElementsByClassName('commentandlikeanupbutton');
  c[0].style.bottom="-164px"; 
  /*commentandlikeupbuttonvisiblity uptodown*/
  var a = document.getElementById("commentandlike_upbutton");
  a.style.visibility = "visible";
  var co = document.getElementById("commentandlike_upbutton_fordown");
  co.style.visibility = "hidden";
  /*aboutmeandclosebuttonunvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');
  aboutme[0].style.left="-2000px";
  aboutme[0].style.transform = "translateX(0)";  
  aboutme[0].style.visibility="hidden";
  /*contactmandclosebuttonunvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="-350px";
  contactm[0].style.transform = "translateX(0)";
  /*slider_n,p-normalposition*/
  var slider_n = document.getElementById("slider_n");
  var slider_p = document.getElementById("slider_p");
  slider_n.style.right="35px";
  slider_p.style.left="35px";
  /*descriptionmtonormalposition*/
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
      /*opentoclose*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebuttonq.style.visibility = "hidden";
}
function contactm_close_button_clicked(){
  /*contactmandclosebuttonunvisible*/
  var contactm = document.getElementsByClassName('contactmandclosebutton');
  contactm[0].style.left="-350px";
  contactm[0].style.transform = "translateX(0)";
}
function aboutme_close_button_clicked(){
  /*aboutmeandclosebuttonunvisible*/
  var aboutme = document.getElementsByClassName('aboutmeandclosebutton');
  aboutme[0].style.left="-2000px";
  aboutme[0].style.transform = "translateX(0)";  
  aboutme[0].style.visibility="hidden";
}
function one_button_clicked(){
  var one = document.getElementById("commentandlike_ratebox1");
  one.style.backgroundColor="red";
}
function two_button_clicked(){
  var two = document.getElementById("commentandlike_ratebox2");
  two.style.backgroundColor="purple";
  
}
function three_button_clicked(){
  var three = document.getElementById("commentandlike_ratebox3");
  three.style.backgroundColor="blue";
}
function four_button_clicked(){
  var four = document.getElementById("commentandlike_ratebox4");
  four.style.backgroundColor="green";  
}
function five_button_clicked(){
  var five = document.getElementById("commentandlike_ratebox5");
  five.style.backgroundColor="yellow";  
}
function descriptionm_close(){
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="-400px"; 
  /*closetoopen*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton");
  descriptionm_closebuttonq.style.visibility = "hidden";
}
function descriptionm_open(){
  var descriptionm = document.getElementsByClassName('descriptionm');
  descriptionm[0].style.left="0"; 
    /*opentoclose*/
  var descriptionm_closebutton = document.getElementById("descriptionm_closebutton");
  descriptionm_closebutton.style.visibility = "visible";
  var descriptionm_closebuttonq = document.getElementById("descriptionm_closebutton1");
  descriptionm_closebuttonq.style.visibility = "hidden";
}
function intro(){
	var intro = document.getElementById("intro");
	intro.style.WebkitTransition="0.5s";
	intro.style.MozTransition="0.5s";
    intro.style.MsTransition="0.5s";
	intro.style.OTransition="0.5s";
	intro.style.Transition="0.5s";
	intro.style.opacity="0";
	intro.style.visibility="hidden";	
}