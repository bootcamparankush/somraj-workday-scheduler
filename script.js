// Display today's day and date

var todaysDate = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

$("#currentDay").html(todaysDate);


$(document).ready(function () {
  // code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements 
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
      //get current number of hours from dayjs
    var timeNow = dayjs().hour();
    // var timesNow = dayjs().calendar(null, {sameDay: '[Today at] h:mm A'});
    // var timeNow = dayjs.duration().asHours();

    console.log(timeNow);
    // console.log(timeNow);


      // code to apply the past, present, or future class to each time block by comparing the id to the current hour
      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime);
          // check the time and add the classes for background indicators
          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

  // Get item from local storage
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeTracker();
})
