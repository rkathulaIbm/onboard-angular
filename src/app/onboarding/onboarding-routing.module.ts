import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssociatesComponent } from '../all-associates/all-associates.component';
import { CheckListAngularComponent } from '../ReactComponents/On-Boarding-CheckList/CheckListAngularComponent';
import { UpdateAngularComponent } from '../ReactComponents/UpdateDeleteDocuments/UpdateAngularComponent';
import { OnboardComponentComponent } from './onboard-component/onboard-component.component';
import { AratiComponent } from './arati/arati.component';

const routes: Routes = [
  { path: 'addNewAssociate', component: OnboardComponentComponent },
  { path: 'allAssociates', component: AllAssociatesComponent },
  { path: 'checkList', component: CheckListAngularComponent },
  { path: 'updatedoc', component: UpdateAngularComponent },
  {path: 'aratirouting', component:AratiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
