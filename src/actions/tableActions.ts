import { actionTypes } from './actionTypes';

export interface IAction {
    type: actionTypes;
    payload: {
        rowNr?: number,
        columnNr?: number,
        cellValue?: string,
        indexToErase?: number
    };
};

export function changeCellValue(columnNumber: number, rowNumber: number, cellValue: string): IAction {
    return {
        type: actionTypes.CHANGE_CELL_VALUE,
        payload: {
            rowNr: rowNumber,
            columnNr: columnNumber,
            cellValue
        }
    }
};

// export function createNewRowAtPosition(rowNumber: number): IAction {
export function createNewRowAtEnd(): IAction {
    return {
        type: actionTypes.CREATE_NEW_ROW_AT_POSITION,
        payload: {
            // rowNr: rowNumber,
        }
    }
};

export function deleteRowByIndex(rowNumber: number): IAction {
    return {
        type: actionTypes.DELETE_ROW_BY_INDEX,
        payload: {
            rowNr: rowNumber,
        }
    }
};

// export function createNewColumnAtPosition(columnNumber: number): IAction {
export function createNewColumn(): IAction {
    return {
        type: actionTypes.CREATE_NEW_COLUMN_AT_POSTITION,
        payload: {
            // columnNr: columnNumber,
        }
    }
};

export function deleteColumnByIndex(columnNumber: number): IAction {
    return {
        type: actionTypes.DELETE_COLUMN_BY_INDEX,
        payload: {
            columnNr: columnNumber,
        }
    }
};