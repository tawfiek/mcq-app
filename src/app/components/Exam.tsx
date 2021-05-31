import { Component, ReactNode } from "react";
import { Button, Carousel, Form, FormControl, InputGroup } from "react-bootstrap";

export class Exam extends Component {
    render(): ReactNode {
        return (
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
            // <Button type="submit" > Submit The Exam </Button>

        )
    }
}



/**
 *   <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
    <FormControl aria-label="Text input with radio button" />
  </InputGroup>
 */