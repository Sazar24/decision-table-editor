import * as React from 'react';
import { Table } from 'semantic-ui-react';
import * as UUID from 'uuid';

export interface IProps {
    columnsAmmount: number;
}

export default class CustomisedHeader extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };

    public render() {
        const { columnsAmmount } = this.props;
        const ammount2Array = [];
        for (let i = 0; i < columnsAmmount; i++) ammount2Array.push(i);

        return (
            <Table.Header>
                <Table.Row>
                    {ammount2Array.map(item => {
                        if (item === 0) return <Table.HeaderCell key={UUID.v1()} />;
                        else return (
                            <Table.HeaderCell
                                textAlign="center"
                                key={UUID.v1()}
                                positive={true}>
                                R{item}
                            </Table.HeaderCell>
                        )
                    })}
                </Table.Row>
            </Table.Header>
        );
    }
}