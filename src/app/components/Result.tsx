import { Component, ReactNode } from "react";

export class Result extends Component {
    render(): ReactNode {
        return (
            <div className="result">
                <h2>You've Done </h2>
                <h3>Your Score 5 / 5</h3>
            </div>
        );
    }
}