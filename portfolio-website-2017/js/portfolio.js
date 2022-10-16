// AngularJs Module and Controller Setup

var app = angular.module("portfolio",['ngSanitize']);

// Work Control System

app.controller('WorkController', function($scope) {

  // Works List

  $scope.works = [
                  {name: "Orc Leader", info: "2017 / 3D Character / Game-Ready", link: "https://www.artstation.com/artwork/2V4Lx", style : {"background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/823/800/large/berke-kiran-screenshot006.jpg?1501534299')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "Sleeping Creature", info: "2016 / 3D Creature", link: "https://www.artstation.com/artwork/vdwLA", style : { "background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/823/646/large/berke-kiran-sleeping-creature.jpg?1501533327')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "John", info: "2016 / 3D Character", link: "https://www.artstation.com/artwork/4Vd4k", style : { "background-image" : "url('https://cdnb.artstation.com/p/assets/images/images/006/842/405/large/berke-kiran-john-render-1.jpg?1501662674')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                  {name: "The God", info: "2016 / Digital Artwork", link: "https://www.artstation.com/artwork/Nm8g5", style : { "background-image" : "url('https://cdna.artstation.com/p/assets/images/images/006/805/672/large/berke-kiran-thegod.jpg?1501398937')", "background-size" : "cover", "background-position" : "center", "background-repeat" : "no-repeat" } },
                 ];

   var move = 0,
       numOfSlides = $scope.works.length-1,
       count = 0;

     $scope.next = function() {
       if(count < numOfSlides) {
         if(count == 0) move -= 584;
         if(count >= 1) move -= 584;
         $('.works-ul').css("margin-left", move);
         count++;
         $('.work').eq(count).removeClass('blur-on').addClass('blur-off');
         $('.work').eq(count-1).removeClass('blur-off').addClass('blur-on');
       }
     };

     $scope.prev = function() {
       if(count == 0) move = 0;
       if(count == 1) {move += 584; count--;}
       if(count >= 2) {move += 584; count--;}
       $('.works-ul').css("margin-left", move);
       $('.work').eq(count).removeClass('blur-on').addClass('blur-off');
       $('.work').eq(count+1).removeClass('blur-off').addClass('blur-on');
     };

});

// Load More Other Projects

app.controller('OtherController', function($scope) {

  var vm = this;
  vm.other = others;
  vm.limit = 6;

  $scope.loadMore = function() {
    var increamented = vm.limit + 3;
    vm.limit = increamented > vm.other.length ? vm.other.length : increamented;

    if(increamented >= vm.other.length){
      $('.more').css("opacity","0");
      $('.more').css("cursor","default");
      $('.more').css("margin-top","-5vh");
    }
  };

});

// Others List

var others = [
              { color: '#161616 ', link: 'https://www.artstation.com/artwork/0gXRK', name: "Berke Kiran' Sketchbook", year: '2017', image: 'images/other-projects/sketchbook.png'},
	      { color: '#161616 ', link: 'https://github.com/berkekiran/portfolio-2017', name: 'Portfolio 2017', year: '2017', image: 'images/other-projects/portfolio-2017.png'},
              { color: '#303030 ', link: 'https://www.behance.net/gallery/55791649/Portfolio-2016-v2', name: 'Portfolio 2016 v2', year: '2016', image: 'images/other-projects/portfolio-2016-v2.png'},
              { color: '#a8933a ', link: 'https://www.behance.net/gallery/55790661/Video-Games-Center-Station', name: 'Video Games Center Station', year: '2016', image: 'images/other-projects/video-games-center-station.png'},
              { color: '#303030 ', link: 'https://www.behance.net/gallery/55771277/Portfolio-2016', name: 'Portfolio 2016', year: '2016', image: 'images/other-projects/portfolio-2016.png'},
              { color: '#303030 ', link: 'https://www.behance.net/gallery/55754747/Portfolio-2015-v5', name: 'Portfolio 2015 v5', year: '2015', image: 'images/other-projects/portfolio-2015-v5.png'},
              { color: '#cccccc ', link: 'https://www.artstation.com/artwork/ONdgg', name: 'UE4 Snowy Road', year: '2015', image: 'images/other-projects/snowyroad.png'},
              { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v2', name: 'UE4 Snow System v2', year: '2015', image: 'images/other-projects/ue4-snow-system-v2.png'},
              { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v1', name: 'UE4 Snow System v1', year: '2015', image: 'images/other-projects/ue4-snow-system-v1.png'},
              { color: '#1D1F1E ', link: 'https://www.behance.net/gallery/55752371/Portfolio-2015-v4', name: 'Portfolio 2015 v4', year: '2015', image: 'images/other-projects/portfolio-2015-v4.png'},
              { color: '#161616 ', link: 'https://www.behance.net/gallery/55748605/Portfolio-2015-v3-Design', name: 'Portfolio 2015 v3 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v3-design.png'},
              { color: '#cccccc ', link: 'https://www.behance.net/gallery/55747869/Portfolio-2015-v2-Design', name: 'Portfolio 2015 v2 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v2-design.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-truth', name: 'Berke Kiran - Truth', year: '2015', image: 'images/other-projects/berkekiran-truth.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-death', name: 'Berke Kiran - Death', year: '2015', image: 'images/other-projects/berkekiran-death.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v3', name: 'Adam Noise - Soundtrack v3', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v3.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v2', name: 'Adam Noise - Soundtrack v2', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v2.png'},
              { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v1', name: 'Adam Noise - Soundtrack v1', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v1.png'},
              { color: '#f8f8f8 ', link: 'https://vimeo.com/226496501', name: 'Metal Dragon - Video', year: '2015', image: 'images/other-projects/metal-dragon.png'},
              { color: '#f8f8f8 ', link: 'https://www.behance.net/gallery/55742749/Portfolio-2015', name: 'Portfolio 2015', year: '2015', image: 'images/other-projects/portfolio-2015.png'},
              { color: '#a7aaa9 ', link: 'https://www.behance.net/gallery/55738571/Photo-Galleries', name: 'Photo Galleries', year: '2014', image: 'images/other-projects/photo-galleries.png'},
              { color: '#444349 ', link: 'https://www.behance.net/gallery/55736987/Quick-Write', name: 'Quick Write', year: '2013', image: 'images/other-projects/quick-write.png'}
             ];


app.controller("bodyController", function($scope, $timeout){

  // Page Scroll Speed Controller

  jQuery.scrollSpeed(100, 2000);

  // Menu Buttons Animations and Redirect Process

  var waypointAbout = $('.waypoint-about').offset().top;
  var worksY = $('.works').offset().top-50;

  $scope.aboutoneclick = function(){
    $('html, body').animate({
 	        scrollTop: waypointAbout
 	    }, 1400);
  }

  $scope.aboutclick = function(){
    $('html, body').animate({
 	        scrollTop: waypointAbout
 	    }, 1400);
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }
      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
  }

  $scope.introclick = function(){
    $('html, body').animate({
 	        scrollTop: 0
 	    }, 1400);
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }
      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
  }

  $scope.worksclick = function(){
    $('html, body').animate({
 	        scrollTop: worksY
 	    }, 1400);
    $scope.menustyle = {
      "animation" : "menu-ui-off 0.6s linear forwards",
      "margin-left" : "-800px",
    }
    $scope.menuButtonstyle = {
      "background-color" : "#ffffff"
    }
  }

  $scope.exploreclick = function(){
    $('html, body').animate({
 	        scrollTop: worksY
 	    }, 1400);
  }

  // Burger Menu Animation and Redirect Process

  $scope.menuclick = function(){

    if($(".menu-ui").css('margin-left') == "-800px"){
      $scope.menustyle = {
        "animation" : "menu-ui 0.6s linear forwards",
        "margin-left" : "0px"
      }

      $scope.menulinkstyle = {
        "animation" : "menu-ui-link 0.7s linear forwards"
      }
      $scope.menulinkstyle1 = {
        "animation" : "menu-ui-link 0.86s linear forwards"
      }
      $scope.menulinkstyle2 = {
        "animation" : "menu-ui-link 0.95s linear forwards"
      }
      $scope.menulinkstyle3 = {
        "animation" : "menu-ui-link 1.04s linear forwards"
      }

      $scope.menuButtonstyle = {
        "background-color" : "#F44336"
      }

    }else if($(".menu-ui").css('margin-left') == "0px"){
      $scope.menustyle = {
        "animation" : "menu-ui-off 0.6s linear forwards",
        "margin-left" : "-800px",
      }

      $scope.menulinkstyle = {
        "animation" : "menu-ui-link-off 0.7s linear forwards"
      }
      $scope.menulinkstyle1 = {
        "animation" : "menu-ui-link-off 0.86s linear forwards"
      }
      $scope.menulinkstyle2 = {
        "animation" : "menu-ui-link-off 0.95s linear forwards"
      }
      $scope.menulinkstyle3 = {
        "animation" : "menu-ui-link-off 1.04s linear forwards"
      }

      $scope.menuButtonstyle = {
        "background-color" : "#ffffff"
      }
    }
  }

  // Social Buttons List

  $scope.socialLinks = [{ socialName: "linkedin", socialHref: "https://www.linkedin.com/in/berkekiran/", socialSrc : "images/social-buttons/linkedin-logo.svg"},
                        { socialName: "github", socialHref: "https://github.com/berkekiran", socialSrc : "images/social-buttons/github-logo.svg"},
                        { socialName: "artstation", socialHref: "https://www.artstation.com/artist/berkekiran", socialSrc : "images/social-buttons/artstation-logo.svg"},
                        { socialName: "behance", socialHref: "https://www.behance.net/berkekiran", socialSrc : "images/social-buttons/behance-logo.svg"},
                        { socialName: "vimeo", socialHref: "https://vimeo.com/berkekiran", socialSrc : "images/social-buttons/vimeo-logo.svg"},
                        { socialName: "soundcloud", socialHref: "https://soundcloud.com/berkekiran", socialSrc : "images/social-buttons/soundcloud-logo.svg"},
                        { socialName: "instagram", socialHref: "https://www.instagram.com/berkekiran.official/", socialSrc : "images/social-buttons/instagram-logo.svg"},
                        { socialName: "facebook", socialHref: "https://www.facebook.com/xBerkeKiranx", socialSrc : "images/social-buttons/facebook-logo.svg"}
                       ];
});


// Other Javascript Codes

$( document ).ready(function() {
  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  player.setVolume(0);

  $('.work').eq(0).addClass('blur-off');

});
