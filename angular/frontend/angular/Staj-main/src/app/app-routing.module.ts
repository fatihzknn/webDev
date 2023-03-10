import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details/details.component';
import { UpdateComponent } from './pages/update/update/update.component';
import { UserComponent } from './pages/user/user/user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'userdetails/:id',component:DetailsComponent},
  {path:'Update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
