import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckListAngularComponent } from '../ReactComponents/On-Boarding-CheckList/CheckListAngularComponent';
import { HomeComponent } from './home/home.component';
import {UpdateAngularComponent} from "../ReactComponents/UpdateDeleteDocuments/UpdateAngularComponent"

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'associate',
        loadChildren: () =>
          import('../onboarding/onboarding.module').then(
            (m) => m.OnboardingModule
          ),
      },
      {
        path: 'checkList',
        component: CheckListAngularComponent,
      },
      {
        path: 'updatedoc',
        component: UpdateAngularComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatewayRoutingModule {}
