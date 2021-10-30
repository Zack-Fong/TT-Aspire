import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { FONT_FAMILY } from "../assets/fonts";
import { COLORS } from "../assets/colors";

import { isObjectEmpty, getCurrencySymbolFromCurrencyCode } from "../common/functions";

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class CurrencySymbolComponent extends React.PureComponent {
    render() {
        return (
            <View style={{ borderRadius: 4, backgroundColor: COLORS.LIGHT_GREEN, width: 40, height: 24, justifyContent: "center" }}>
                <Text style={{ color: "white", fontFamily: FONT_FAMILY.BOLD, fontSize: 13, textAlign: "center" }}>
                    {isObjectEmpty(this.props.cardDetails) ? getCurrencySymbolFromCurrencyCode("") : getCurrencySymbolFromCurrencyCode(this.props.cardDetails.currencyCode)}
                </Text>
            </View>
        )
    }
}
export default connect(mapStateToProps)(CurrencySymbolComponent);