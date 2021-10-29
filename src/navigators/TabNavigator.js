import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabScreen from "../screens/tab/HomeTabScreen";
import PaymentsTabScreen from '../screens/tab/PaymentsTabScreen';
import DebitCardTabScreen from '../screens/tab/DebitCardTabScreen';
import CreditTabScreen from "../screens/tab/CreditTabScreen";
import ProfileTabScreen from "../screens/tab/ProfileTabScreen";

import { images } from "../assets/assets";
import { COLORS } from "../common/colors";

const Tab = createBottomTabNavigator();

class TabNavigator extends React.PureComponent {
    render() {
        return (
            <Tab.Navigator
                initialRouteName={"Debit Card"}
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = images.homeNotSelectedTabIcon;
                        } else if (route.name === 'Debit Card') {
                            iconName = images.debitCardSelectedTabIcon;
                        } else if (route.name === 'Payments') {
                            iconName = images.paymentsNotSelectedTabIcon;
                        } else if (route.name === 'Credit') {
                            iconName = images.creditNotSelectedTabIcon;
                        } else if (route.name === 'Profile') {
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
                <Tab.Screen name="Home" component={HomeTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name="Debit Card" component={DebitCardTabScreen} />
                <Tab.Screen name="Payments" component={PaymentsTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name="Credit" component={CreditTabScreen} listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }} />
                <Tab.Screen name="Profile" component={ProfileTabScreen} listeners={{
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