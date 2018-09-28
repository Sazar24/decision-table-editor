import * as React from "react";
import { Container } from "semantic-ui-react";

class MainView extends React.Component {
    render() {
        return (
            <Container
                style={{ border: "1px black solid" }}
                textAlign="right"
                text={true}
                fluid={false}
            >
                Long live Lorem Ipsum!
            </Container>
        );
    }
};

export default MainView;