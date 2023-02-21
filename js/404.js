$('.drop').on('animationend webkitAnimationEnd', function() { 
    $( ".drop" ).removeClass("shake1").addClass( "cone-drop" );
   $( ".drop2" ).removeClass("shake1").addClass( "arm-drop");
  $( ".drop3" ).removeClass("shake1").addClass( "arm-dropLeft");
}); 
