import { Component,  FormEventHandler,  ReactNode } from "react";
import { Col, Row, Spinner, Button, Form, Card } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";

class StartExam extends Component<RouteComponentProps> {

    // TODO: Implement call this function
    onSubmit () {
        this.props.history.push('/exam');
    }

    render(): ReactNode {
        return (
            <Card >
                 <Card.Body>
                    <Form onSubmit={(e) => this.onSubmit()}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@example.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" placeholder="Student Name" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        )
    }
}

export default withRouter(StartExam);