import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssociatesComponent } from '../all-associates/all-associates.component';
import { OnboardComponentComponent } from './onboard-component/onboard-component.component';

const routes: Routes = [
  { path: 'addNewAssociate', component: OnboardComponentComponent },
  { path: 'allAssociates', component: AllAssociatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
