import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentAngularComponent } from './ReactComponents/Comment/CommentAngularComponent';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./gateway/gateway.module').then((m) => m.GatewayModule),
  },
  {
    path: 'comment',
    component: CommentAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
