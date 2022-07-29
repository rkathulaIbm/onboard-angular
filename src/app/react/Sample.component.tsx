import * as  React from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';

import TrainingLinkComponent from './TrainingLinkComponent';
import CheckPointPageComponent from  './CheckPointPageComponent';
import UploadDeleteDocComponent from './upload-delete-doc/UploadDeleteDocComponent';

import { FunctionComponent } from 'react';
import Child from './Child.component';
import axios from 'axios';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular? : (event: any) => void;
    navigate?: (event: any) => void;
}

export const Sample: FunctionComponent<ISampleComponentProps> = (props: ISampleComponentProps) => {
    
    const [inputValue, setInputValue] = React.useState('');
    const [dogList, setDogList] = React.useState([]);
    const [dogName, setDogName] =React.useState('');

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

    const routeToPage = (event: any) => {
      if(props.navigate) {
          props.navigate(event);
      }
    }
   
    const generateList = () => {
        console.log("called method generateList")
        axios.get("https://api.thedogapi.com/v1/breeds?limit=10&page=0").then((response) => {
          setDogList(response.data);
        });
      }
    return ( 
  <Router>
    <div className='react-css-style'>
        <h1>React - {inputValue}</h1>
        <span>Sending messages from React Component</span><input type="text" onChange={props.handleOnChangeFromAngular} />
        <div>
            <button onClick={actionFromReact} id="sample">Trigger angular event from sample componnent</button>
        </div>
        <div>
        <button onClick={() => generateList()}>Generate List  </button>
        </div>
        <Child inputData={inputValue} inputFunction={actionFromReact}/>
        <ul className="navbar-nav mr-auto">
            <li><Link to={'/CheckPointPageComponent'} className="nav-link"> CheckPointPageComponent </Link></li>
            <li><Link to={'/TrainingLinkComponent'} className="nav-link"> TrainingLinkComponent </Link></li>
            <li><Link to={'/UploadDeleteDocComponent'} className="nav-link"> Upload delete Documents Component </Link></li>
            <button onClick={routeToPage} id="routeId">Navigate To Angular Page</button>
          </ul>
          {/* <ul>
            <button onClick={routeToPage} id="routeId">Upload delete Documents</button>
          </ul> */}
          
          <hr />
          <Routes >
              <Route path='/CheckPointPageComponent' element={<CheckPointPageComponent />} />
              <Route path='/TrainingLinkComponent' element={<TrainingLinkComponent />} />
              <Route path='/UploadDeleteDocComponent' element={<UploadDeleteDocComponent />} />
         </Routes >
    </div>
 </Router>
    )
}
