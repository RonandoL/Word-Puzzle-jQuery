$(function() {

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
