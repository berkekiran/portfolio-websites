var app = angular.module("portfolio", []);

app.controller('SocialController', function($scope) {

  $scope.socials = [
                    { Link: "https://www.linkedin.com/in/berkekiran/", Image: 'images/social/linkedin-logo.svg' },
                    { Link: "https://github.com/berkekiran", Image: 'images/social/github-logo.svg' },
                    { Link: "https://www.artstation.com/artist/berkekiran", Image: 'images/social/artstation-logo.svg' },
                    { Link: "https://www.behance.net/berkekiran", Image: 'images/social/behance-logo.svg' },
                    { Link: "https://vimeo.com/berkekiran", Image: 'images/social/vimeo-logo.svg' },
                    { Link: "https://soundcloud.com/berkekiran", Image: 'images/social/soundcloud-logo.svg' },
                    { Link: "https://www.instagram.com/berkekiran.official/", Image: 'images/social/instagram-logo.svg' },
                    { Link: "https://www.facebook.com/xBerkeKiranx", Image: 'images/social/facebook-logo.svg' }
                   ];

});

app.controller('CharacterController', function($scope) {

  var vm = this;
  vm.character = characters;
  vm.limit = 3;

  $scope.loadMore = function() {
  var increamented = vm.limit + 3;
  vm.limit = increamented > vm.character.length ? vm.character.length : increamented;

  if(vm.limit >= vm.character.length){
    $('.load-more').css("opacity","0");
    $('.load-more').css("cursor","default");
    $('.load-more').css("margin-top","-144px");
    $('.load-more').css("margin-bottom","-96px");
  }

 };

});


app.controller('OtherController', function($scope) {

  var vm = this;
  vm.otherWork = otherWorks;
  vm.limit = 6;

  $scope.loadMore = function() {
    var increamented = vm.limit + 3;
    vm.limit = increamented > vm.otherWork.length ? vm.otherWork.length : increamented;

    if(vm.limit >= vm.otherWork.length){
      $('.load-more-o').css("opacity","0");
      $('.load-more-o').css("cursor","default");
      $('.load-more-o').css("margin-top","-144px");
      $('.load-more-o').css("margin-bottom","-96px");
    }

 };

});
