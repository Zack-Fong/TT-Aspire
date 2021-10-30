import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabScreen from "../screens/tab/HomeTabScreen";
import PaymentsTabScreen from '../screens/tab/PaymentsTabScreen';
import CreditTabScreen from "../screens/tab/CreditTabScreen";
import ProfileTabScreen from "../screens/tab/ProfileTabScreen";
import DebitCardTabScreen from '../screens/tab/DebitCardTabScreen';

import { images } from "../assets/assets";
import { COLORS } from "../assets/colors";

import { NAVIGATORS_SCREEN_NAME } from '../common/constants';
import { isEqual } from "../common/functions";

const Tab = createBottomTabNavigator();

class TabNavigator extends React.PureComponent {
    render() {
        return (
            <Tab.Navigator
                initialRouteName={NAVIGATORS_SCREEN_NAME.TAB.DEBIT_CARD}
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName = "";

                        if (isEqual(route.name, NAVIGATORS_SCREEN_NAME.TAB.HOME)) {
                            iconName = images.homeNotSelectedTabIcon;
                        } else if (isEqual(route.name, NAVIGATORS_SCREEN_NAME.TAB.DEBIT_CARD)) {
                            iconName = images.debitCardSelectedTabIcon;
                        } else if (isEqual(route.name, NAVIGATORS_SCREEN_NAME.TAB.PAYMENTS)) {
                            iconName = images.paymentsNotSelectedTabIcon;
                        } else if (isEqual(route.name, NAVIGATORS_SCREEN_NAME.TAB.CREDIT)) {
                            iconName = images.creditNotSelectedTabIcon;
                        } else if (isEqual(route.name, NAVIGATORS_SCREEN_NAME.TAB.PROFILE)) {
                            iconName = images.profileNotSelectedTabIcon;
                        }

                        // You can return any component that you like here!
                        return <Image source={iconName} />;
                    },
                    tabBarActiveTintColor: COLORS.LIGHT_GREEN,
                    tabBarInactiveTintColor: COLORS.LIGHT_GRAY,

                    headerShown: false
                })}
            >
                <Tab.Screen name={NAVIGATORS_SCREEN_NAME.TAB.HOME} component={HomeTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name={NAVIGATORS_SCREEN_NAME.TAB.DEBIT_CARD} component={DebitCardTabScreen} />
                <Tab.Screen name={NAVIGATORS_SCREEN_NAME.TAB.PAYMENTS} component={PaymentsTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name={NAVIGATORS_SCREEN_NAME.TAB.CREDIT} component={CreditTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name={NAVIGATORS_SCREEN_NAME.TAB.PROFILE} component={ProfileTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
            </Tab.Navigator>
        )
    }
}
export default TabNavigator;