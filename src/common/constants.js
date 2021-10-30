import { StyleSheet } from "react-native";

import { COLORS } from "./colors";

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
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
    }
});

export const TEXT_CONSTANTS = {
    UNABLE_TO_FETCH: "Experiencing network connectivity issues.",
    TIMEOUT: 'Seems like there is a network problem, please refresh page',

    //Alert Header String
    SUCCESS: "Success",
    OOPS: "Oops",
}