$(function(){
	//Load json data
	$.get("../data/projects.json", function (projects){
		console.log(projects);

		var projectList = "";
		$(projects).each(function (i,project){
			var p = '<div class="project"></div>';


			logoUrl = "http://www.connecther.org/images/project/" + project.logo;
			if(!project.logo) logoUrl = "http://www.connecther.org/skins/cs/images/df_logo2.png";
			p += '<img src="' + logoUrl+'">';
			

			p += '<h3>'+project.title+'</h3>';

			projectList += p;
		});

		$(".project-list").html(projectList);
	})

});