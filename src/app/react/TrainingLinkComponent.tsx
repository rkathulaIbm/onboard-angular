import * as  React from 'react';
import { FunctionComponent } from 'react';
import Child from './Child.component';

export interface ISampleComponentProps {
    triggerEventFromReact?: (event: Event) => void;
    handleOnChangeFromAngular? : (event: any) => void;
}

 const TrainingLinkComponent = (props: any) => {
    const [trainingList, setTrainingList] = React.useState(["https://yourlearning.ibm.com/activity/PLAN-7D6F2B8A5C8F",
    "https://yourlearning.ibm.com/activity/WWBCG-BCG20220215",
    "https://yourlearning.ibm.com/activity/EL05-00000005",
    "https://yourlearning.ibm.com/activity/EL05-00000007",
    "https://yourlearning.ibm.com/activity/ILB-JYWQQXNPZZMZ22QK",
    "https://yourlearning.ibm.com/activity/EL01-00001940",
    "https://yourlearning.ibm.com/#activity/LT-4542",
    "https://yourlearning.ibm.com/#activity/LT-4543",
    "https://yourlearning.ibm.com/#activity/LT-4544",
    "https://yourlearning.ibm.com/#activity/LT-4546",
    "https://yourlearning.ibm.com/#activity/LT-4547",
    "https://yourlearning.ibm.com/#activity/EL01-00001110",
    "https://yourlearning.ibm.com/activity/EL01-00001111",
    "https://yourlearning.ibm.com/#activity/EL01-00001112",
    "https://yourlearning.ibm.com/activity/PLAN-F0EAB6634998",
    "https://yourlearning.ibm.com/activity/SAI-IBM-EXDP02AIBM"]);

    return ( 
    <div >
       <ul >
          <li >List item 1</li>
          <li >List item 2</li>
          <li >List item 3</li>
        </ul>
    </div>
    )
}

export default TrainingLinkComponent;  

