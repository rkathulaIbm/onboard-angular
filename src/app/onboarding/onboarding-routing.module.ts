import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssociatesComponent } from '../all-associates/all-associates.component';
import { AngularReactComponent } from '../angular-react/angular-react.component';
import { AratiComponent } from './arati/arati.component';
import { OnboardComponentComponent } from './onboard-component/onboard-component.component';

const routes: Routes = [
  { path: 'addNewAssociate', component: OnboardComponentComponent },
  { path: 'allAssociates', component: AllAssociatesComponent },
  { path: 'angularReact', component:AngularReactComponent},
  {path: 'aratirouting', component:AratiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
