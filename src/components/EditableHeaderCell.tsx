import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import * as tableActions from '../actions/tableActions';
import { Table, Form, Input, TextArea } from 'semantic-ui-react';
import { IGlobalReduxState } from '../reducers';
import { allRowsType } from '../reducers/tableRows';
import { tableParts } from '../models/tableParts';

export interface IEditableHeaderCellProps {
    whichRows: tableParts;
    rowIndex: number,
    conditionsRows: allRowsType,
    actionRows: allRowsType,
    changeCellValue: (columnNumber: number, rowNumber: number, cellValue: string) => void;
}

export interface IEditableHeaderCellState {
    columnIndex: number;
    editModeOn: boolean
    cellTextValue: string;
}

class EditableHeaderCell extends React.Component<IEditableHeaderCellProps, IEditableHeaderCellState> {
    constructor(props: IEditableHeaderCellProps) {
        super(props);
        this.state = {
            columnIndex: 0,
            editModeOn: false,
            cellTextValue: '',
        };
    };

    handleTurnOnEditMode = () => {
        this.setState({
            editModeOn: true,
        });
    };

    componentDidMount() {
        const thisCellValue: string = this.props.conditionsRows[this.props.rowIndex][0];
        this.setState({
            cellTextValue: thisCellValue,
        });
    };

    handleSubmit = () => {
        const { rowIndex, conditionsRows, changeCellValue } = this.props;
        const { columnIndex, cellTextValue } = this.state;
        this.setState({ editModeOn: false });
        changeCellValue(columnIndex, rowIndex, cellTextValue);
    };

    handleTextChange = (e: any) => {
        this.setState({
            cellTextValue: e.target.value,
        });
    };

    public render(): any {
        const { rowIndex, conditionsRows, actionRows, whichRows } = this.props;
        const { columnIndex, editModeOn, cellTextValue } = this.state;
        // let thisCellValue :string; 

        let thisCellReduxValue: any;
        if (whichRows === tableParts.top) thisCellReduxValue = conditionsRows[rowIndex][columnIndex];
        if (whichRows === tableParts.bottom) {
            thisCellReduxValue = actionRows[rowIndex][columnIndex];
        };
        console.log(` actionRows: ${JSON.stringify(actionRows)}, rowIndex: ${rowIndex}, columnIndex: ${columnIndex}, whichRows: ${whichRows} <--editableHeaderCell , value: ${actionRows[rowIndex][columnIndex]}, actionRows.length: ${actionRows.length}`);

        if (!editModeOn)
            return (
                <Table.Cell
                    onClick={this.handleTurnOnEditMode}
                    style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", wordBreak: "keep-all", textAlign: "justify", textJustify: "inter-word", textOverflow: "clip" }} >
                    {/* {conditionsRows[rowIndex][columnIndex]} */}
                    {thisCellReduxValue}
                </Table.Cell>
            );

        if (editModeOn)
            return (
                <Table.Cell>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.TextArea
                            rows={1}
                            autoHeight
                            value={cellTextValue}
                            placeholder={thisCellReduxValue}
                            onChange={this.handleTextChange}
                        />
                        <Form.Button content="zapisz" />
                    </Form>
                </Table.Cell>
            );
    }
}

const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows,
    actionRows: state.tableData.actionRows,
});

const mapDistpachToProps = (dispatch: Dispatch) => ({
    changeCellValue: (columnNumber: number, rowNumber: number, cellValue: string) => dispatch(tableActions.changeCellValue(columnNumber, rowNumber, cellValue)),
});

export default connect<any, any, any>(mapStateToProps, mapDistpachToProps)(EditableHeaderCell);