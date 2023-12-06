import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

const Date = () => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      // onDayPress={(day) => {
      //     console.log("selected day", day);
      //   }}

      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
};

export default Date;
