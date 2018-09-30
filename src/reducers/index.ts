import { combineReducers } from 'redux'
import { tableRows, allRowsType } from './tableRows';

export interface IGlobalReduxState {
    rows: allRowsType,
}

export const reducer = combineReducers<IGlobalReduxState>({
    rows: tableRows,
})