import * as  React from 'react';
import axios from 'axios';
//import './UpdateDeleteStyles.scss';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular?: (event: any) => void;
}

type state = {
    files: any,
    disabled: boolean,
    changedFileIndex: any
    data: any
}

export default class UploadDeleteDocComponent extends React.Component<any, state> {

    fileUploaderRef: any;

    constructor(props: any) {
        super(props);
        this.state = {
            files: [],
            disabled: false,
            changedFileIndex: -1,
            data: []
        };
        this.fileUploaderRef = React.createRef();
    }

    fileUpload = (e: any) => {
        let changedFile = e.target.files[0];
        let uploadedFiles = e.target.files;

        if (this.state.changedFileIndex >= 0) {
            this.setState(prevState => {
                const list: any[] = [];
                prevState.files.map((file: any, i: any) => {
                    if (i === prevState.changedFileIndex)
                        list.push(changedFile);
                    else
                        list.push(file);
                });
                return {
                    files: list,
                    changedFileIndex: -1,
                };
            });
        } else if (this.state.files.length > 0) {
            this.setState(prevState => {
                return { files: [...prevState.files, ...uploadedFiles] }
            });
        } else
            this.setState({ files: [...e.target.files] });
    };

    Delete(name: any) {

        axios.delete(`http://localhost:9003/delete/${name}`)
            .then(result => {
                console.log(result)
                this.setState(prevState => {
                    const list: any[] = [];
                    prevState.files.map((file: any) => {
                        if (file.name !== name) {
                            list.push(file);
                        }
                    });
                    return {
                        files: list,
                        changedFileIndex: -1,
                    };
                });
            })
    }

    callUploadAPI() {
        var input: any = document.getElementById('file');
        console.log('inputFileElement.value', input.files[0]);
        var formdata = new FormData();
        formdata.append("file", input.files[0], input.files[0].name);

        axios.post("http://localhost:9003/uploadFile", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(result => console.log(result))
    }

    override render() {
        return (
            <div className='mar-left-10'>
                <h2>Upload Documents</h2>
                

                    <div className='file-upload-wrapper' data-text="Select your file!">
                        <label>Insert Files:
                            <input type="file" multiple id="file" ref={this.fileUploaderRef} onChange={this.fileUpload} />
                        </label>
                    </div>
                    <h3>Documents:</h3>
                    <table>
                        <tbody>
                            {
                                this.state.files.map((file: any, i: any) =>
                                    <tr key={i}>
                                        <td style={{ textAlign: "left" }}>{file.name} :</td>
                                        <td>
                                            <button onClick={() => this.callUploadAPI()}>Upload</button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.Delete(file.name)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
            </div>
        );
    }
}

