import * as  React from 'react';
import { FunctionComponent } from 'react';
import Child from './Child.component';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular? : (event: any) => void;
}

export const Sample: FunctionComponent<ISampleComponentProps> = (props: ISampleComponentProps) => {

    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        const inputElement = document.querySelector('#input');
        inputElement && inputElement.addEventListener('keyup', function (e: any) {
            setInputValue(e.target.value);
          });
    }, [])

    const actionFromReact = (event: any) => {
        if (props.triggerEventFromReact) {
            props.triggerEventFromReact(event);
        }
    };

    return ( 
    <div className='react-css-style'>
        <h1>React - {inputValue}</h1>
        <span>Sending messages from React Component</span><input type="text" onChange={props.handleOnChangeFromAngular} />
        <div>
            <button onClick={actionFromReact} id="sample">Trigger angular event from sample componnent</button>
        </div>
        <Child inputData={inputValue} inputFunction={actionFromReact}/>
    </div>
    )
}
