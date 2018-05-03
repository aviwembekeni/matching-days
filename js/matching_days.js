function MatchingDays(){
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var weekdaysData = { weekdays: [
      {label: "Monday", value: "monday", style: "normal"},
      {label: "Tuesday", value: "tuesday", style: "normal"},
      {label: "Wednesday", value: "wednesday", style: "normal"},
      {label: "Thursday", value: "thursday", style: "normal"},
      {label: "Friday", value: "friday", style: "normal"},
      {label: "Saturday", value: "saturday", style: "normal"},
      {label: "Sunday", value: "sunday", style: "normal"}
    ]};

  function sameWeekday(date1, date2){

       var firstDate = new Date(date1);
       var secondDate = new Date(date2);

    return weekDays[firstDate.getDay()] == weekDays[secondDate.getDay()];
  };

  function checkWeekdays(){
    return weekDays;
  }

  function checkWeekdaysData(){
    return weekdaysData;
  }

  function checkDayName(date){
    return weekDays[new Date(date).getDay()];
  }

  function updateDayStyle(weekdaysList, day, style){
    
    weekdaysList.weekdays.map(weekday =>{
      if(weekday.label == day){
        weekday.style = style;
      }
    })

    return weekdaysList;
  }

  return {
    isSameWeekday : sameWeekday,
    getWeekdays : checkWeekdays,
    getWeekdaysData : checkWeekdaysData,
    getWeekday : checkDayName,
    setDayStyle : updateDayStyle
  }
}
