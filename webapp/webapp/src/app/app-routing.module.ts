import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./students/student-detail/student-detail.component";
import {DisciplinesComponent} from "./disciplines/disciplines.component";
import {StudentNewComponent} from "./students/student-new/student-new.component";
import {NodeComponent} from "./movie/node.component";


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'students', component: StudentsComponent},
  {path: 'student/detail/:id', component: StudentDetailComponent},
  {path: 'student/new', component: StudentNewComponent},

  {path: 'disciplines', component: DisciplinesComponent},
  {path: 'nodes', component: NodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
