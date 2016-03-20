$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var sentence = ($('input.sentence').val()).split(); // is an array
    var newSentence = [];
// debugger;
    for (var i = 0; vowels.length; i++) {
      if (sentence.indexOf(vowels[i]) !== -1) {
        newSentence.push('-');  // doesn't work
      } else {
        newSentence.push(vowels[i]);

      }
    }
    console.log(newSentence);

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
