var main = function() {
    var volume;
     
      $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });

    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    $('#mute').click(function(){
        if (!muted) { 
            muted = true; 
            $('#message').text("Track muted");
            $('#player').prop("muted", true); 
        }
    });

    $('#unmute').click(function(){
        if (muted) { 
            muted = false; 
            $('#message').text("Track unmuted");
            $('#player').prop("muted", false); 
        }
    });

    $('#stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause"); 
        $('#player').prop("currentTime", 0); 
    });

    $('#volUp').click(function(){
        if ($('#player')[0].volume < 1) { 
            $('#player')[0].volume += 0.1; 
            $('#message').text("Volume increased");
        } else {
            console.log("Volume is already at maximum");
        }
    });

    $('#volDown').click(function(){
        if ($('#player')[0].volume > 0) { 
            $('#player')[0].volume -= 0.1; 
            $('#message').text("Volume decreased");
        } else {
            console.log("Volume is already at minimum");
        }
    });
}

$(document).ready(main);
