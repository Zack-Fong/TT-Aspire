import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import { images } from '../assets/assets';
import { FONT_FAMILY } from '../assets/fonts';
import { COLORS } from '../assets/colors';

import { SCREEN_TITLE, TEXT_CONSTANTS } from '../common/constants';
import { isObjectEmpty, getCurrencySymbolFromCurrencyCode, isNumberEmpty, isEqual } from '../common/functions';

import ScrollViewComponent from '../component/ScrollView';
import MoneyBalanceComponent from "../component/MoneyBalance";

import { saveWeeklySpendingLimit } from '../api/apiServices';

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class SetWeeklySpendingLimitScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            limitAmount: ""
        }
    }

    onPressBackArrow = () => {
        this.props.navigation.goBack();
    }

    onPressSaveButton = () => {
        if (isNumberEmpty(this.state.limitAmount)) {
            Alert.alert(
                TEXT_CONSTANTS.OOPS,
                TEXT_CONSTANTS.EMPTY_WEEKLY_LIMIT,
                [
                    {
                        text: "Noted",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    }
                ]
            );
        } else {
            this.setState({
                isLoading: true
            }, () => {
                saveWeeklySpendingLimit(this.state.limitAmount)
                    .then(() => {
                        Alert.alert(
                            TEXT_CONSTANTS.SUCCESS,
                            TEXT_CONSTANTS.DEFAULT_SAVE_WEEKLY_LIMIT_SUCCESS_MESSAGE,
                            [
                                {
                                    text: "OK", onPress: () => {
                                        this.props.navigation.goBack();
                                    }
                                }
                            ]
                        );
                    }).catch((saveWeeklySpendingLimitError) => {
                        console.log("saveWeeklySpendingLimitError: ", saveWeeklySpendingLimitError);

                        this.setState({
                            isLoading: false
                        })

                        Alert.alert(
                            TEXT_CONSTANTS.OOPS,
                            TEXT_CONSTANTS.DEFAULT_SAVE_WEEKLY_LIMIT_ERROR_MESSAGE,
                            [
                                {
                                    text: "Noted",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                }
                            ]
                        );
                    })
            })
        }
    }

    render() {
        return (
            <ScrollViewComponent
                spendingLimit
                isLoading={this.state.isLoading}
                screenTitle={SCREEN_TITLE.SPENDING_LIMIT}
                onPressBackArrow={this.onPressBackArrow}
            >
                <View style={{ flexDirection: "row", marginTop: 33, marginLeft: 24, alignItems: "center" }}>
                    <Image
                        source={images.weeklySpendingLimitTransparentIcon}
                        style={{
                            width: 25,
                            height: 25
                        }} />
                    <Text style={{ flex: 1, marginLeft: 12, fontFamily: FONT_FAMILY.MEDIUM, fontSize: 14 }}>
                        {TEXT_CONSTANTS.SET_WEEKLY_SPENDING_LIMIT}
                    </Text>
                </View>

                <MoneyBalanceComponent black showBottomWidth money={this.state.limitAmount} />

                <Text style={{ height: 18, marginLeft: 24, marginTop: 12, fontFamily: FONT_FAMILY.Regular, fontSize: 13, color: COLORS.TEXT_LIGHT_GRAY }}>
                    {TEXT_CONSTANTS.WEEKLY_DEFINITION}
                </Text>

                <View style={{ justifyContent: "space-between", flexDirection: "row", marginLeft: 24, marginRight: 24, marginTop: 32 }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                limitAmount: isEqual(this.state.limitAmount, 5000) ? "" : 5000
                            })
                        }}
                        style={{
                            height: 40, flex: 1, borderRadius: 4, justifyContent: "center", backgroundColor: COLORS.LIGHT_GREEN_SHADE
                        }}>
                        < Text style={{ textAlign: 'center', color: COLORS.LIGHT_GREEN }}>
                            {(isObjectEmpty(this.props.cardDetails) ? getCurrencySymbolFromCurrencyCode("") : getCurrencySymbolFromCurrencyCode(this.props.cardDetails.currencyCode)) + " 5, 000"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                limitAmount: isEqual(this.state.limitAmount, 10000) ? "" : 10000
                            })
                        }}
                        style={{
                            height: 40, flex: 1, marginLeft: 5, marginRight: 5, borderRadius: 4, justifyContent: "center", backgroundColor: COLORS.LIGHT_GREEN_SHADE
                        }}>
                        < Text style={{ textAlign: 'center', color: COLORS.LIGHT_GREEN }}>
                            {(isObjectEmpty(this.props.cardDetails) ? getCurrencySymbolFromCurrencyCode("") : getCurrencySymbolFromCurrencyCode(this.props.cardDetails.currencyCode)) + " 10, 000"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                limitAmount: isEqual(this.state.limitAmount, 20000) ? "" : 20000
                            })
                        }}
                        style={{
                            height: 40, flex: 1, borderRadius: 4, justifyContent: "center", backgroundColor: COLORS.LIGHT_GREEN_SHADE
                        }}>
                        < Text style={{ textAlign: 'center', color: COLORS.LIGHT_GREEN }}>
                            {(isObjectEmpty(this.props.cardDetails) ? getCurrencySymbolFromCurrencyCode("") : getCurrencySymbolFromCurrencyCode(this.props.cardDetails.currencyCode)) + " 20, 000"}
                        </Text>
                    </TouchableOpacity>
                </View >

                <TouchableOpacity
                    onPress={this.onPressSaveButton}
                    style={{ height: 56, marginTop: "60%", marginLeft: 57, marginRight: 57, marginBottom: 20, backgroundColor: COLORS.LIGHT_GREEN, borderRadius: 30, justifyContent: "center" }}>
                    <Text style={{ textAlign: 'center', color: "white" }}>
                        {"Save"}
                    </Text>
                </TouchableOpacity>
            </ScrollViewComponent >
        )
    }
}
export default connect(mapStateToProps)(SetWeeklySpendingLimitScreen);