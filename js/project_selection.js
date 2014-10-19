EventDonor.projectObserver = {
  selectedProjectID: ""
};

(function($){
  var currentProject = {};
  for ( var i = 0; i < EventDonor.projectsJson.length; i++ ) {
    currentProject = EventDonor.projectsJson[i];
    console.log( currentProject );
    $( "#project-list" ).append(
        '<div class="row">' +
        '<div class="project-listing" id="' + currentProject.id + '">\n' +
          '<img src="/images/project/' + currentProject.logo + ">\n +' +
          '<h3>' + currentProject.title + '</h3>\n' +
          '<p>' + currentProject.description + '</p>\n' +
        '</div>' +
        '</div>'
    );
  }

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

  console.log( EventDonor.projectsJson );

}(jQuery))
