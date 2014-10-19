(function($){
  var postObject = {
    project_id: EventDonor.projectObserver.selectedProjectID,
    title: $( "#event-title" ).val(), 
    description: $( "#event-subtitle" ).val(),
    target_goal: '50'
  }

  $( ".event-register" ).submit(function( event ){
    event.preventDefault(); 
    console.log(postObject);
    // $.post( "url", postObject );
  })
}(jQuery));
