import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '1' },
  { path: '1', component: AboutComponent },
  { path: '2', component: UsersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      // { enableTracing: true }
    )],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
