import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { FONT_FAMILY } from "../assets/fonts";
import { COLORS } from "../assets/colors";

import { formatNumberIntoMoney, isObjectEmpty } from "../common/functions";
import { DEFAULT_CURRENCY_CODE, TEXT_CONSTANTS } from "../common/constants";

import CurrencySymbolComponent from "./CurrencySymbol";

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class MoneyBalanceComponent extends React.PureComponent {
    render() {
        return (
            <View style={{ borderBottomColor: "#E5E5E5", borderBottomWidth: this.props.showBottomWidth ? 1 : undefined, marginTop: 13, marginLeft: 24, marginRight: 24 }}>
                {this.props.showAvailableBalance ?
                    <Text style={{ fontFamily: FONT_FAMILY.MEDIUM, fontSize: 14, color: "white", height: 19, marginBottom: 10 }}>
                        {TEXT_CONSTANTS.AVAILABLE_BALANCE}
                    </Text> : null}
                <View style={{ height: 33, flexDirection: "row", marginBottom: 10, alignItems: "center" }}>
                    <CurrencySymbolComponent />
                    <Text style={{ marginLeft: 10, fontFamily: FONT_FAMILY.BOLD, textAlign: "center", fontSize: 24, color: this.props.black ? COLORS.EERIE_BLACK : "white" }}>
                        {formatNumberIntoMoney(this.props.money, isObjectEmpty(this.props.cardDetails) ? DEFAULT_CURRENCY_CODE : this.props.cardDetails.currencyCode)}
                    </Text>
                </View>
            </View>
        )
    }
}
export default connect(mapStateToProps)(MoneyBalanceComponent);