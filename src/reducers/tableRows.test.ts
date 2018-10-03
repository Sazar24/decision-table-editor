import * as fromTableRowsReducer from './tableRows';
import * as tableActions from '../actions/tableActions';

// test('should ', () => {
//     expect(true).toBe(true); 
// });


describe.skip('Handling .CREATE-NEW-COLUMN-AT-END ', () => {
    let initialState: fromTableRowsReducer.IMainTableState;
    let simulatedOutput: fromTableRowsReducer.IMainTableState;
    let expectedOutput: fromTableRowsReducer.IMainTableState;

    beforeEach(() => {
        initialState = Object.assign({}, fromTableRowsReducer.initialEmptyState);
        simulatedOutput = Object.assign({}, fromTableRowsReducer.initialEmptyState);
        expectedOutput = Object.assign({}, fromTableRowsReducer.initialEmptyState);
    });

    it('handling', () => {
        simulatedOutput = fromTableRowsReducer.tableRowsReducer(initialState, tableActions.createNewColumn());
        // simulatedOutput = fromTableRowsReducer.tableRowsReducer(initialState, tableActions.createNewColumn());

        expectedOutput.conditionsRows = [["", ""]];
        expectedOutput.actionRows = [["", ""]];


        expect(simulatedOutput).toEqual(expectedOutput);
    });
});