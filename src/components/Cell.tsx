import * as React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import { connect } from "react-redux";
import { IGlobalReduxState } from '../reducers';
import { allRowsType } from '../reducers/tableRows';
import { Dispatch } from 'redux';
import { tableCellValues } from '../models/selectedValues';
import * as tableActions from '../actions/tableActions';
import EditableHeaderCell from './EditableHeaderCell';


export interface IProps {
    columnIndex: number,
    rowIndex: number,
    conditionsRows: allRowsType,
    changeCellValue: (rowNumber: number, columnNumber: number, cellValue: string) => void;
}

class Cell extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    };

    handleClick(value: string) {
        const { rowIndex, columnIndex} = this.props;
        this.props.changeCellValue(columnIndex, rowIndex, value);
    };

    public render() {
        const { columnIndex, rowIndex, conditionsRows } = this.props;
        if (columnIndex === 0) return (
            <EditableHeaderCell rowIndex = {rowIndex} />
            
            // <Table.Cell> 
            //     {conditionsRows[rowIndex][columnIndex]} {/* TODO: 1. Move it to separatedComponent as EditableCell; 2. Create here text Area */}
            // </Table.Cell>
        )
        else return (
            <Table.Cell textAlign="center">
                <Dropdown
                    icon="" // TODO: this is so ugly... xD find sth to replace it (The goal is to keep the caret/dropdown-arrow icon to be invisible)
                    text={conditionsRows[rowIndex][columnIndex]} // TODO: Potrzebna stała szerokość czcionki <eng. fixed font width (?)> (albo jakiś zamiennik, żeby się kolumny nie rozszerzały)
                    pointing 
                    // fluid // TODO: make id fluid, but keep text-alignment centered.
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
});

const mapDistpachToProps = (dispatch: Dispatch) => ({
    changeCellValue: (columnNumber: number, rowNumber: number, cellValue: string) => dispatch(tableActions.changeCellValue(columnNumber, rowNumber, cellValue)),
});

export default connect<any, any, any>(mapStateToProps, mapDistpachToProps)(Cell);