$(document).ready(function(){
  console.log('search option');

  $( ".search-button" ).click(function() {
    console.log('click');
    $( ".search-grid" ).slideToggle( "slow", function() {
        $(this).css('display', 'inline');
    });
  });

});