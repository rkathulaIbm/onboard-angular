import * as  React from 'react';
import axios from 'axios';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular?: (event: any) => void;
}

const DownloadFiles = () => {
    const calDownloadAPI = () => {


        axios.get("http://localhost:9003/downloadFile/xsdV83p3")
            .then((response) => new Blob([response.data]))
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    ``,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.removeChild(link);
            });

    }
    return (
        <div className='react-css-style'>


            <button onClick={() => calDownloadAPI()}>Download</button>

        </div>

    )
}

export default DownloadFiles;

