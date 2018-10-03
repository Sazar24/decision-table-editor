import * as React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import { connect } from "react-redux";
import { IGlobalReduxState } from '../reducers';
import { allRowsType } from '../reducers/tableRows';
import { Dispatch } from 'redux';
import { tableCellValues } from '../models/selectedValues';
import * as tableActions from '../actions/tableActions';
import EditableHeaderCell from './EditableHeaderCell';
import { tableParts } from '../models/tableParts';


export interface IProps {
    whichRows: tableParts;
    columnIndex: number,
    rowIndex: number,
    conditionsRows: allRowsType,
    actionRows: allRowsType,
    changeCellValue: (rowNumber: number, columnNumber: number, cellValue: string) => void;
}

class Cell extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    };

    handleClick(value: string) {
        const { rowIndex, columnIndex } = this.props;
        this.props.changeCellValue(columnIndex, rowIndex, value);
    };

    public render() {
        const { columnIndex, rowIndex, conditionsRows, actionRows, whichRows } = this.props;
        if (columnIndex === 0) return (
            <EditableHeaderCell
                whichRows={whichRows}
                rowIndex={rowIndex}
            />
        )

        let cellValueRenderedAsTrigger: any;
        if (whichRows === tableParts.top) cellValueRenderedAsTrigger = conditionsRows[rowIndex][columnIndex];
        if (whichRows === tableParts.bottom) {
            console.log(`actionRows: ${JSON.stringify(actionRows)}, rowIndex: ${rowIndex}, columnIndex: ${columnIndex}, whichRows: ${whichRows} <--normalCell`)
            cellValueRenderedAsTrigger = actionRows[rowIndex][columnIndex];
        }

        return (
            <Table.Cell textAlign="center"
            // style={{borderTop:"1px solid black"}}
            >
                <Dropdown
                    icon="" // TODO: this is so ugly... xD find sth to replace it (The goal is to keep the caret/dropdown-arrow icon to be invisible) // Dropdown renders icon anyway. It is invisible this way, but still clickable, which is good. Disadventage of this solution is that that 'invisible' icon still takes some space (width, to be exact).
                    /// ...so: TODO: Convert Dropdown to clickable pop-up. 
                    trigger={cellValueRenderedAsTrigger}
                    pointing
                >
                    <Dropdown.Menu >
                        <Dropdown.Item onClick={() => this.handleClick(tableCellValues.empty)}>empty</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.handleClick(tableCellValues.notApplicable)}>-</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.handleClick(tableCellValues.yes)}>yes</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.handleClick(tableCellValues.no)}>no</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Table.Cell>
        );
    };
};

const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows,
    actionRows: state.tableData.actionRows,
});

const mapDistpachToProps = (dispatch: Dispatch) => ({
    changeCellValue: (columnNumber: number, rowNumber: number, cellValue: string) => dispatch(tableActions.changeCellValue(columnNumber, rowNumber, cellValue)),
});

export default connect<any, any, any>(mapStateToProps, mapDistpachToProps)(Cell);