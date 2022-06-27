import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssociatesComponent } from './all-associates/all-associates.component';
import { AppComponent } from './app.component';
import { OnboardComponentComponent } from './onboard-component/onboard-component.component';

const routes: Routes = [

  { path: 'allAssociates', component: AllAssociatesComponent },
  { path: 'addNewAssociate', component: OnboardComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
