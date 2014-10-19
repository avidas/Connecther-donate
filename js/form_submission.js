(function($){
  var postObject = {
    project_id: EventDonor.projectObserver.selectedProjectID,
    title: $( "#event-title" ).val(), 
    description: $( "#event-subtitle" ).val(),
    target_goal: '50'
  }

  $( ".event-register" ).submit(function( event ){
    event.preventDefault(); 
    $.post( "url", postObject );
  })
}(jQuery));
