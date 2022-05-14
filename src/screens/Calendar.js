import React from "react";

import { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Provider, Appbar } from "react-native-paper";
import { Calendar } from "react-native-calendars";

export default function ({ navigation }) {
  const _goBack = () => console.log("Went back");
  const _handleSearch = () => console.log("Searching");
  const _handleMore = () => console.log("Shown more");

  return (
    <Provider>
      <Appbar.Header>
        <Appbar.Content title="Calendar" />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View>
        <Calendar
          current={"2022-10-30"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2021-10-30"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2022-10-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
    </Provider>
  );
}
