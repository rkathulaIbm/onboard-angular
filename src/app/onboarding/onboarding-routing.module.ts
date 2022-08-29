import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssociatesComponent } from '../all-associates/all-associates.component';
import { CheckListAngularComponent } from '../ReactComponents/On-Boarding-CheckList/CheckListAngularComponent';
import { UpdateAngularComponent } from '../ReactComponents/UpdateDeleteDocuments/UpdateAngularComponent';
import { OnboardComponentComponent } from './onboard-component/onboard-component.component';
import { AratiComponent } from './arati/arati.component';
import { TrainingAngularComponent } from '../ReactComponents/Training/TrainingAngularComponent';
import { RecordingAngularComponent } from '../ReactComponents/Recording/RecordingAngularComponent';

const routes: Routes = [
  { path: 'addNewAssociate', component: OnboardComponentComponent },
  { path: 'allAssociates', component: AllAssociatesComponent },
  { path: 'checkList', component: CheckListAngularComponent },
  { path: 'updatedoc', component: UpdateAngularComponent },
  {path: 'aratirouting', component:AratiComponent},
  {path: 'training', component:TrainingAngularComponent},
  {path: 'recording', component:RecordingAngularComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
