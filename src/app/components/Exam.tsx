import { Component, ReactNode } from "react";
import { Button, Carousel, Form, FormControl, InputGroup } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
class Exam extends Component<RouteComponentProps> {

    // TODO: Implement call this function
    onSubmit () {
        this.props.history.push('/result');
    }

    render(): ReactNode {
        return (
            <div>
                <Carousel wrap={false} interval={null} >
                    <Carousel.Item>
                        <h2>Are You Okay ?!</h2>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                            />
                            <Form.Check
                                type="radio"
                                label="Maybe"
                            />
                            <Form.Check
                                type="radio"
                                label="I don't know"
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                            />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2>Are You Okay ?!</h2>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                            />
                            <Form.Check
                                type="radio"
                                label="Maybe"
                            />
                            <Form.Check
                                type="radio"
                                label="I don't know"
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                            />
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <h2>Are You Okay ?!</h2>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Yes"
                            />
                            <Form.Check
                                type="radio"
                                label="Maybe"
                            />
                            <Form.Check
                                type="radio"
                                label="I don't know"
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                            />
                        </div>
                    </Carousel.Item>

                </Carousel>
                <div className="submit-btn">
                    <Button type="submit" variant="success" onClick={() => this.onSubmit()}> Submit </Button>
                </div>
            </div>

        )
    }
}

export default withRouter(Exam);
