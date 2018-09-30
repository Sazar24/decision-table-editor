import { actionTypes } from "../actions/actionTypes";
var allRows = [];
var initialState = [
    ["jakiś opis", "1"],
    ["abracadabra", "101"]
];
allRows = initialState.slice();
export function tableRows(state, action) {
    if (state === void 0) { state = allRows; }
    var newState = state.slice();
    // const localStorageAccessor: LocalStorageAccessor = new LocalStorageAccessor();
    switch (action.type) {
        case actionTypes.CREATE_NEW_ROW_AT_POSITION:
            return newState;
        case actionTypes.CREATE_NEW_COLUMN_AT_POSTITION:
            return newState;
        case actionTypes.CREATE_NEW_COLUMN_AT_POSTITION:
            return newState;
        case actionTypes.CREATE_NEW_COLUMN_AT_POSTITION:
            return newState;
        case actionTypes.CREATE_NEW_COLUMN_AT_POSTITION:
            return newState;
        default:
            return state;
    }
}
;
//# sourceMappingURL=tableRows.js.map