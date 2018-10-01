import { combineReducers } from 'redux'
import { tableRows, IMainTableState } from './tableRows';

export interface IGlobalReduxState {
    // rows: allRowsType,
    tableData: IMainTableState;

}

export const reducer = combineReducers<IGlobalReduxState>({
    // rows: tableRows,
    tableData: tableRows
})