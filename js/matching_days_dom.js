var weekdaysDisplayElement = document.querySelector(".weekdaysDisplay");
var firstDateInputElement = document.querySelector(".firstDate");
var secondDatInputElement = document.querySelector(".secondDate");

var weekdaysTemplateSource = document.querySelector(".weekdaysTemplate").innerHTML;
var weekdaysTemplate = Handlebars.compile(weekdaysTemplateSource);

firstDateInputElement.addEventListener('change', handleDateChange);
secondDatInputElement.addEventListener('change', handleDateChange);

var matchingDays = MatchingDays();

showWeekdays(matchingDays.getWeekdaysData());

function showWeekdays(weekdaysObj){

  var weekdaysDataHTML = weekdaysTemplate(weekdaysObj);
// put the resulting HTML into the target elements innerHTML

  weekdaysDisplayElement.innerHTML = weekdaysDataHTML;

}

function handleDateChange(){


  var firstDateVal = firstDateInputElement.value;
  var secondDateVal = secondDatInputElement.value;

  if(firstDateVal !== "" && secondDateVal !== ""){

    var weekdaysDataSample = matchingDays.getWeekdaysData().weekdays;

    var weekdays = [];
    for(var i=0;i<weekdaysDataSample.length;i++){

      var currentWeek = weekdaysDataSample[i];
      weekdays.push(Object.create(currentWeek));

    }

    var weekdaysData = {weekdays};

     var isSameWeekday = matchingDays.isSameWeekday(firstDateVal, secondDateVal);
     var weekdays = matchingDays.getWeekdays(firstDateVal);

     if(isSameWeekday){
        var sameday = matchingDays.getWeekday(firstDateVal);
        var updatedWeekdaysData = matchingDays.setDayStyle(weekdaysData, sameday, "green");

         showWeekdays(updatedWeekdaysData);

     }else {
       var day1 = matchingDays.getWeekday(firstDateVal);
       var day2 = matchingDays.getWeekday(secondDateVal);

       var updatedWeekdaysData = matchingDays.setDayStyle(weekdaysData, day1, "blue");

       var latestUpdatedWeekdayData = matchingDays.setDayStyle(updatedWeekdaysData, day2, "red");

       showWeekdays(latestUpdatedWeekdayData);

     }

  }
}
