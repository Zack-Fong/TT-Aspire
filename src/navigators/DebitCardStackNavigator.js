import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

import SetWeeklySpendingLimitScreen from '../screens/SetWeeklySpendingLimitScreen';

import { NAVIGATORS_SCREEN_NAME } from '../common/constants';

const DebitCardStack = createNativeStackNavigator();

class DebitCardStackNavigator extends React.PureComponent {
    render() {
        return (
            <DebitCardStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <DebitCardStack.Screen
                    name={NAVIGATORS_SCREEN_NAME.STACK.DEBIT_CARD}
                    component={TabNavigator}
                />
                <DebitCardStack.Screen
                    name={NAVIGATORS_SCREEN_NAME.STACK.SPENDING_LIMIT}
                    component={SetWeeklySpendingLimitScreen}
                />
            </DebitCardStack.Navigator>
        )
    }
}
export default DebitCardStackNavigator;