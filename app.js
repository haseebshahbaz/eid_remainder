var update_days = document.getElementById("days");
var update_hours = document.getElementById("hours");
var update_minutes = document.getElementById("minutes");
var update_seconds = document.getElementById("seconds");
    
   
setInterval(function(){
    var currentDate = new Date();
    var eidDate = new Date ('2024-06-16');
    var milliseconds = currentDate.getTime();
    var eidDateMilliseconds = eidDate.getTime();
    var diff = eidDateMilliseconds-milliseconds
      
    var seconds=Math.round(diff / 1000);
    var minutes=Math.round(diff / 1000 / 60);
    var hours=Math.round(diff / 1000 / 60 / 60);
    var day= Math.round(diff / 1000 / 60 / 60 / 24);

    update_days.innerText = day + " " + "Days"; 
    update_hours.innerText = hours + " " + "Hours";
    update_minutes.innerText = minutes + " " + "Minutes";
    update_seconds.innerText = seconds + " " + "Seconds";


}, 1000);



