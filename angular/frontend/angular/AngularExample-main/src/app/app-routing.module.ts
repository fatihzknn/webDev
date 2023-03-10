import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

import { UserComponent } from './pages/user/user.component';

const routes: Routes = [

  { path: "", component: UserComponent },
  { path: 'user-detail', component: UserDetailComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
