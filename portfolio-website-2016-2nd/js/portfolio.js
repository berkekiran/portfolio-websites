var pApp = angular.module("portfolio", ["ngRoute"]);
pApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
$routeProvider
  .when("/", {
  templateUrl : "page/home.html"
  })
  .when("/profile", {
  templateUrl : "page/profile.html"
  })
  .when("/work", {
  templateUrl : "page/work.html"
  })
  .otherwise({
    redirectTo: '/'
  });
 if(window.history && window.history.pushState){
  $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
   });
   $locationProvider.hashPrefix('');
 }
}]);
pApp.controller("portfolio-work", function($scope){
  $scope.characters = [
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
    { link: '', name: 'Portfolio Project', year: '2017', image: ''},
  ];
  $scope.projects = [
    { color: '#cccccc ', link: 'https://github.com/berkekiran/portfolio-2017', name: 'Portfolio 2017', year: '2017', image: 'images/other-projects/portfolio-2017.png'},
    { color: '#a8933a ', link: 'https://github.com/berkekiran/video-games-center-station', name: 'Video Games Center Station', year: '2016', image: 'images/other-projects/video-games-center-station.png'},
    { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2016', name: 'Portfolio 2016', year: '2016', image: 'images/other-projects/portfolio-2016.png'},
    { color: '#303030 ', link: 'https://github.com/berkekiran/portfolio-2015-v5', name: 'Portfolio 2015 v5', year: '2015', image: 'images/other-projects/portfolio-2015-v5.png'},
    { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v2', name: 'UE4 Snow System v2', year: '2015', image: 'images/other-projects/ue4-snow-system-v2.png'},
    { color: '#cccccc ', link: 'https://github.com/berkekiran/ue4-snow-system-v1', name: 'UE4 Snow System v1', year: '2015', image: 'images/other-projects/ue4-snow-system-v1.png'},
    { color: '#1D1F1E ', link: 'https://github.com/berkekiran/portfolio-2015-v4', name: 'Portfolio 2015 v4', year: '2015', image: 'images/other-projects/portfolio-2015-v4.png'},
    { color: '#161616 ', link: 'https://github.com/berkekiran/portfolio-2015-v3-design', name: 'Portfolio 2015 v3 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v3-design.png'},
    { color: '#cccccc ', link: 'https://github.com/berkekiran/portfolio-2015-v2-design', name: 'Portfolio 2015 v2 Design', year: '2015', image: 'images/other-projects/portfolio-2015-v2-design.png'},
    { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-truth', name: 'Berke Kiran - Truth', year: '2015', image: 'images/other-projects/berkekiran-truth.png'},
    { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/berkekiran-death', name: 'Berke Kiran - Death', year: '2015', image: 'images/other-projects/berkekiran-death.png'},
    { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v3', name: 'Adam Noise - Soundtrack v3', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v3.png'},
    { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v2', name: 'Adam Noise - Soundtrack v2', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v2.png'},
    { color: '#f8f8f8 ', link: 'https://soundcloud.com/berkekiran/adam-noise-soundtrack-v1', name: 'Adam Noise - Soundtrack v1', year: '2015', image: 'images/other-projects/adam-noise-soundtrack-v1.png'},
    { color: '#f8f8f8 ', link: 'https://vimeo.com/226496501', name: 'Metal Dragon - Video', year: '2015', image: 'images/other-projects/metal-dragon.png'},
    { color: '#f8f8f8 ', link: 'https://github.com/berkekiran/portfolio-2015', name: 'Portfolio 2015', year: '2015', image: 'images/other-projects/portfolio-2015.png'},
    { color: '#a7aaa9 ', link: 'https://github.com/berkekiran/photo-galleries', name: 'Photo Galleries', year: '2014', image: 'images/other-projects/photo-galleries.png'},
    { color: '#444349 ', link: 'https://github.com/berkekiran/quick-write', name: 'Quick Write', year: '2013', image: 'images/other-projects/quick-write.png'}
  ];
});

pApp.controller("portfolio-profile", function($scope){
  var list = document.getElementsByClassName('skill-list')[0];
  var skills = ["Digital Sculpting",
                 "Organic Modeling",
                 "Organic Texturing",
                 "Hard Surface Modeling",
                 "Hard Surface Texturing",
                 "Html, Css, Sass",
                 "Javascript, Jquery",
                 "Node.Js",
                 "Angular.js",
                 "C, C# and Java",
                 "Database programming (SQL), Php",
                 "Responsive Web design",
                 "Texturing (PBR)",
                 "Level design and beauty pass"];

  var degreeLevels = ["2",
                "2",
                "2",
                "1",
                "1",
                "2",
                "2",
                "1",
                "2",
                "1",
                "1",
                "2",
                "2",
                "0"];

  for(var i = 0; i < skills.length; i++){
    var listElement = document.createElement('li');
    var text = document.createTextNode(skills[i]);
    var degree = document.createElement('div');
    var degreeAlt0 = document.createElement('div');
    var degreeAlt1 = document.createElement('div');
    var degreeAlt2 = document.createElement('div');
    var degreeAlt3 = document.createElement('div');
    degree.classList.add("degree");
    switch (degreeLevels[i]) {
      case "0":
        degreeAlt3.classList.add("active");
        break;
      case "1":
        degreeAlt2.classList.add("active");
        degreeAlt3.classList.add("active");
        break;
      case "2":
        degreeAlt3.classList.add("active");
        degreeAlt2.classList.add("active");
        degreeAlt1.classList.add("active");
        break;
      case "3":
        degreeAlt3.classList.add("active");
        degreeAlt2.classList.add("active");
        degreeAlt1.classList.add("active");
        degreeAlt0.classList.add("active");
        break;
      default:
        degreeAlt3.classList.add("active");
    }
    degree.appendChild(degreeAlt0);
    degree.appendChild(degreeAlt1);
    degree.appendChild(degreeAlt2);
    degree.appendChild(degreeAlt3);
    listElement.appendChild(text);
    listElement.appendChild(degree);
    list.appendChild(listElement);
  }
});
