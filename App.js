import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import DebitCardStackNavigator from './src/navigators/DebitCardStackNavigator';

require("./server");

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <DebitCardStackNavigator />
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;