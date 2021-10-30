import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from "react-redux";

import { defaultStyles } from "../common/constants";
import { isObjectEmpty } from "../common/functions";

import ActivityIndicatorComponent from "./ActivityIndicator";
import ScreenTitleComponent from "./ScreenTitle";
import HeaderComponent from "./Header";
import MoneyBalanceComponent from "./MoneyBalance";

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class ScrollViewComponent extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={defaultStyles.container}>
                <HeaderComponent showBackArrow={this.props.spendingLimit ? true : false} onPressBackArrow={this.props.onPressBackArrow} />
                <ScrollView style={[defaultStyles.scrollView]} contentContainerStyle={{ flexGrow: 1 }}>
                    <ScreenTitleComponent screenTitle={this.props.screenTitle} />

                    {this.props.showAvailableBalance ?
                        <View style={{ marginTop: 14 }}>
                            <MoneyBalanceComponent showAvailableBalance money={isObjectEmpty(this.props.cardDetails) ? "" : this.props.cardDetails.balance} />
                        </View> : null}

                    <View style={[defaultStyles.scrollViewChildren, { marginTop: 98 }]}>
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

export default connect(mapStateToProps)(ScrollViewComponent);