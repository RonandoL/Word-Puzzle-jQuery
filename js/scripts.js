$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var vowels = 'aeiou';  // Can traverse strings like arrays
    var sentence = $('.sentence').val(); // Can traverse strings like arrays
    var newSentence = sentence;  // not necessary, but I like it

    for (var i = 0; i < newSentence.length; i++) {
      if (vowels.indexOf(newSentence[i]) > -1) {
        newSentence = newSentence.replace(newSentence[i], '-');
      }
    }
    console.log(newSentence);

    //  Nested for loops, old and klunky!
    // Need to loop through string first, then vowels second!
    // for (var j = 0; j < newSentence.length; j++) { // loop through string
    //   for (var i = 0; i < vowels.length; i++) {  // loop through vowels
    //     if (newSentence[j].indexOf(vowels[i]) !== -1) {
    //        newSentence[j].replace(vowels[i], '-');
    //
    //     } else {
    //
    //     }
    //
    //   }  // for loop
    // } // for loop




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
