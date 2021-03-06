import { TIMEOUT_MILLISECONDS, API_STATUS_CODES, CURRENCY_SYMBOLS } from './constants';

export function getRequest(url, header, parameters) {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setTimeout(() => abortController.abort(), TIMEOUT_MILLISECONDS);

    let options = {
        method: 'GET',
        headers: header,
        body: JSON.stringify(parameters),
        signal: signal
    };

    if (header === null) {
        delete options.headers;
    }

    if (parameters === null) {
        delete options.body;
    }

    return new Promise((resolve, reject) => {
        fetch(url, options).then(response => {
            resolve(response);
        }).catch(error => {
            if (isEqual(error.message, "Failed to fetch")) {
                reject('Experiencing network connectivity issues.')
            } else {
                reject(error);
            }
        });
    });
}

export function postRequest(url, header, parameters, uploadFile) {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setTimeout(() => abortController.abort(), TIMEOUT_MILLISECONDS);

    let options = {
        method: 'POST',
        headers: header,
        body: uploadFile ? parameters : JSON.stringify(parameters),
        signal: signal
    };

    if (header === null) {
        delete options.headers;
    }

    if (parameters === null) {
        delete options.body;
    }

    return new Promise((resolve, reject) => {
        fetch(url, options).then(response => {
            resolve(response);
        }).catch(error => {
            if (isEqual(error.message, "Failed to fetch")) {
                reject('Experiencing network connectivity issues.')
            } else {
                reject(error);
            }
        });
    });
}

export function getStandardHeader() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

export function isSuccessApiCall(httpStatusCode) {
    return API_STATUS_CODES.SUCCESSFUL_CODE.includes(httpStatusCode);
}

export function isJsonString(str) {
    if (isStringEmpty(str)) {
        return false;
    } else {
        try {
            if (typeof JSON.parse(str) === "object") {
                return true;
            }
        } catch (e) {
            return false;
        }

        return false;
    }
}

export function isArray(array) {
    return Array.isArray(array);
}

export function isNumberEmpty(number) {
    return (typeof number === "undefined" || number === null || number === '' || isNaN(Number(number)));
}

export function isStringEmpty(string) {
    return (typeof string === 'undefined' || string === null || string.length === 0);
}

export function isArrayEmpty(array) {
    return (typeof array === 'undefined' || !isArray(array) || array === null || array.length === 0);
}

export function isObjectEmpty(object) {
    return (typeof object !== 'object' || object === null || isArray(object) || (Object.entries(object).length === 0 && object.constructor === Object));
}

export function isEqual(element1, element2) {
    return (element1 === element2);
}

export function capitalizeString(string) {
    var splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

export function getCurrencySymbolFromCurrencyCode(currencyCode) {
    let currencySymbol = "";

    switch (currencyCode) {
        case "SGD":
            currencySymbol = CURRENCY_SYMBOLS.SINGAPORE;
            break;
        default:
            currencySymbol = CURRENCY_SYMBOLS.DEFAULT;
    }
    return currencySymbol;
}

export function formatNumberIntoMoney(number, currencyCode, currencyDisplay) {
    let money = "";

    if (!isNumberEmpty(number)) {
        if (currencyDisplay) {
            money = new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(number)
        } else {
            money = new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
                currencyDisplay: "code",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }).format(number).replace(currencyCode, "")
        }
    }
    return (money)
}

export function convertFractionToDecimal(numerator, denominator) {
    if (!isNumberEmpty(numerator) && numerator > 0 && !isNumberEmpty(denominator) && denominator > 0) {
        return Number((numerator / denominator).toFixed(2));
    } else {
        return 0;
    }
}
