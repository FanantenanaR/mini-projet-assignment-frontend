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
import {ListProfComponent} from "./prof/list-prof/list-prof.component";
import {ShowProfComponent} from "./prof/show-prof/show-prof.component";
import {EditProfComponent} from "./prof/edit-prof/edit-prof.component";
import {CreateProfComponent} from "./prof/create-prof/create-prof.component";
import {ListSubjectComponent} from "./subject/list-subject/list-subject.component";
import {ShowSubjectComponent} from "./subject/show-subject/show-subject.component";
import {EditSubjectComponent} from "./subject/edit-subject/edit-subject.component";
import {DeleteSubjectComponent} from "./subject/delete-subject/delete-subject.component";
import {CreateSubjectComponent} from "./subject/create-subject/create-subject.component";
import {CreateAssignmentComponent} from "./create-assignment/create-assignment.component";

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
    path: "prof",
    component: ListProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "prof/create",
    component: CreateProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "prof/:id",
    component: ShowProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "prof/:id/edit",
    component: EditProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "prof/:id/delete",
    component: EditProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "prof/:id/delete",
    component: EditProfComponent,
    canActivate: [authGuard]
  },
  {
    path: "subject",
    component: ListSubjectComponent,
    canActivate: [authGuard]
  },
  {
    path: "subject/create",
    component: CreateSubjectComponent,
    canActivate: [authGuard]
  },
  {
    path: "subject/:id",
    component: ShowSubjectComponent,
    canActivate: [authGuard]
  },
  {
    path: "subject/:id/edit",
    component: EditSubjectComponent,
    canActivate: [authGuard]
  },
  {
    path: "subject/:id/delete",
    component: DeleteSubjectComponent,
    canActivate: [authGuard]
  },
  {
    path: "assignment-student/:idAssignment",
    component: ListStudentAssignmentsComponent
  },
  {
    path: "list-assignments",
    component: ListAssignmentsComponent
  },
  {
    path: "detail-assignment/:id",
    component: DetailAssignmentComponent
  },
  {
    path: "student/create-assignment/:idAssignment",
    component: CreateAssignmentComponent,
  },
  {
    path: "auth/login",
    component: LoginComponent
  }
];
