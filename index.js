$('#navigation a').on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000);
});


$('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
  $('.toggler').toggleClass('change');
  $('.nav-content').slideToggle();
  $('#dropdown-menu').slideUp();
  $('.menu-overlay').toggle();
});

$('.nav-content .dropdown').on('click', function(){
  $('#dropdown-menu').slideToggle();
});

$('.menu-overlay').on('click', function(){
  $('.toggler').removeClass('change');
  $('.nav-content').slideUp();
  $('#dropdown-menu').slideUp();
  $('.menu-overlay').hide();
});

$("#contact input, #contact textarea").on('focusout', function(){

  var text_val = $(this).val();
  if (text_val === "") {
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }

});


// F O R M   V A L I D A T I O N

function formValidation()
{
var ufname = document.contact.firstname;
var ulname = document.contact.lastname;
var uemail = document.contact.email;
var usubject = document.contact.subject;
var umessage = document.contact.message;
if (ufname == "" , ulname == "", uemail == "" , usubject == "", umessage == "") {
      alert("Please Fill All Required Field");
      return false;
    }
}


// E A S T E R   E G G S

var profileImage = document.createElement('img');
profileImage.setAttribute('src', 'https://i.ibb.co/0npTmvh/Profil-Image.jpg');
profileImage.classList.add('profile-pic');

document.addEventListener('selectionchange', function() {
  var selection = document.getSelection();
  var selectedText = selection ? selection.toString() : null;

  // Warning for old browsers again: May want to polyfill https://caniuse.com/#search=includes
  if (['Ritik', 'Kumar', 'Singh'].includes(selectedText)) {
    // Add if you selected my name
    mainIntro.appendChild(profileImage);
  } else if (profileImage.parentNode) {
    // Remove if you de-selected it
    mainIntro.removeChild(profileImage);
  }
});


var today = new Date();
// Regular days just use these emoji
var possibleEmoji = [
      '🐹',
      '🐢',
      '🌼',
      '🍉'
    ];

// Special emoji if close to Halloween
if (today.getMonth() === 9 && [31, 30, 29, 28].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '👻',
    '🎃',
    '🧟‍♀️'
  ];
}

// Special emoji if close to Christmas
if (today.getMonth() === 11 && [21, 22, 23, 24, 25, 26].indexOf(today.getDate()) !== -1) {
  possibleEmoji = [
    '❄️',
    '🎅',
    '🎁'
  ];
}

document.body.addEventListener('click', function (event) {
  
  var randomNumber = Math.round(Math.random() * possibleEmoji.length);

  var span = document.createElement('span'); 
  span.textContent = possibleEmoji[randomNumber];
  span.className= 'emoji click-emoji';
 
  span.style.left = event.clientX + 'px';

  span.style.top = event.clientY + 'px'; 
 
  span.style.position = 'fixed';
  document.body.appendChild(span);                           
});



document.addEventListener('keyup', function (event) {
  if (event.code === KeyC) { // c key for clearing

      var clickEmoji = document.getElementsByClassName('click-emoji');
      var totalEmoji = clickEmoji.length;

      Array.from(clickEmoji).forEach(function (emoji, index) {
          var maximumDelay = totalEmoji.length > 10 ? 1000 : 400;
          if (index === 0) {
            emoji.style['animation-delay'] = 0 + 'ms';
          } else {
            emoji.style['animation-delay'] = Math.round(Math.random() * maximumDelay) + 'ms';
          }
          emoji.style['animation-duration'] = Math.max(Math.round(Math.random() * 700), 100) + 'ms';

      emoji.addEventListener('animationend', function () {
        document.body.removeChild(emoji);
      });
      emoji.classList.add('fall-down');
  });
}});