$(function () {
var saveButtons = $(".btn");
var textBoxes = $("textarea");
var currentHour = dayjs().hour()

textBoxes.each(function() {
  var textBox = $(this);
  var saveKey = textBox.parent().attr("id");
  var savedData = localStorage.getItem(saveKey);

  if(savedData) {
  textBox.val(JSON.parse(savedData));
}

});

saveButtons.click(function () {
  var saveButton = $(this);
  var saveKey = saveButton.parent().attr("id")
  var savedData = JSON.stringify(saveButton.siblings("textarea").val());
  localStorage.setItem(saveKey, savedData)
});
 
$(".description").each(function() {
  var blockHour = parseInt($(this).parent().attr("id"));

  if(blockHour === currentHour) {
    $(this).addClass("present")
  } else if(blockHour < currentHour){
    $(this).addClass("past")
  } else if(blockHour > currentHour){
    $(this).addClass("future")
  }
});


    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 });