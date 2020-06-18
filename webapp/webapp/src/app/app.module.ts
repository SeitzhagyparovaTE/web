import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {StudentDetailComponent} from "./students/student-detail/student-detail.component";
import {StudentsComponent} from "./students/students.component";
import {StudentListComponent} from "./students/student-list/student-list.component";
import {StudentService} from "./students/shared/student.service";
import {DisciplinesComponent} from './disciplines/disciplines.component';
import {DisciplineListComponent} from './disciplines/discipline-list/discipline-list.component';
import {DisciplineService} from "./disciplines/shared/discipline.service";
import {StudentNewComponent} from './students/student-new/student-new.component';
import {NodeComponent} from './movie/node.component';
import {NodeService} from "./movie/shared/NodeService";


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentsComponent,
    StudentListComponent,
    DisciplinesComponent,
    DisciplineListComponent,
    StudentNewComponent,
    NodeComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [StudentService, DisciplineService, NodeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
