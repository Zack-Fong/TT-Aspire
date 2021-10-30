import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ActivityIndicatorComponent from "./ActivityIndicator";

import { defaultStyles } from "../common/constants";

class ScrollViewComponent extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={defaultStyles.container}>
                <ScrollView style={[defaultStyles.scrollView]} contentContainerStyle={{ flex: 1 }}>
                    <View style={[defaultStyles.scrollViewChildren, { marginTop: this.props.spendingLimit ? 156 : 256 }]}>
                        {this.props.children}
                    </View>

                    <ActivityIndicatorComponent
                        isShow={this.props.isLoading}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default ScrollViewComponent;