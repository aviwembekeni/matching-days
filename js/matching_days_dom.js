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
  var weekdaysDataSample = matchingDays.getWeekdaysData().weekdays.map(function(weekdays){
      return Object.create(weekdays);
  });
  var firstDateVal = firstDateInputElement.value;
  var secondDateVal = secondDatInputElement.value;

  if(firstDateVal !== "" && secondDateVal !== ""){
     var isSameWeekday = matchingDays.isSameWeekday(firstDateVal, secondDateVal);
     var weekdays = matchingDays.getWeekdays();

     if(isSameWeekday){
      var sameday = weekdays[new Date(firstDateVal).getDay()];
       weekdaysDataSample.map(weekday =>{
         if(weekday.label == sameday){
           weekday.sameweekday = true;
         }
       })

       showWeekdays(weekdaysDataSample);
       console.log(weekdaysDataSample);
       console.log(matchingDays.getWeekdaysData());

     }

  }
}
