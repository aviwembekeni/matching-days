function MatchingDays(){
  var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var weekdaysData = { weekdays: [
      {label: "Monday", value: "monday", sameweekday: false, differentDay: null},
      {label: "Tuesday", value: "tuesday", sameweekday: false, differentDay: null},
      {label: "Wednesday", value: "wednesday", sameweekday: false, differentDay: null},
      {label: "Thursday", value: "thursday", sameweekday: false, differentDay: null},
      {label: "Friday", value: "friday", sameweekday: false, differentDay: null},
      {label: "Saturday", value: "saturday", sameweekday: false, differentDay: null},
      {label: "Sunday", value: "sunday", sameweekday: false, differentDay: null}
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

  return {
    isSameWeekday : sameWeekday,
    getWeekdays : checkWeekdays,
    getWeekdaysData : checkWeekdaysData
  }
}
