(function() {
  $(document).ready(function() {

    //Load tweets
    
    $.get("../data/tweets.json", function (tweets) {
      

      $(tweets).each(function(i, t) {
        // console.log(t.entities);
        hashtags = t.entities['hashtags'];
        if(hashtags.length > 0){
            // console.log(hashtags); 
            for(var i = 0; i < hashtags.length; i ++){
              if(hashtags[i].text == 'GITW') {

                console.log(t.entities['media']);



                var tbox = "";
                tbox += '<div class="timeline-row">';
                tbox +=   '<div class="timeline-time">';
                tbox +=     '<small>'+t.created_at.substring(4,10)+'</small>'+t.created_at.substring(11,19);
                tbox +=   '</div>';
                tbox +=   '<div class="timeline-icon">';
                tbox +=     '<div class="bg-primary">';
                tbox +=       '<i class="fa fa-pencil"></i>';
                tbox +=     '</div>';
                tbox +=   '</div>';
                tbox +=   '<div class="panel timeline-content">';
                tbox +=     '<div class="panel-body">';

                // tbox +=       '<h2>';
                // tbox +=         "";
                // tbox +=       '</h2>';
                if(t.entities['media']){
                  tbox  += '<img class="img-responsive" src="'+t.entities['media'][0].media_url+'">';
                }
      
                tbox +=       '<p>';
                tbox +=         t.text;
                tbox +=       '</p>';
                tbox +=     '</div>';
                tbox +=   '</div>';
                tbox += '</div>';

                $(".timeline").append(tbox); 
              }
              
            }
        }

      });
    });




    var timelineAnimate;
    timelineAnimate = function(elem) {
      return $(".timeline.animated .timeline-row").each(function(i) {
        var bottom_of_object, bottom_of_window;
        bottom_of_object = $(this).position().top + $(this).outerHeight();
        bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          return $(this).addClass("active");
        }
      });
    };
    timelineAnimate();
    return $(window).scroll(function() {
      return timelineAnimate();
    });





  });

}).call(this);
