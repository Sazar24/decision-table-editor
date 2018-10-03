import * as React from 'react';
import { Table } from 'semantic-ui-react';
import * as UUID from 'uuid';
import Cell from './Cell';
import { tableParts } from '../models/tableParts';
import { connect } from "react-redux";
import { IGlobalReduxState } from '../reducers';
import { allRowsType } from '../reducers/tableRows';

interface IProps {
    whichRowsRender: tableParts;
    conditionsRows:allRowsType;
    actionRows:allRowsType;
    // multiRows: string[][];
}


class TableRowsRenderer extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { whichRowsRender, conditionsRows, actionRows } = this.props;
        let multiRow: string[][] = [];

        switch (whichRowsRender) {
            case tableParts.top:
                multiRow = actionRows.slice();
                break;

            case tableParts.bottom:
                multiRow = conditionsRows.slice();
                break;

            default:
                throw new Error("In <TableRowsRenderer> : You haven`t defined which data should be rendered");
        }


        return (
            multiRow.map((row, rowIndex) => {
                // if (rowIndex > 0) topBorderStyle = null;
                return (
                    <Table.Row key={UUID.v1()}
                    // style={{ border: "1px solid black" }}
                    // style={topBorderStyle}
                    >
                        {row.map((cellValue, columnIndex) => {
                            return <Cell
                                whichRows={whichRowsRender}
                                columnIndex={columnIndex}
                                rowIndex={rowIndex}
                                key={UUID.v1()}
                            />
                        })}
                    </Table.Row>
                );
            })
        );
    }
}


const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows.slice(),
    actionRows: state.tableData.actionRows.slice(),
})

export default connect<any, any, any>(mapStateToProps)(TableRowsRenderer);