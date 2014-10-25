$(document).ready(function(){
  console.log('search option');

  $( ".clickme" ).click(function() {
    $( ".search-options" ).slideToggle( "slow", function() {});
  });

});