import * as  React from 'react';
import UploadFiles from './UploadFiles';
import DownloadFiles from './DownloadFiles';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular? : (event: any) => void;
}

 const CheckPointPageComponent = (props: any) => {

    return ( 
    <div className='react-css-style'>
        Paridhi
      
        <div><button onClick={() => window.open( 'https://cloud.workhuman.com/conversations/#!/dashboard/ibmcorp/')} >checkpoint</button></div>
        <UploadFiles/>
        <DownloadFiles/>
    </div>
    
    )
}

export default CheckPointPageComponent;  

