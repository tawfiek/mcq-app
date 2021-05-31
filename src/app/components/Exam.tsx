import { Component, ReactNode } from "react";
import { Button, Carousel, Form, FormControl, InputGroup } from "react-bootstrap";
import { RouteComponentProps, withRouter } from "react-router";
import { Option, Question } from "../../models";
import { store } from "../store";
import { shuffle } from "../utils/helpers";

class Exam extends Component<RouteComponentProps> {

    // TODO: Implement call this function
    onSubmit () {
        this.props.history.push('/result');
    }

    // Loop over questions in state and return Carousel.Item for each question
    renderQuestions (): JSX.Element[] {
        const questions: Question[] = store.getState().questions;
        return questions.map((q: Question) => (
            <Carousel.Item>
                <h2>{q.questionBody}</h2>
                <div>
                    {this.getOptionsInRandomOrder(q.options)}
                </div>
            </Carousel.Item>
        ));
    }

    getOptionsInRandomOrder (options: Option[]): JSX.Element[] {
        const optionShuffled = shuffle(options);
        return optionShuffled.map(o => (
            <Form.Check
                type="radio"
                label = {o.answerBody}
                value = {o._id}
            />
        ));
    }

    render(): ReactNode {
        return (
            <div>

                <Carousel wrap={false} interval={null} >
                    {this.renderQuestions()}
                </Carousel>
                <div className="submit-btn">
                    <Button type="submit" variant="success" onClick={() => this.onSubmit()}> Submit </Button>
                </div>
            </div>

        )
    }
}

export default withRouter(Exam);
