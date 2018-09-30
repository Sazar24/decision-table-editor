import { actionTypes } from "../actions/actionTypes";
import * as tableActions from '../actions/tableActions';

export type allRowsType = string[][];
let allRows: allRowsType = [];

const initialState = [
    // ["header 1", "row1-cell-1", "row1-cell-2", "row1-cell-3", "row4-cell-4","row5-cell-5","row6-cell-6","row7-cell-7"],
    // ["header 2 dsfljk dslfk jdslfk adskflj sdakjf", "row2-cell-1", "row2-cell-2"],
    // ["header 3", "row3-cell-1", "row3-cell-2"],
    // ["header 4", "row4-cell-1", "row4-cell-2"],
    // ["header 5", "row5-cell-1", "row5-cell-2"],
    // ["header 6", "row6-cell-1", "row6-cell-2"],
    // ["header 7", "row7-cell-1", "row7-cell-2", "row7-cell-3"],
    // ["header 8", "row8-cell-1", "row8-cell-2", "row8-cell-3"],
    // ["header 9", "row9-cell-1", "row9-cell-2", "row9-cell-3","row9-cell-4","row9-cell-5","row9-cell-6","row9-cell-7","row9-cell-8"],
    ["foo...",""],
    ["...bar",""],
];

allRows = initialState.slice();

export function tableRows(state: allRowsType = allRows, action: tableActions.IAction): allRowsType {
    const newState: allRowsType = state.slice();

    switch (action.type) {
        case actionTypes.CHANGE_CELL_VALUE:
        if (action.payload.rowNr !== undefined &&
            action.payload.columnNr !== undefined &&
            action.payload.cellValue !== undefined  )    
        // const {rowNr, columnNr}
            newState[action.payload.rowNr][action.payload.columnNr] = action.payload.cellValue;
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

};