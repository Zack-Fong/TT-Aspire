import { StyleSheet } from "react-native";

import { COLORS } from "../assets/colors";

export const TIMEOUT_MILLISECONDS = 30000;  //30 seconds
export const INTERVAL_MILLISECONDS = {
    CHECK_PROMISES_DONE: 200,
    INTERVAL: 200
}

export const API_STATUS_CODES = {
    SUCCESSFUL_CODE: [200, 201],
    BAD_REQUEST: [400],
    UNAUTHORIZED_CODE: [401],
    FORBIDDEN_CODE: [403],
    NOT_FOUND_CODE: [404]
}
export const API_PATHS = {
    BASE: "/api",
    GET_DETAILS: "/getDetails",
    SET_LIMIT: "/setLimit"
}

export const CURRENCY_SYMBOLS = {
    SINGAPORE: "S$",
    DEFAULT: "$"
}
export const DEFAULT_CURRENCY_CODE = "SGD";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.DARK_BLUE
    },
    scrollView: {
        flex: 1,
        backgroundColor: COLORS.DARK_BLUE
    },
    scrollViewChildren: {
        width: '100%',
        height: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24
    }
});

export const NAVIGATORS_SCREEN_NAME = {
    STACK: {
        DEBIT_CARD: "Debit Card Stack",
        SPENDING_LIMIT: "Spending Limit"
    },
    TAB: {
        HOME: "Home",
        DEBIT_CARD: "Debit Card",
        PAYMENTS: "Payments",
        CREDIT: "Credit",
        PROFILE: "Profile"
    }
}

export const SCREEN_TITLE = {
    DEBIT_CARD: "Debit Card",
    SPENDING_LIMIT: "Spending limit"
}

export const TEXT_CONSTANTS = {
    UNABLE_TO_FETCH: "Experiencing network connectivity issues.",
    TIMEOUT: 'Seems like there is a network problem, please refresh page',

    //Alert Header String
    SUCCESS: "Success",
    OOPS: "Oops",

    DEFAULT_RETRIEVE_CARD_DETAILS_ERROR_MESSAGE: "Error encountered in retrieving card details.",

    AVAILABLE_BALANCE: "Available balance",

    SHOW_CARD_NUMBER: "Show card number",
    HIDE_CARD_NUMBER: "Hide card number",

    DEBIT_CARD_SPENDING_LIMIT: "Debit card spending limit",

    TOPUP_ACCOUNT_TITLE: "Top-up account",
    TOPUP_ACCOUNT_DESCRIPTION: "Deposit money to your account to use with card",

    WEEKLY_SPENDING_LIMIT_TITLE: "Weekly spending limit",
    NO_WEEKLY_SPENDING_LIMIT_DESCRIPTION: "You haven't set any spending limit on card",
    WEEKLY_SPENDING_LIMIT_DESCRIPTION: "Your weekly spending limit is ",

    FREEZE_CARD_TITLE: "Freeze card",
    FREEZE_CARD_DESCRIPTION: "Your debit card is currently active",

    GET_A_NEW_CARD_TITLE: "Get a new card",
    GET_A_NEW_CARD_DESCRIPTION: "This deactivated your current debit card",

    DEACTIVATED_CARD_TITLE: "Deactivated cards",
    DEACTIVATED_CARD_DESCRIPTION: "Your previously deactivated cards",

    EMPTY_WEEKLY_LIMIT: "No weekly spending limit is selected.",
    DEFAULT_DEACTIVATE_WEEKLY_LIMIT_ERROR_MESSAGE: "Error encountered in deactivating weekly spending limit.",
    DEFAULT_DEACTIVATE_WEEKLY_LIMIT_SUCCESS_MESSAGE: "Successfully deactivated weekly spending limit.",
    DEFAULT_SAVE_WEEKLY_LIMIT_ERROR_MESSAGE: "Error encountered in saving weekly spending limit.",
    DEFAULT_SAVE_WEEKLY_LIMIT_SUCCESS_MESSAGE: "Successfully saved weekly spending limit.",

    SET_WEEKLY_SPENDING_LIMIT: "Set a weekly debit card spending limit",
    WEEKLY_DEFINITION: "Here weekly means the last 7 days - not the calender week"
}