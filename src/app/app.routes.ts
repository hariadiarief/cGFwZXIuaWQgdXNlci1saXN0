import { Routes } from '@angular/router';
import { UserListComponent } from './features/user-list/user-list.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
];
