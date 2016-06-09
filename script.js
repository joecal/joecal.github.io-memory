var clicks = 0; 
var firstchoice;
var secondchoice;

var match = 0;
var backcard = "images/black_joker.png";

var faces = [
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

function hide(){
  $('.reset').hide();
  $('.cardMatrixContainer').hide();
}

hide();

$(".play").click(function(){
  $(".play").hide();
  $('.cardMatrixContainer').show();
  $('.reset').show();
});

function shuffle(a) {
  var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

shuffle(faces);

function choose(card) {
  if (clicks == 2) {
      return;
  }
  if (clicks == 0) {
      firstchoice = card;
      document.images[card].src = faces[card];
      clicks = 1;
  }
  // else if (document.images[firstchoice].src == document.images[firstchoice].src){
  //     clicks = 0;
  //     document.images[firstchoice].src = backcard;
  //     console.log('test');
  //     return;
  // }
  else {
      clicks = 2;
      secondchoice = card;
      document.images[card].src = faces[card];
      timer = setInterval("check()", 700);
  }
}

function check() {
  clearInterval(timer);
  clicks = 0;
    if (faces[secondchoice] == faces[firstchoice]) {
      match++;
      document.getElementById("matches").innerHTML = match;
    }
    else {
      document.images[firstchoice].src = backcard;
      document.images[secondchoice].src = backcard;
      return;
    }
}
