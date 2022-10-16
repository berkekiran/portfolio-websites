/* Smooth Mouse Scroll */

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 850,
	speedAsDuration: true,
  offset: 125
});

/* Smooth Menu Scroll */

const sections = document.querySelectorAll("section");
const menuelements = document.querySelectorAll(".menubuttons");

window.addEventListener('scroll', ()=> {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      currentSection = section.getAttribute('id');
    }
  })

  /*
  console.log($(this).scrollTop());

  if($(this).scrollTop() < 125){
    $('.alert').removeClass('alerthide');
    $('.alert').addClass('alertshow');
  } else {
    $('.alert').removeClass('alertshow');
    $('.alert').addClass('alerthide');
  }
  */

  menuelements.forEach(menuelement => {
    menuelement.classList.remove('highlight');
    if(menuelement.classList.contains(currentSection)){
      menuelement.classList.add('highlight');
    }
  })

})

/* Mobile Menu */

function toggleMenu(){
  if($('.menubarcontainer-mobile').css('display') === 'none'){
    $('.menubutton-mobile').addClass('menubutton-mobile-active');
    $('.menubutton-mobile').text('Close');
    $('.menubarcontainer-mobile').fadeIn(250);
  } else {
    $('.menubutton-mobile').removeClass('menubutton-mobile-active');
    $('.menubutton-mobile').text('Menu');
    $('.menubarcontainer-mobile').fadeOut(250);
  }
};

function closeMenu(){
  $('.menubutton-mobile').removeClass('menubutton-mobile-active');
  $('.menubarcontainer-mobile').fadeOut(250);
  $('.menubutton-mobile').text('Menu');
};

/* About Me Tabs */

function openAboutMeTab(evt, tabName) {
  var i, tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tabspanel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabbuttons = document.querySelectorAll(".tabbuttons");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove('tabactive');
    tabbuttons[i].classList.add('tabinactive');
  }

  $(document.getElementById(tabName)).fadeIn(500);
  evt.currentTarget.classList.remove('tabinactive');
  evt.currentTarget.classList.add('tabactive');
}

/* Scroll Reveal */

ScrollReveal({ reset: true });

/* menu */

ScrollReveal().reveal('.menubar', {
  delay: 100,
  duration: 850,
  origin: 'top',
  distance: '25px',
  opacity: 0,
  reset: false
});

/* home */

ScrollReveal().reveal('.headerinfo h2', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.headerinfo h1', {
  delay: 200,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.headerinfo p', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.headerprofileimage', {
  delay: 200,
  duration: 1250,
  opacity: 0,
});

ScrollReveal().reveal('.headerprofileimagemobile', {
  delay: 200,
  duration: 1250,
  opacity: 0,
});

ScrollReveal().reveal('.alert', {
  delay: 200,
  duration: 1250,
  opacity: 0,
});

/* about me */

ScrollReveal().reveal('.currently h2', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.currently p', {
  delay: 200,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.tabs', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.tabspanels', {
  delay: 400,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

/* videos */

ScrollReveal().reveal('.recentvideo h2', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.recentvideocontainer', {
  delay: 200,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('.recentvideo p', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.othervideos h2', {
  delay: 400,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.othervideoscontainer01', {
  delay: 500,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('.othervideoscontainer01info', {
  delay: 600,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.othervideoscontainer02', {
  delay: 700,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('.othervideoscontainer02info', {
  delay: 800,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.othervideosinfo', {
  delay: 900,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

/* characters */

ScrollReveal().reveal('.characterscontainer h2', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.characterscontainer h1', {
  delay: 200,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.characterscontainerinfo', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('#character01link', {
  delay: 400,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('#character02link', {
  delay: 500,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});
ScrollReveal().reveal('#character03link', {
  delay: 600,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

/* projects */

ScrollReveal().reveal('.projectscontainer h2', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.projectscontainer h1', {
  delay: 200,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.projectscontainerinfo', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('#project01link', {
  delay: 400,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('#project02link', {
  delay: 500,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

ScrollReveal().reveal('#project03link', {
  delay: 600,
  duration: 850,
  scale: 0.925,
  opacity: 0,
});

/* contact */

ScrollReveal().reveal('.centerlike', {
  delay: 100,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.contactinfo h1', {
  delay: 200,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.contactinfo h2', {
  delay: 300,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.contactinfo p', {
  delay: 400,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});

ScrollReveal().reveal('.socialmedialinks', {
  delay: 500,
  duration: 850,
  origin: 'bottom',
  distance: '25px',
  opacity: 0,
});