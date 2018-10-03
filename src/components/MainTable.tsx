import * as React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { IGlobalReduxState } from '../reducers';
import * as UUID from 'uuid';
import Cell from './Cell';
import CustomisedHeader from './CustomisedHeader';

interface IProps {
    conditionsRows: IGlobalReduxState["tableData"]["conditionsRows"]
}

class MainTable extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };

    render() {
        const { conditionsRows } = this.props;
        return (
            <Table definition unstackable singleLine striped celled 
            collapsing
            // style={{ margin: "0px" }}
            >
                <CustomisedHeader columnsAmmount={conditionsRows[0].length} />
                <Table.Body>
                    {conditionsRows.map((row, rowIndex) => {
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
                    })}
                </Table.Body>
            </Table>
        );
    }
};

const mapStateToProps = (state: IGlobalReduxState) => ({
    conditionsRows: state.tableData.conditionsRows.slice()
})

export default connect<any, any, any>(mapStateToProps)(MainTable);