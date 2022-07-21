import { Component, ReactNode } from "react";
import * as React from 'react';

export interface IChildComponentProps {
    inputData:string,
    inputFunction: (event: any) => void;
}

class Child extends Component<IChildComponentProps> {

    constructor(props:any) {
        super(props);
        this.state = {
            text:''
        }
    }

    override render(): ReactNode {
        return (
            <div className="react-css-child-style">
                <div>Hello from Child {this.props.inputData}</div>
                <button onClick={this.props.inputFunction} id="child"> Trigger angular event from child component</button>
            </div>
        )
    }

}

export default Child;