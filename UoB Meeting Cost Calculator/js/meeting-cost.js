// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);


// PhoneGap is ready
function onDeviceReady() {
    
    navigator.splashscreen.hide();

    var attendeesSet = false;

    var count = 0;
    var yeartosec = 6926400; //based on 37 hour week
    var grad6avSal = 26914;
    var grad7avSal = 33950;
    var grad8avSal = 43560;
    var grad9avSal = 53530;
    var grade6s = 0;
    var grade7s = 0;
    var grade8s = 0;
    var grade9s = 0;
    var grade6costpersec = grad6avSal/yeartosec;
    var grade7costpersec = grad7avSal/yeartosec;
    var grade8costpersec = grad8avSal/yeartosec;
    var grade9costpersec = grad9avSal/yeartosec;
    var meetingCost =0;

    //set form input values
    $("div#setAttendees div input#Grade6s").val(grade6s);
    $("div#setAttendees div input#Grade7s").val(grade7s);
    $("div#setAttendees div input#Grade8s").val(grade8s);
    $("div#setAttendees div input#Grade9s").val(grade9s);

    $("div#setAttendees div input").change(function(){
        /*
        grade6s = $("div#setAttendees div input#Grade6s").val();
        grade7s = $("div#setAttendees input#Grade7s").val();
        grade8s = $("div#setAttendees input#Grade8s").val();
        grade9s = $("div#setAttendees input#Grade9s").val();
        
        $("ul.attendees span#grade6nos").html(grade6s);
        $("ul.attendees span#grade7nos").html(grade7s);
        $("ul.attendees span#grade8nos").html(grade8s);
        $("ul.attendees span#grade9nos").html(grade9s);
        */
    });
    
    
    
   	$("div.meetingControls").delegate("button", "click", function(){ 
    
        if ($(this).hasClass('startMeeting')) {
            
            $(this).button('disable');
			
			$('button.stopMeeting').button('enable');
            
            countdown = setInterval(function(){
                $("div.countdown").html(count);
                var grade6meetingcost = count * grade6costpersec * grade6s;
                var grade7meetingcost = count * grade7costpersec * grade7s;
                var grade8meetingcost = count * grade8costpersec * grade8s;
                var grade9meetingcost = count * grade9costpersec * grade9s;
                meetingCost = grade6meetingcost + grade7meetingcost + grade8meetingcost  + grade9meetingcost ;
                $("div.cost").html('£' + meetingCost.toFixed(2));
                count++;
        }, 1000);
            
        };
        
        if ($(this).hasClass('stopMeeting')) {
            $(this).button('disable');
			$('button.startMeeting').html('Restart').siblings('.ui-btn-inner').find('span.ui-btn-text').html('Restart');
            $('button.startMeeting').button('enable');
            $('button.clearMeeting').button('enable');            
            clearInterval(countdown );
        };
        
        if ($(this).hasClass('clearMeeting')) {
            $(this).button('disable');
            $('button.startMeeting').button('enable');
			$('button.startMeeting').html('Start').siblings('.ui-btn-inner').find('span.ui-btn-text').html('Start');
            count = 0;
            $("div.countdown").html(count);
            $("div.cost").html('£0:00');
            clearInterval(countdown);
        };
    
    });        

    
    
}

 
//=======================Set Attendees (Page 1) Operations=======================//
function setAttendeees() {
    grade6s = $("div#setAttendees div input#Grade6s").val();
    grade7s = $("div#setAttendees input#Grade7s").val();
    grade8s = $("div#setAttendees input#Grade8s").val();
    grade9s = $("div#setAttendees input#Grade9s").val();
        
    $("ul.attendees span#grade6nos").html(grade6s);
    $("ul.attendees span#grade7nos").html(grade7s);
    $("ul.attendees span#grade8nos").html(grade8s);
    $("ul.attendees span#grade9nos").html(grade9s);

    //back to home
    //window.location = "#home";
            
}

function setAttendeeesReset() {
    var sayHelloInputElem = document.getElementById('helloWorldInput');
    var sayHelloTextElem = document.getElementById('helloWorldText');
    var inputText = document.getElementById('txtName');
    
    inputText.value = '';
    sayHelloTextElem.style.display = 'none';
    sayHelloInputElem.style.display = 'block';
}

