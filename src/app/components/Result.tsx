import { Component, ReactNode } from "react";
import { Redirect } from "react-router";
import { store } from "../store";

export class Result extends Component {
    render(): ReactNode {
        const score = store.getState().score;
        if (!store.getState().questions.length) {
            return (<Redirect to="/" />)
        }
        return (
            <div className="result">
                <h2>You've Done </h2>
                <h3>Your Score {score} / 5</h3>
            </div>
        );
    }
}