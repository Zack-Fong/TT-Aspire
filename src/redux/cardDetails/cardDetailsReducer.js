import * as types from "./cardDetailsActionTypes";

let INITIAL_STATE = {
    cardDetails: {}
}

let cardDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SAVE_CARD_DETAILS:
            return {
                ...state,
                cardDetails: action.cardDetails
            }

        default:
            return state;
    }
}

export default cardDetailsReducer;