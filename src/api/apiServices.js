import { API_PATHS } from "../common/constants";
import { getStandardHeader, getRequest, isSuccessApiCall, postRequest, isNumberEmpty } from "../common/functions";

import store from "../redux/store";
import { saveCardDetails } from "../redux/cardDetails/cardDetailsAction";

export function retrieveDebitCardDetails() {
    return new Promise((resolve, reject) => {
        let url = API_PATHS.BASE + API_PATHS.GET_DETAILS;

        let header = getStandardHeader();
        let parameter = null;

        getRequest(url, header, parameter)
            .then((response) => {
                response.json().then(responseJson => {
                    if (isSuccessApiCall(response.status)) {
                        store.dispatch(saveCardDetails(responseJson.debitCardDetails));
                        resolve();
                    } else {
                        reject(responseJson);
                    }
                })
            }).catch(error => {
                reject(error);
            })
    })
}

export function saveWeeklySpendingLimit(weeklySpendingLimit) {
    return new Promise((resolve, reject) => {
        let url = API_PATHS.BASE + API_PATHS.SET_LIMIT;

        let header = getStandardHeader();
        let parameter = {
            weeklySpendingLimit: isNumberEmpty(weeklySpendingLimit) ? null : weeklySpendingLimit
        };

        postRequest(url, header, parameter)
            .then((response) => {
                response.json().then(responseJson => {
                    if (isSuccessApiCall(response.status)) {
                        resolve(responseJson);
                    } else {
                        reject(responseJson);
                    }
                })
            }).catch(error => {
                reject(error);
            })
    })
}