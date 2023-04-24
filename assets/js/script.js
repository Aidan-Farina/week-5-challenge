$(function () {
  //variables
var saveButtons = $(".btn");
var textBoxes = $("textarea");
var confirmation = $(".saveConfirmation")
var date = $("#currentDay")
var currentHour = dayjs().hour()
var dayOfWeek = dayjs().format('dddd, MMMM DD')

//displays the date
date.text(dayOfWeek);

//this will get the local storage if there is any and display it.
textBoxes.each(function() {
  var textBox = $(this);
  var saveKey = textBox.parent().attr("id");
  var savedData = localStorage.getItem(saveKey);

  if(savedData) {
  textBox.val(JSON.parse(savedData));
}
});

//this will save the input to local storage if the save button is clicked
saveButtons.click(function () {
  var saveButton = $(this);
  var saveKey = saveButton.parent().attr("id")
  var savedData = JSON.stringify(saveButton.siblings("textarea").val());
  localStorage.setItem(saveKey, savedData)
  //this will make a message that when the save button is clicked confirming your input was saved
  confirmation.append("<p>saved to local storage</p>")
})
//this adds the past, present, and future colors tags to the calender
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

 });