import { Component,  ReactNode } from "react";
import { Col, Row, Spinner, Button, Form, Card } from "react-bootstrap";

export class StartExam extends Component {
    render(): ReactNode {
        return (
            <Card >
                 <Card.Body>
                    <Form>
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