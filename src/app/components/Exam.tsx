import { Component, ReactNode } from "react";
import { Button, Carousel, Form, FormControl, InputGroup } from "react-bootstrap";
import { Redirect, RouteComponentProps, withRouter } from "react-router";
import { Option, Question } from "../../models";
import { ENV } from "../environment";
import { store, answer, setScore } from "../store";

class Exam extends Component<RouteComponentProps> {

    state = {
        questionsAnswerPairs: {},
    }

    async onSubmit () {
        const score = this.getScore ();
        const examID = (store.getState() as any).exam._id;
        store.dispatch(setScore({score}));

        try {
            const result = await fetch(ENV.BASE_URL + 'exam/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({score, examID})
            });
            const resBody  =  await result.json();

            if (result.status === 200 ) this.props.history.push('/result');
            else alert(`Input errors`);
        } catch (e) {
            console.error(e);
            alert(`Can not submit the exam`)
        }
    }

    getScore (): Number  {
        const questions: Question [] = store.getState().questions;
        return questions.reduce(_scoreReducer, 0);

        function _scoreReducer (score: number, q: Question): number {
            return (q.correctAnswerID === q.userAnswerID) ? score + 1 : score;
        }
    }

    // Loop over questions in state and return Carousel.Item for each question
    renderQuestions (): JSX.Element[] {
        const questions: Question[] = store.getState().questions;

        return questions.map((q: Question) =>{
            return (
            <Carousel.Item key={q._id}>
                <h2>{q.questionBody}</h2>
                <Form.Group >
                    {this.getOptions(q)}
                </Form.Group>
            </Carousel.Item>
        )});
    }

    // Get options in checkable radio buttons components 
    getOptions (question: Question): JSX.Element[] {
        return question.options.map((o: Option) =>{
            const _handleOnChangeCheck = (e: any) => {
                store.dispatch(answer({optionID: e.target.value, questionID: question._id}));
                const stateCp  = this.state;
                (stateCp.questionsAnswerPairs as any)[question._id] = o._id;
                this.setState(stateCp);
            };

            return (
                <Form.Check
                    type="radio"
                    label = {o.answerBody}
                    value = {o._id}
                    key = {o._id}
                    onChange = {_handleOnChangeCheck}
                    checked = {(this.state.questionsAnswerPairs as any)[question._id] === o._id}
                />
            )
        });

    }

    render(): ReactNode {
        if (!store.getState().questions.length) {
            return (<Redirect to="/" />)
        }
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
