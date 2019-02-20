import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
];
