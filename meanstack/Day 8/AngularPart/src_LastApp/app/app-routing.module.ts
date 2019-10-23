import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MongodbComponent } from './Components/mongodb/mongodb.component';
import { NewEmpComponent } from './Components/new-emp/new-emp.component';
import { EmpDetailComponent } from './Components/emp-detail/emp-detail.component';


const routes: Routes = [
  { path: "All", component : MongodbComponent },
  { path: "AddNew", component : NewEmpComponent },
  { path: "detail", component : EmpDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
