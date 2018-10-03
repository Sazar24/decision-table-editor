import { combineReducers } from 'redux'
import { tableRowsReducer, IMainTableState } from './tableRows';

export interface IGlobalReduxState {
    // rows: allRowsType,
    tableData: IMainTableState;

}

export const reducer = combineReducers<IGlobalReduxState>({
    // rows: tableRows,
    tableData: tableRowsReducer
})