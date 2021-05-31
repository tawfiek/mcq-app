import { Component,  ReactNode } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import { ENV } from "../environment";
import { startExam, store } from "../store";

class StartExam extends Component<RouteComponentProps> {

    state = { };

    async onSubmit (e: any) {
        try {
            e.preventDefault();
            const result = await fetch(ENV.BASE_URL + 'exam/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            const resBody  =  await result.json();

            store.dispatch(startExam({exam: resBody.exam, questions: resBody.questions}));
            if (result.status === 200 ) this.props.history.push('/exam');
            else alert(`Check your Name or Email`);

        } catch (e) {
            console.error(e);
            alert(`Can not start a new exam`)
        }
    }

    render(): ReactNode {
        return (
            <Card >
                 <Card.Body>
                    <Form onSubmit={(e) => this.onSubmit(e)}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@example.com"
                                onChange={e => this.setState({ email: e.target.value })} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text"
                             onChange={e => this.setState({ userName: e.target.value })}
                             placeholder="Student Name" />
                        </Form.Group>

                        <Button variant="outline-success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        )
    }
}

export default withRouter(StartExam);