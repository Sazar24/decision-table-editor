import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import * as tableActions from '../actions/tableActions';
import { Table, Form } from 'semantic-ui-react';
import { IGlobalReduxState } from '../reducers';
import { allRowsType } from '../reducers/tableRows';

export interface IEditableHeaderCellProps {
    // columnIndex: number, // zawsze === 0
    rowIndex: number,
    conditionsRows: allRowsType,
}

export interface IEditableHeaderCellState {
    columnIndex: number;
    editModeOn: boolean
    cellValue: string;
}

class EditableHeaderCell extends React.Component<IEditableHeaderCellProps, IEditableHeaderCellState> {
    constructor(props: IEditableHeaderCellProps) {
        super(props);
        this.state = {
            columnIndex: 0,
            editModeOn: false,
            cellValue: '',
        }
    }
    
    handleTurnOnEditMode = () => {
        this.setState({
            editModeOn: true,
        });
    }
    
    componentDidMount() {
        const thisCellValue :string = this.props.conditionsRows[this.props.rowIndex][0];
        this.setState({
            cellValue :thisCellValue,
        })
    }

    handleSubmit = () =>{

    }

    public render(): any {
        const { rowIndex, conditionsRows } = this.props;
        const { columnIndex, editModeOn } = this.state;

        if (!editModeOn)
            return (
                <Table.Cell onClick={this.handleTurnOnEditMode}>
                2
                    {/* {conditionsRows[rowIndex][columnIndex]} */}
                </Table.Cell>
            );

        if (editModeOn)
            return (
                <Table.Cell>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>User Input</label>
                            <input />
                        </Form.Field>
                    </Form>

                </Table.Cell>
            );
    }
    

}

const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows,
});

const mapDistpachToProps = (dispatch: Dispatch) => ({
    changeCellValue: (columnNumber: number, rowNumber: number, cellValue: string) => dispatch(tableActions.changeCellValue(columnNumber, rowNumber, cellValue)),
});

export default connect<any, any, any>(mapDistpachToProps)(EditableHeaderCell);