import React, { useState } from 'react';
import RecordingList from './RecordingList';
import {recordingData} from "../../../json/response/recordingData";
import AddRecording from './AddRecording';
import EditRecording from './EditRecording';

const RecordingMainComponent = () => {

    const initialFormState = { recordingId: '', recordingDescription: '', link: '', password: '' }
    const [recordings, setRecordings] = useState(recordingData)
    const [editing, setEditing] = useState(false);
    const [currentRecording, setCurrentRecording] = useState(initialFormState)
    // Add recording...
    const addRecording = (recording: { recordingId: any; }) => {
        recording.recordingId = recordings.length + 1
        setRecordings([...recordings, recording])
    }
    // delete recordings...
    const deleteRecording = (recordingId: any) => {
        setRecordings(recordings.filter((recording: { recordingId: any; }) => recording.recordingId !== recordingId))
    }
    // set value for edit recording form...
    const editRecording = (recording: any) => {
        setEditing(true)
        setCurrentRecording({
            recordingId: recording.recordingId,
            recordingDescription: recording.recordingDescription,
            link: recording.link,
            password: recording.password
        })
    }
    //  update recording
    const updateRecording = (recordingId: any, updatedRecording: any) => {
        setEditing(false)
		console.log(recordingId,'idd')
        setRecordings(recordings.map((item: { recordingId: any; }) => {console.log(item.recordingId); return (item.recordingId === recordingId ? updatedRecording : item)}))
    }

    return (
        <div>
            <div className="row">
                {editing ? (
                    <div>
                        <h2 style={{textAlign:"center"}}>Edit Recording</h2>
                        <div>
                            <EditRecording
                                editing={editing}
                                setEditing={setEditing}
                                currentRecording={currentRecording}
                                updateRecording={updateRecording}
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 style={{textAlign:"center"}}>Recording</h2>
                        <div>
                            <AddRecording addRecording={addRecording} />
                        </div>
                    </div>
                )}

                
                    <div>
                        <RecordingList recordings={recordings} editRecording={editRecording} deleteRecording={deleteRecording} />
                    </div>
                
            </div>
        </div>
    );


}


export default RecordingMainComponent;