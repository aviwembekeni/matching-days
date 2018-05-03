describe('sameWeekday', function() {

    it('should return true if two dates fall on the same weekday.', function() {
      var matchingDays = MatchingDays();

      assert.deepEqual(true, matchingDays.isSameWeekday("2018-05-04", "2018-05-25"));
    });

    it('should return false if two dates fall on different weekdays.', function() {
      var matchingDays = MatchingDays();

      assert.deepEqual(false, matchingDays.isSameWeekday("2018-05-04", "2018-05-22"));
    });


});

describe('checkWeekdays', function() {

    it('should return a list of weekdays.', function() {
      var matchingDays = MatchingDays();

      assert.deepEqual(['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], matchingDays.getWeekdays());
    });

});

describe('checkWeekdaysData', function() {

    it('should return a list of weekdays objects.', function() {
      var matchingDays = MatchingDays();

      var weekdaysData = { weekdays: [
          {label: "Monday", value: "monday", style: "normal"},
          {label: "Tuesday", value: "tuesday", style: "normal"},
          {label: "Wednesday", value: "wednesday", style: "normal"},
          {label: "Thursday", value: "thursday", style: "normal"},
          {label: "Friday", value: "friday", style: "normal"},
          {label: "Saturday", value: "saturday", style: "normal"},
          {label: "Sunday", value: "sunday", style: "normal"}
        ]};

      assert.deepEqual(weekdaysData, matchingDays.getWeekdaysData());
    });

});

describe('checkDayName', function() {

    it('should return the day the given date falls on (Friday).', function() {
      var matchingDays = MatchingDays();

      assert.deepEqual("Friday", matchingDays.getWeekday("2018-05-18"));
    });

    it('should return the day the given date falls on (Sunday).', function() {
      var matchingDays = MatchingDays();

      assert.deepEqual("Sunday", matchingDays.getWeekday("2018-05-20"));
    });

});

describe('updateDayStyle', function() {

    it("should return a list of weekdays objects with common weekday style value 'green'.", function() {
      var matchingDays = MatchingDays();

      var weekdaysData = { weekdays: [
          {label: "Monday", value: "monday", style: "normal"},
          {label: "Tuesday", value: "tuesday", style: "normal"},
          {label: "Wednesday", value: "wednesday", style: "normal"},
          {label: "Thursday", value: "thursday", style: "normal"},
          {label: "Friday", value: "friday", style: "green"},
          {label: "Saturday", value: "saturday", style: "normal"},
          {label: "Sunday", value: "sunday", style: "normal"}
        ]};

      assert.deepEqual(weekdaysData, matchingDays.setDayStyle(weekdaysData, "Friday", "green"));
    });

    it("should return a list of weekdays objects with different weekday style value 'red'.", function() {
      var matchingDays = MatchingDays();

      var weekdaysData = { weekdays: [
          {label: "Monday", value: "monday", style: "red"},
          {label: "Tuesday", value: "tuesday", style: "normal"},
          {label: "Wednesday", value: "wednesday", style: "normal"},
          {label: "Thursday", value: "thursday", style: "normal"},
          {label: "Friday", value: "friday", style: "normal"},
          {label: "Saturday", value: "saturday", style: "normal"},
          {label: "Sunday", value: "sunday", style: "normal"}
        ]};

      assert.deepEqual(weekdaysData, matchingDays.setDayStyle(weekdaysData, "Monday", "red"));
    });

    it("should return a list of weekdays objects with different weekday style value 'blue'.", function() {
      var matchingDays = MatchingDays();

      var weekdaysData = { weekdays: [
          {label: "Monday", value: "monday", style: "normal"},
          {label: "Tuesday", value: "tuesday", style: "normal"},
          {label: "Wednesday", value: "wednesday", style: "blue"},
          {label: "Thursday", value: "thursday", style: "normal"},
          {label: "Friday", value: "friday", style: "normal"},
          {label: "Saturday", value: "saturday", style: "normal"},
          {label: "Sunday", value: "sunday", style: "normal"}
        ]};

      assert.deepEqual(weekdaysData, matchingDays.setDayStyle(weekdaysData, "Wednesday", "blue"));
    });

});
