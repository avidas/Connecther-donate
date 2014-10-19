EventDonor = {};

EventDonor.projectObserver = {
  selectedProjectID: ""
};

(function($){
  var projects = $( ".project-listing" );
  var focusColor = "#dcecf7";
  var generalFundButton = $( "#19" );
  var projectObserver = EventDonor.projectObserver;

  var untoggleIfToggled = function( buttonSelector ){
    if ( buttonSelector.hasClass( 'active') ) {
      buttonSelector.button( 'toggle' );
    }
  }

  var untoggleProjects = function(){
    projects.css( "background", "white" );
  }

  var updateProjectObserver = function( projectID ){
    projectObserver.selectedProjectID = projectID;
    console.log( projectObserver.selectedProjectID );
  }

  projects.click( function(){
    untoggleIfToggled( generalFundButton );
    untoggleProjects();
    $( this ).css( "background", focusColor );
    updateProjectObserver( $( this ).attr( 'id' ) );
  });

  generalFundButton.click( function(){
    untoggleProjects();
    updateProjectObserver( $( generalFundButton ).attr( 'id' ) );
  } )
}(jQuery))
