import { actionTypes } from "../actions/actionTypes";
import * as tableActions from '../actions/tableActions';
import { tableCellValues } from '../models/selectedValues';
import TablesManager from '../services/tablesManager';

export type allRowsType = string[][];


export interface IMainTableState {
    // headers: string[];
    conditionsRows: allRowsType;
    actionRows: allRowsType;
}


// let manyRowsFiller: allRowsType = [];
// manyRowsFiller = [
// ["header 1", "row1-cell-1", "row1-cell-2", "row1-cell-3", "row4-cell-4","row5-cell-5","row6-cell-6","row7-cell-7"],
// ["header 2 dsfljk dslfk jdslfk adskflj sdakjf", "row2-cell-1", "row2-cell-2"],
// ["header 3", "row3-cell-1", "row3-cell-2"],
// ["header 4", "row4-cell-1", "row4-cell-2"],
// ["header 5", "row5-cell-1", "row5-cell-2"],
// ["header 6", "row6-cell-1", "row6-cell-2"],
// ["header 7", "row7-cell-1", "row7-cell-2", "row7-cell-3"],
// ["header 8", "row8-cell-1", "row8-cell-2", "row8-cell-3"],
// ["header 9", "row9-cell-1", "row9-cell-2", "row9-cell-3","row9-cell-4","row9-cell-5","row9-cell-6","row9-cell-7","row9-cell-8"],
// ["foo...", "n"],
// ["...bar", "Y"],
// ];

export const initialEmptyState: IMainTableState = {
    // headers: [],
    conditionsRows: [["condtion1"],["xx"]],
    // conditionsRows: [], // TODO: poprawić, żeby się nie wysypywało, gdy tablica jest pusta
    // actionRows: [["a"]]
    actionRows: [[""],["."]]
}

export function tableRowsReducer(state: IMainTableState = initialEmptyState, action: tableActions.IAction): IMainTableState {
    const newState: IMainTableState = Object.assign({}, state);
    const tableManager = new TablesManager();

    switch (action.type) {
        case actionTypes.CHANGE_CELL_VALUE: // TODO: test me!
            if (action.payload.rowNr !== undefined &&
                action.payload.columnNr !== undefined &&
                action.payload.cellValue !== undefined)
                // const {rowNr, columnNr}
                newState.conditionsRows[action.payload.rowNr][action.payload.columnNr] = action.payload.cellValue;
            return newState;

        case actionTypes.CREATE_NEW_COLUMN_AT_END: // TODO: test me!
            if (!tableManager.innerArraysHaveSameLength(state.conditionsRows, state.actionRows))
                return state;
            newState.conditionsRows.map((rowArray: string[]) => { rowArray.push(tableCellValues.empty) });
            newState.actionRows.map((rowArray: string[]) => { rowArray.push(tableCellValues.empty) });
            return newState;

        case actionTypes.CREATE_NEW_ROW_AT_END: // TODO: test me!

            const elementsAmmount: number = newState.conditionsRows[0].length;
            const newRow: string[] = [];
            // newRow.push("this is new row - edit me");
            for (let i = 0; i < elementsAmmount; i++)
                newRow.push(tableCellValues.empty);
            newState.conditionsRows.push(newRow);
            return newState;

        default:
            return state;
    }

};