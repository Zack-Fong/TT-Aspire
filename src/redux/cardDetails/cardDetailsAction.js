import * as types from "./cardDetailsActionTypes";

export const saveCardDetails = (cardDetails) => (
    {
        type: types.SAVE_CARD_DETAILS,
        cardDetails: cardDetails
    }
)