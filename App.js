import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import TabNavigator from './src/navigators/TabNavigator';
require("./server");

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;