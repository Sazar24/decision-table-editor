import * as React from "react";
import { Container, Button } from "semantic-ui-react";
import MainTable from '../MainTable';
import { connect } from 'react-redux';
import { IGlobalReduxState } from '../../reducers';
import { Dispatch } from 'redux';
import * as tableActions from '../../actions/tableActions';

interface IProps {
    addNewColumn: () => void;
    addNewRowToConditions: () => void;
}

class MainView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { addNewColumn, addNewRowToConditions } = this.props;
        return (
            <Container
                // style={{ border: "1px gray dashed" }}
                // textAlign="right"
                // text={true}
                fluid={false}
            >
                <MainTable />
                <Button content="add new column" onClick={() => addNewColumn()} />
                <Button content="add new row" onClick={() => addNewRowToConditions()} />
            </Container>
        );
    }
};



const mapStateToProps = (state: IGlobalReduxState) => ({
    allRows: state.rows,
})

const mapDistpachToProps = (dispatch: Dispatch) => ({
    addNewColumn: () => dispatch(tableActions.createNewColumn()),
    addNewRowToConditions: () => dispatch(tableActions.createNewRowAtEnd()),

});


export default connect<any, any, any>(mapStateToProps, mapDistpachToProps)(MainView);