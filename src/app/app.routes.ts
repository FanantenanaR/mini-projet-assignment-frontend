import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { ListStudentAssignmentsComponent } from './list-student-assignments/list-student-assignments.component';
import { ListAssignmentsComponent } from './list-assignments/list-assignments.component';
import { DetailAssignmentComponent } from './detail-assignment/detail-assignment.component';
import {LoginComponent} from "./authentication/login/login.component";
import {TemplateComponent} from "./layout/template/template.component";
import {SubmitComponent} from "./assignments/student/submit/submit.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AssignmentsComponent ,
    canActivate: [authGuard]},
  { path: 'template', component: TemplateComponent },
  { path: 'assignment/:id/submit', component: SubmitComponent ,
    canActivate: [authGuard]},
  { path: "add", component: AddAssignmentComponent },
  { path: "assignment/:id", component: AssignmentDetailComponent,
    canActivate: [authGuard]},
  {
    path: "assignment/:id/edit",
    component: EditAssignmentComponent,
    canActivate: [authGuard]
  },
  {
    path: "assignment-student",
    component: ListStudentAssignmentsComponent
  },
  {
    path: "list-assignments",
    component: ListAssignmentsComponent
  },
  {
    path: "detail-assignment",
    component: DetailAssignmentComponent
  },
  {
    path: "auth/login",
    component: LoginComponent
  }
];
