$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var sentence = ($('.sentence').val()).split(); // is an array
    var newSentence = [];

    for (var i = 0; i < vowels.length; i++) {  // loop through vowels
      for (var j = 0; j < sentence.length; j++) { // loop through string
        if (sentence.indexOf(vowels[i]) === -1) {
          newSentence.push(sentence[j]);
        } else {
          newSentence.push('-');
        }
        console.log(newSentence);
      }  // for loop - nested
    } // for loop - outer


  });

  // uses a method to replace vowels in a string with the dash symbol "-"
  //  Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.





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
