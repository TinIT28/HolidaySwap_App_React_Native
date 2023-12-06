import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  getDateRangeBooking,
  getDateRangeOut,
} from "../../redux/actions/dateRangeActions";
import { format } from "date-fns";
import CalendarPicker from "react-native-calendar-picker";

export default function InputDateComponents({
  handleDateRange,
  dateRange,
  handleChangeDateRange,
}) {
  // Use local state to store the selected date range
  const [dateRangeBooking, setDateRangeBooking] = useState(dateRange);

  const { dateRangeBooking: dateRangeRedux } = useSelector(
    (state) => state.dateRangeBooking
  );
  const { dateRangeDefault } = useSelector((state) => state.dateRangeDefault);
  const { dateRangeOut } = useSelector((state) => state.dateOut);
  const { apartment, loading } = useSelector((state) => state.apartmentDetail);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  // Function to handle date range changes
  const onDateRangeChange = (value, type) => {
    let timeBooked = apartment.timeHasBooked;
    if (type === "END_DATE") {
      setEndDate(value);
    } else {
      setEndDate(null);
      setStartDate(value);

      timeBooked.forEach((element) => {
        let checkIn = new Date(element.checkIn);
        let checkOut = new Date(element.checkOut);
        if (startDate > checkIn) {
          const result = dateRangeOut.filter(
            (date) => date.getTime() != checkOut.getTime()
          );
          dispatch(getDateRangeOut([...result, ...[checkIn]]));
        } else if (startDate < checkIn) {
          const result = dateRangeOut.filter(
            (date) => date.getTime() != checkIn.getTime()
          );
          dispatch(getDateRangeOut([...result, ...[checkOut]]));
        }
      });
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      dispatch(
        getDateRangeBooking({
          startTimeBooking: new Date(startDate),
          endTimeBooking: new Date(endDate),
        })
      );
    }
  }, [startDate, endDate, dispatch]);

  return (
    <View className="w-full h-[800px]">
      {/* <Calendar
        startDate={format(
          new Date(dateRangeRedux.startTimeBooking),
          "yyyy-MM-dd"
        )}
        endDate={format(new Date(dateRangeRedux.endTimeBooking), "yyyy-MM-dd")}
        disabledBeforeToday
        futureYearRange={30}
        onChange={onDateRangeChange}
      /> */}
      <CalendarPicker
        startFromMonday={true}
        initialDate={new Date(dateRangeRedux.startTimeBooking)}
        // selectedStartDate={new Date(dateRangeRedux.startTimeBooking)}
        // selectedEndDate={new Date(dateRangeRedux.endTimeBooking)}
        allowRangeSelection={true}
        minDate={new Date(dateRangeDefault.startTimeDefault)}
        maxDate={new Date(dateRangeDefault.endTimeDefault)}
        selectedDayColor="#5C98F2"
        todayBackgroundColor="#5C98F2"
        selectedDayTextColor="#000000"
        scaleFactor={375}
        onDateChange={onDateRangeChange}
        disabledDates={dateRangeOut}
      />
    </View>
  );
}
