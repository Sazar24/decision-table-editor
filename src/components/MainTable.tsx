import * as React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { IGlobalReduxState } from '../reducers';
import * as UUID from 'uuid';
import Cell from './Cell';
import CustomisedHeader from './CustomisedHeader';
import TableRowsRenderer from './TableRowsRenderer';
import { tableParts } from '../models/tableParts';

interface IProps {
    conditionsRows: IGlobalReduxState["tableData"]["conditionsRows"],
    // actionRows: IGlobalReduxState["tableData"]["actionRows"]
}

class MainTable extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };

    render() {
        const { conditionsRows } = this.props;

        return (
            <Table definition unstackable singleLine striped celled collapsing >
                <CustomisedHeader columnsAmmount={conditionsRows[0].length} />
                <Table.Body >
                    <TableRowsRenderer whichRowsRender={tableParts.top} />
                    <TableRowsRenderer whichRowsRender={tableParts.bottom} />
                    {/* TODO: replace with sth like: <TableRowsRenderer data = {multiarray:array[][]} topBorderColor = { stringColor | null} />  */}
                    {/* {conditionsRows.map((row, rowIndex) => {
                        return (
                            <Table.Row key={UUID.v1()}>
                                {row.map((cellValue, columnIndex) => {
                                    return <Cell
                                        columnIndex={columnIndex}
                                        rowIndex={rowIndex}
                                        key={UUID.v1()}
                                    />
                                })}
                            </Table.Row>
                        )
                    })} */}
                </Table.Body>
            </Table>
        );
    }
};

const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows.slice(),
    // actionRows: state.tableData.actionRows.slice(),
})

export default connect<any, any, any>(mapStateToProps)(MainTable);