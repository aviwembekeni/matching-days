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
         weekdaysData.weekdays.map(weekday =>{
           if(weekday.label == sameday){
             weekday.style = "green";
           }
         })

         showWeekdays(weekdaysData);

         console.log(weekdaysData);
         console.log(matchingDays.getWeekdaysData());

     }else {
       var day1 = matchingDays.getWeekday(firstDateVal);
       var day2 = matchingDays.getWeekday(secondDateVal);

       weekdaysData.weekdays.map(weekday =>{
         if(weekday.label == day1){
           weekday.style = "blue";
         }

         if(weekday.label == day2){
           weekday.style = "red";
         }

       })

       showWeekdays(weekdaysData);

       console.log(weekdaysData);

     }

  }
}
