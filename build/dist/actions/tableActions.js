import { actionTypes } from './actionTypes';
export function changeCellValue(rowNumber, columnNumber, cellValue) {
    return {
        type: actionTypes.CHANGE_CELL_VALUE,
        payload: {
            rowNr: rowNumber,
            columnNr: columnNumber,
            cellValue: cellValue
        }
    };
}
;
export function createNewRowAtPosition() {
}
export function deleteRowByIndex() {
}
export function createNewColumnAtPosition() {
}
export function deleteColumnByIndex() {
}
//# sourceMappingURL=tableActions.js.map