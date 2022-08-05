import React, { useState } from 'react';
import TrainingList from './TrainingList';
import {trainingData} from "../../../json/response/trainingData";
import AddTraining from './AddTraining';
import EditTraining from './EditTraining';

const TrainingMainComponent = () => {

    const initialFormState = { trainingId: '', trainingName: '', link: '', remarks: '' }
    const [trainings, setTrainings] = useState(trainingData)
    const [editing, setEditing] = useState(false);
    const [currentTraining, setCurrentTraining] = useState(initialFormState)
    // Add training...
    const addTraining = (training: { trainingId: any; }) => {
        training.trainingId = trainings.length + 1
        setTrainings([...trainings, training])
    }
    // delete trainings...
    const deleteTraining = (trainingId: any) => {
        setTrainings(trainings.filter((training: { trainingId: any; }) => training.trainingId !== trainingId))
    }
    // set value for edit training form...
    const editTraining = (training: any) => {
        setEditing(true)
        setCurrentTraining({
            trainingId: training.trainingId,
            trainingName: training.trainingName,
            link: training.link,
            remarks: training.remarks
        })
    }
    //  update training
    const updateTraining = (trainingId: any, updatedTraining: any) => {
        setEditing(false)
		console.log(trainingId,'idd')
        setTrainings(trainings.map((item: { trainingId: any; }) => {console.log(item.trainingId); return (item.trainingId === trainingId ? updatedTraining : item)}))
    }

    return (
        <div>
            <div className="row">
                {editing ? (
                    <div>
                        <h2 style={{textAlign:"center"}}>Edit Training</h2>
                        <div>
                            <EditTraining
                                editing={editing}
                                setEditing={setEditing}
                                currentTraining={currentTraining}
                                updateTraining={updateTraining}
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 style={{textAlign:"center"}}>Add Training</h2>
                        <div>
                            <AddTraining addTraining={addTraining} />
                        </div>
                    </div>
                )}

                
                    <div>
                        <TrainingList trainings={trainings} editTraining={editTraining} deleteTraining={deleteTraining} />
                    </div>
                
            </div>
        </div>
    );


}


export default TrainingMainComponent;