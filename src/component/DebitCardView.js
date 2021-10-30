import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";

import { COLORS } from "../assets/colors";
import { images } from "../assets/assets";
import { FONT_FAMILY } from "../assets/fonts";

import { TEXT_CONSTANTS } from "../common/constants";
import { isObjectEmpty, capitalizeString, isStringEmpty } from "../common/functions";

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class DebitCardViewComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hideCardDetails: true
        }
    }

    onPressHideCardNumber = () => {
        this.setState({
            hideCardDetails: this.state.hideCardDetails ? false : true
        })
    }

    render() {
        let cardNumber = isObjectEmpty(this.props.cardDetails) ? "" : this.props.cardDetails.cardNumber;

        return (
            <View>
                <TouchableOpacity
                    style={{ flexDirection: "row", padding: 5, alignItems: "center", alignSelf: "flex-end", flex: 1, borderColor: "black", backgroundColor: "white", height: 44, borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
                    onPress={this.onPressHideCardNumber}
                >
                    <Image
                        style={{
                            width: 25,
                            height: 25
                        }}
                        source={this.state.hideCardDetails ? images.greenOpenEye : images.greenClosedEye}
                    />
                    <Text style={{ color: COLORS.LIGHT_GREEN, marginLeft: 5 }}>
                        {this.state.hideCardDetails ? TEXT_CONSTANTS.SHOW_CARD_NUMBER : TEXT_CONSTANTS.HIDE_CARD_NUMBER}
                    </Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: COLORS.LIGHT_GREEN, height: 220, borderRadius: 6, marginTop: -5 }}>
                    <Image
                        style={{
                            width: 74,
                            height: 21,
                            marginTop: 24,
                            marginRight: 24,
                            alignSelf: "flex-end"
                        }}
                        source={images.aspireLogo2x}
                    />

                    <Text style={{ color: "white", fontFamily: FONT_FAMILY.BOLD, fontSize: 22, flex: 1, height: 30, marginLeft: 24, marginTop: 20 }}>
                        {isObjectEmpty(this.props.cardDetails) && isStringEmpty(this.props.cardDetails.name) ? "" : capitalizeString(this.props.cardDetails.name)}
                    </Text>

                    <View style={{ height: 17, flexDirection: "row", justifyContent: "space-between", marginLeft: 24, marginRight: 24, marginTop: 5 }}>
                        <Text style={{ flex: 1, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: this.state.hideCardDetails ? 12 : 14 }}>
                            {isStringEmpty(cardNumber) ? "" : (this.state.hideCardDetails ? '\u2B24' + '\u2B24' + '\u2B24' + '\u2B24' : cardNumber.substring(0, 4))}
                        </Text>
                        <Text style={{ flex: 1, marginLeft: 3, marginRight: 3, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: this.state.hideCardDetails ? 12 : 14 }}>
                            {isStringEmpty(cardNumber) ? "" : (this.state.hideCardDetails ? '\u2B24' + '\u2B24' + '\u2B24' + '\u2B24' : cardNumber.substring(4, 8))}
                        </Text>
                        <Text style={{ flex: 1, marginRight: 3, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: this.state.hideCardDetails ? 12 : 14 }}>
                            {isStringEmpty(cardNumber) ? "" : (this.state.hideCardDetails ? '\u2B24' + '\u2B24' + '\u2B24' + '\u2B24' : cardNumber.substring(8, 12))}
                        </Text>
                        <Text style={{ flex: 1, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: this.state.hideCardDetails ? 12 : 14 }}>
                            {isStringEmpty(cardNumber) ? "" : (this.state.hideCardDetails ? '\u2B24' + '\u2B24' + '\u2B24' + '\u2B24' : cardNumber.substring(12, 16))}
                        </Text>
                    </View>

                    <View style={{ height: 17, flexDirection: "row", justifyContent: "space-between", marginLeft: 24, marginRight: 24, marginTop: 5 }}>
                        <Text style={{ flex: 1, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: 13 }}>
                            {"Thru: " + (isObjectEmpty(this.props.cardDetails) ? "" : this.props.cardDetails.expiryDate)}
                        </Text>
                        <Text style={{ flex: 1, marginLeft: 5, color: "white", fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: 13 }}>
                            {"CVV: " + (isObjectEmpty(this.props.cardDetails) ? "" : (this.state.hideCardDetails ? "***" : this.props.cardDetails.cvv))}
                        </Text>
                    </View>

                    <Image
                        style={{
                            width: 59,
                            height: 20,
                            marginBottom: 24,
                            marginRight: 24,
                            alignSelf: "flex-end"
                        }}
                        source={images.visaLogo2x}
                    />
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(DebitCardViewComponent);