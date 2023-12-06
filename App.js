import React from "react";
import Navigation from "./navigations/navigationConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { LogBox } from "react-native"; // Import LogBox once

function App() {
  LogBox.ignoreAllLogs(); // Ignore all log notifications

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
