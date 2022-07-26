import * as  React from 'react';
import axios from 'axios'; 

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular?: (event: any) => void;
}

const UploadFiles = () => {
    const callUploadAPI = () => {
       
        var input: any = document.getElementById('myfile');
        console.log('inputFileElement.value', input.files[0]);
        var formdata = new FormData();
        formdata.append("file",input.files[0], input.files[0].name);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        axios.post("http://localhost:9003/uploadFile", formdata, {headers: {
            "Content-Type": "multipart/form-data"}
        })
           .then(result => console.log(result))

    }
    return (
        <div className='react-css-style'>

            <input type="file" id="myfile" name="myfile" multiple />
            <button onClick={() => callUploadAPI()}>submit</button>

        </div>

    )
}

export default UploadFiles;

