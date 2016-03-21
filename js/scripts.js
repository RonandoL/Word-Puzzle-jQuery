$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var vowels = 'aeiou';  // Can traverse strings like arrays
    var sentence = $('.sentence').val(); // Can traverse strings like arrays
    var newSentence = sentence;  // not necessary, but I like it

    for (var i = 0; i < newSentence.length; i++) {
      if (vowels.indexOf(newSentence[i]) > -1) {  // if letter isn't equal to vowel
        newSentence = newSentence.replace(newSentence[i], '-'); // replace letter w/dash
      }
    }

    $('.results').append('<h3>Your new phrase:</h3><h4>' + newSentence + '</h4>');
    document.getElementById('sentence').value='';  // clear input field on submit
    // $('#sentence').value() = '';  // DOES NOT WORK

  });





  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });
});
