var clicks = 0;
var firstchoice;
var secondchoice;

var timerId;

var match = 0;
var imgBackCard = 'images/black_joker.png';

var imgFaces = [
    'images/king_of_clubs.png',
    'images/king_of_clubs.png',
    'images/queen_of_hearts.png',
    'images/queen_of_hearts.png',
    'images/jack_of_diamonds.png',
    'images/jack_of_diamonds.png',
    'images/ace_of_spades.png',
    'images/ace_of_spades.png',

    'images/2_of_clubs.png',
    'images/2_of_clubs.png',
    'images/3_of_hearts.png',
    'images/3_of_hearts.png',
    'images/4_of_diamonds.png',
    'images/4_of_diamonds.png',
    'images/5_of_spades.png',
    'images/5_of_spades.png',

    'images/ace_of_clubs.png',
    'images/ace_of_clubs.png',
    'images/ace_of_hearts.png',
    'images/ace_of_hearts.png',
    'images/ace_of_diamonds.png',
    'images/ace_of_diamonds.png',
    'images/6_of_spades.png',
    'images/6_of_spades.png',
]

// Reference to the elements
$container = $('.cardMatrixContainer');
$play      = $('.play');
$reset     = $('.reset');
$card      = $('.card')


//---
// Functions
//---

function hide() {
    $reset.hide();
    $container.hide();
}

function choose(cardId) {
    if (clicks == 2) {
        return;
    }

    if (clicks == 0) {
        firstchoice = cardId;
        document.images[cardId].src = imgFaces[cardId];
        clicks = 1;
    }
    // else if (document.images[firstchoice].src == document.images[firstchoice].src){
    //     clicks = 0;
    //     document.images[firstchoice].src = imgBackCard;
    //     console.log('test');
    //     return;
    // }
    else {
        clicks = 2;
        secondchoice = cardId;
        document.images[cardId].src = imgFaces[cardId];
        timerId = setInterval('check()', 700);
    }
}

function check() {
    clearInterval(timerId);
    clicks = 0;
    if (imgFaces[secondchoice] == imgFaces[firstchoice]) {
        match++;
        document.getElementById('matches').innerHTML = match;
    } else {
        document.images[firstchoice].src = imgBackCard;
        document.images[secondchoice].src = imgBackCard;
    }
}

function setJoker() {
  $('.card img').attr('src', imgBackCard);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


//---
// Initialize the game.
//---

// When the document is loaded, initialize the game.
$(document).ready(function(){
  hide();
  setJoker();
  shuffle(imgFaces);

  // When the play button is clicked, show the game and replace
  // the play button with thereset button.
  $play.on('click', function() {
      $container.show();
      $(this).hide();
      $reset.show();
  });

  // When the reset button is clicked, refresh the page.
  $reset.on('click', function() {
      window.location.reload();
  });

  // When a card is clicked, flip it.
  $card.on('click', function(e){
    var cardId = $(this).attr('id').replace('card-', '');
    choose(cardId);
    console.log(cardId);
  });
});
