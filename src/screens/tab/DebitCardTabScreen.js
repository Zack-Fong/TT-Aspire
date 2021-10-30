import React from 'react';
import { View, TouchableOpacity, Image, Text, Switch, Alert } from 'react-native';
import { connect } from 'react-redux';
import ProgressBar from 'react-native-progress/Bar';

import { images } from '../../assets/assets';
import { FONT_FAMILY } from '../../assets/fonts';
import { COLORS } from '../../assets/colors';

import ScrollViewComponent from '../../component/ScrollView';
import DebitCardView from '../../component/DebitCardView';

import { SCREEN_TITLE, NAVIGATORS_SCREEN_NAME, TEXT_CONSTANTS } from '../../common/constants';
import { isObjectEmpty, isNumberEmpty, formatNumberIntoMoney, getCurrencySymbolFromCurrencyCode, convertFractionToDecimal } from '../../common/functions';

import { retrieveDebitCardDetails, saveWeeklySpendingLimit } from '../../api/apiServices';

const mapStateToProps = state => {
    return {
        cardDetails: state.cardDetailsReducer.cardDetails
    };
};

class DebitCardTabScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action

            this.setState({
                isLoading: true
            }, () => {
                retrieveDebitCardDetails()
                    .then(() => {
                        this.setState({
                            isLoading: false
                        })
                    }).catch((error) => {
                        console.log("retrieveDebitCardDetailsError: ", error);

                        this.setState({
                            isLoading: false
                        })

                        Alert.alert(
                            TEXT_CONSTANTS.OOPS,
                            TEXT_CONSTANTS.DEFAULT_RETRIEVE_CARD_DETAILS_ERROR_MESSAGE,
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
        });
    }

    onPressWeeklySpendingLimit = () => {
        if (!isNumberEmpty(this.props.cardDetails.weeklySpendingLimit)) {
            this.setState({
                isLoading: true
            }, () => {
                saveWeeklySpendingLimit(null)
                    .then(() => {
                        Alert.alert(
                            TEXT_CONSTANTS.SUCCESS,
                            TEXT_CONSTANTS.DEFAULT_DEACTIVATE_WEEKLY_LIMIT_SUCCESS_MESSAGE,
                            [
                                {
                                    text: "OK", onPress: () => {
                                        retrieveDebitCardDetails()
                                            .then(() => {
                                                this.setState({
                                                    isLoading: false
                                                })
                                            }).catch((retrieveDebitCardError) => {
                                                console.log("retrieveDebitCardDetailsError: ", retrieveDebitCardError);

                                                this.setState({
                                                    isLoading: false
                                                })

                                                Alert.alert(
                                                    TEXT_CONSTANTS.OOPS,
                                                    TEXT_CONSTANTS.DEFAULT_RETRIEVE_CARD_DETAILS_ERROR_MESSAGE,
                                                    [
                                                        {
                                                            text: "Noted",
                                                            onPress: () => console.log("Cancel Pressed"),
                                                            style: "cancel"
                                                        }
                                                    ]
                                                );
                                            })
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
                            TEXT_CONSTANTS.DEFAULT_DEACTIVATE_WEEKLY_LIMIT_ERROR_MESSAGE,
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
        } else {
            this.props.navigation.navigate(NAVIGATORS_SCREEN_NAME.STACK.SPENDING_LIMIT);
        }
    }

    render() {
        return (
            <ScrollViewComponent
                showAvailableBalance
                isLoading={this.state.isLoading}
                screenTitle={SCREEN_TITLE.DEBIT_CARD}
            >
                <View style={{ marginRight: 24, marginLeft: 24, marginTop: -100 }}>
                    <DebitCardView />

                    {!isNumberEmpty(this.props.cardDetails.weeklySpendingLimit) ?
                        <View style={{ flex: 1, marginTop: 32, }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontFamily: FONT_FAMILY.MEDIUM, fontSize: 13 }}>
                                    {TEXT_CONSTANTS.DEBIT_CARD_SPENDING_LIMIT}
                                </Text>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ fontFamily: FONT_FAMILY.DEMI_BOLD, fontSize: 13, color: COLORS.LIGHT_GREEN, marginRight: 5 }}>
                                        {formatNumberIntoMoney(this.props.cardDetails.weeklyExpenditure, this.props.cardDetails.currencyCode, true)}
                                    </Text>
                                    <Text style={{ fontFamily: FONT_FAMILY.MEDIUM, fontSize: 13, color: COLORS.TEXT_LIGHT_GRAY }}>
                                        {"| "}
                                    </Text>
                                    <Text style={{ fontFamily: FONT_FAMILY.MEDIUM, fontSize: 13, color: COLORS.TEXT_LIGHT_GRAY }}>
                                        {formatNumberIntoMoney(this.props.cardDetails.weeklySpendingLimit, this.props.cardDetails.currencyCode, true)}
                                    </Text>
                                </View>
                            </View>

                            <ProgressBar progress={convertFractionToDecimal(this.props.cardDetails.weeklyExpenditure, this.props.cardDetails.weeklySpendingLimit)} color={COLORS.LIGHT_GREEN} unfilledColor={COLORS.LIGHT_GREEN_SHADE} width={null} height={15} borderRadius={30} />
                        </View> : null}
                    <TouchableOpacity style={{ flex: 1, flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <Image
                            style={{
                                width: 32,
                                height: 32
                            }}
                            source={images.topupIcon}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.MEDIUM }}>
                                {TEXT_CONSTANTS.TOPUP_ACCOUNT_TITLE}
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: FONT_FAMILY.Regular }}>
                                {TEXT_CONSTANTS.TOPUP_ACCOUNT_DESCRIPTION}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: "row", marginTop: 32, alignItems: "center" }} onPress={this.onPressWeeklySpendingLimit}>
                        <Image
                            style={{
                                width: 32,
                                height: 32
                            }}
                            source={images.weeklySpendingLimitIcon}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.MEDIUM }}>
                                {TEXT_CONSTANTS.WEEKLY_SPENDING_LIMIT_TITLE}
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: FONT_FAMILY.Regular }}>
                                {!isNumberEmpty(this.props.cardDetails.weeklySpendingLimit) ? TEXT_CONSTANTS.WEEKLY_SPENDING_LIMIT_DESCRIPTION + getCurrencySymbolFromCurrencyCode(this.props.cardDetails.currencyCode) + formatNumberIntoMoney(this.props.cardDetails.weeklySpendingLimit, this.props.cardDetails.currencyCode) : TEXT_CONSTANTS.NO_WEEKLY_SPENDING_LIMIT_DESCRIPTION}
                            </Text>
                        </View>

                        <Switch
                            trackColor={{ false: COLORS.GRAY, true: COLORS.LIGHT_GREEN }}
                            value={isObjectEmpty(this.props.cardDetails) ? false : !isNumberEmpty(this.props.cardDetails.weeklySpendingLimit)}
                            onValueChange={this.onPressWeeklySpendingLimit}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <Image
                            style={{
                                width: 32,
                                height: 32
                            }}
                            source={images.freezeIcon}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.MEDIUM }}>
                                {TEXT_CONSTANTS.FREEZE_CARD_TITLE}
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: FONT_FAMILY.Regular }}>
                                {TEXT_CONSTANTS.FREEZE_CARD_DESCRIPTION}
                            </Text>
                        </View>

                        <Switch
                            disabled
                            trackColor={{ false: COLORS.GRAY, true: COLORS.LIGHT_GREEN }}
                            value={isObjectEmpty(this.props.cardDetails) ? false : !this.props.cardDetails.active}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <Image
                            style={{
                                width: 32,
                                height: 32
                            }}
                            source={images.weeklySpendingLimitIcon}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.MEDIUM }}>
                                {TEXT_CONSTANTS.GET_A_NEW_CARD_TITLE}
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: FONT_FAMILY.Regular }}>
                                {TEXT_CONSTANTS.GET_A_NEW_CARD_DESCRIPTION}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: "row", marginTop: 32, alignItems: "center" }}>
                        <Image
                            style={{
                                width: 32,
                                height: 32
                            }}
                            source={images.newCardIcon}
                        />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={{ fontSize: 14, fontFamily: FONT_FAMILY.MEDIUM }}>
                                {TEXT_CONSTANTS.DEACTIVATED_CARD_TITLE}
                            </Text>
                            <Text style={{ fontSize: 13, fontFamily: FONT_FAMILY.Regular }}>
                                {TEXT_CONSTANTS.DEACTIVATED_CARD_DESCRIPTION}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollViewComponent>
        )
    }
}
export default connect(mapStateToProps)(DebitCardTabScreen);