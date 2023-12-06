import React, { useState } from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";
import { useDispatch, useSelector } from "react-redux";
import { getDateRangeBooking } from "../../redux/actions/dateRangeActions";
import { format } from "date-fns";

export default function InputDateSearch({ handleDateRange, dateRange }) {
  // Use local state to store the selected date range

  // Function to handle date range changes
  const onDateRangeChange = (value) => {
    handleDateRange(value);
  };

  return (
    <View className="w-full h-[800px]">
      <Calendar
        startDate={format(new Date(dateRange.startDate), "yyyy-MM-dd")}
        endDate={format(new Date(dateRange.endDate), "yyyy-MM-dd")}
        disabledBeforeToday
        futureYearRange={30}
        onChange={onDateRangeChange}
      />
    </View>
  );
}
