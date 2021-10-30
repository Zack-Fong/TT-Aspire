import { isEqual, isArrayEmpty, isArray, isStringEmpty, isNumberEmpty, isObjectEmpty, capitalizeString, isSuccessApiCall, getCurrencySymbolFromCurrencyCode, convertFractionToDecimal } from '../src/common/functions';

describe('isEqual', () => {
    test("123, ''", () => {
        expect(isEqual(123, '')).toBe(false);
    })

    test("123, ''", () => {
        expect(!isEqual(123, '')).toBe(true);
    })

    test("123, '123'", () => {
        expect(isEqual(123, '123')).toBe(false);
    })

    test("123, '123'", () => {
        expect(!isEqual(123, '')).toBe(true);
    })

    test("123, 123", () => {
        expect(!isEqual(123, 123)).toBe(false);
    })

    test("123, 123", () => {
        expect(isEqual(123, 123)).toBe(true);
    })
})

describe('isArray', () => {
    test("[]", () => {
        expect(isArray([])).toBe(true);
    })

    test("[]", () => {
        expect(!isArray([])).toBe(false);
    })

    test("null", () => {
        expect(!isArray("null")).toBe(true);
    })

    test("[{amount: 1, id: '123'}]", () => {
        expect(isArray([{ amount: 1, id: '123' }])).toBe(true);
    })

    test("undefined", () => {
        expect(!isArray(undefined)).toBe(true);
    })
})

describe('isArrayEmpty', () => {
    test("[]", () => {
        expect(isArrayEmpty([])).toBe(true);
    })

    test("[]", () => {
        expect(!isArrayEmpty([])).toBe(false);
    })

    test("null", () => {
        expect(isArrayEmpty(null)).toBe(true);
    })

    test("null", () => {
        expect(!isArrayEmpty("null")).toBe(false);
    })

    test("[{amount: 1, id: '123'}]", () => {
        expect(isArrayEmpty([{ amount: 1, id: '123' }])).toBe(false);
    })

    test("[{amount: 1, id: '123'}]", () => {
        expect(!isArrayEmpty([{ amount: 1, id: '123' }])).toBe(true);
    })
})

describe('isObjectEmpty', () => {
    test("{}", () => {
        expect(isObjectEmpty({})).toBe(true);
    })

    test("{}", () => {
        expect(!isObjectEmpty({})).toBe(false);
    })

    test("null", () => {
        expect(isObjectEmpty(null)).toBe(true);
    })

    test("null", () => {
        expect(!isObjectEmpty("null")).toBe(false);
    })

    test("[{amount: 1, id: '123'}]", () => {
        expect(isObjectEmpty([{ amount: 1, id: '123' }])).toBe(true);
    })

    test("{ amount: 1, id: '123' }", () => {
        expect(!isObjectEmpty({ amount: 1, id: '123' })).toBe(true);
    })
})

describe('iStringEmpty', () => {
    test("[]", () => {
        expect(isStringEmpty([])).toBe(true);
    })

    test("null", () => {
        expect(isStringEmpty(null)).toBe(true);
    })

    test("null", () => {
        expect(!isStringEmpty("null")).toBe(true);
    })

    test("[{amount: 1, id: '123'}]", () => {
        expect(!isStringEmpty([{ amount: 1, id: '123' }])).toBe(true);
    })
})

describe('isNumberEmpty', () => {
    test("", () => {
        expect(isNumberEmpty("")).toBe(true);
    })

    test("", () => {
        expect(!isNumberEmpty("")).toBe(false);
    })

    test("12ghh", () => {
        expect(isNumberEmpty("12ghh")).toBe(true);
    })

    test("12.12", () => {
        expect(!isNumberEmpty("12.12")).toBe(true);
    })

    test("0", () => {
        expect(isNumberEmpty("0")).toBe(false);
    })

    test("0.1", () => {
        expect(!isNumberEmpty(0.1)).toBe(true);
    })
})

describe('capitalizeString', () => {
    test("aabd23", () => {
        expect(capitalizeString("aabd23")).toBe("Aabd23");
    })

    test("2abd23", () => {
        expect(capitalizeString("2abd23")).toBe("2abd23");
    })

    test("mark henry", () => {
        expect(capitalizeString("mark henry")).toBe("Mark Henry");
    })
})

describe('isSuccessApiCall', () => {
    test('200', () => {
        expect(isSuccessApiCall(200)).toBe(true);
    })

    test('201', () => {
        expect(isSuccessApiCall(201)).toBe(true);
    })

    test('400', () => {
        expect(isSuccessApiCall(400)).toBe(false);
    })

    test('401', () => {
        expect(isSuccessApiCall(401)).toBe(false);
    })

    test('403', () => {
        expect(isSuccessApiCall(403)).toBe(false);
    })

    test('404', () => {
        expect(isSuccessApiCall(404)).toBe(false);
    })
})

describe('getCurrencySymbolFromCurrencyCode', () => {
    test('', () => {
        expect(getCurrencySymbolFromCurrencyCode()).toBe("$");
    })

    test('null', () => {
        expect(getCurrencySymbolFromCurrencyCode(null)).toBe("$");
    })

    test('null', () => {
        expect(getCurrencySymbolFromCurrencyCode('null')).toBe("$");
    })

    test('SGD', () => {
        expect(getCurrencySymbolFromCurrencyCode("SGD")).toBe("S$");
    })
})

describe('convertFractionToDecimal', () => {
    test('0/5000', () => {
        expect(convertFractionToDecimal(0, 5000)).toBe(0);
    })
    test('0/10000', () => {
        expect(convertFractionToDecimal(0, 10000)).toBe(0);
    })
    test('0/20000', () => {
        expect(convertFractionToDecimal(0, 20000)).toBe(0);
    })
    test('345/0', () => {
        expect(convertFractionToDecimal(345, 0)).toBe(0);
    })
    test('345/0', () => {
        expect(convertFractionToDecimal(345, 0)).toBe(0);
    })
    test('345/0', () => {
        expect(convertFractionToDecimal(345, 0)).toBe(0);
    })
    test('0/0', () => {
        expect(convertFractionToDecimal(0, 0)).toBe(0);
    })
    test('345/5000', () => {
        expect(convertFractionToDecimal(345, 5000)).toBe(0.07);
    })
    test('345/10000', () => {
        expect(convertFractionToDecimal(345, 10000)).toBe(0.03);
    })
    test('345/20000', () => {
        expect(convertFractionToDecimal(345, 20000)).toBe(0.02);
    })
})