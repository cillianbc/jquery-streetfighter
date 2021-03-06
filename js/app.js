$(document).ready(function () {
  $('.ryu').mouseenter(function () {
    Ready();
  })
    .mouseleave(function () {
      basePosition();
    })
    .mousedown(function () {
      hadouken();
    })
    .mouseup(function () {
      HadoukenStop();
    })
})

//Function Roll Up //
  function Ready(){
  $('.ryu-still').hide();
  $('.ryu-ready').show();
  }
  function basePosition(){
    $('.ryu-ready').hide();
      $('.ryu-still').show();
  }
  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
function HadoukenStop(){
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
}

  function hadouken() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate({
        'left': '300px'
      }, 500, function () {
        $(this).hide();
        $(this).css('left', '-212px');
      });
  }

//Function Roll Up//


  $(document).keydown(function (e) {
    if (e.keyCode == 88) {
      Ready();
      playHadouken();
      hadouken();
    }
  })

  $(document).keyup(function (e) {
    if (e.keyCode == 88) {
      HadoukenStop();
    }
  })
