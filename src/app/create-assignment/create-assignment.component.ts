import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AssignmentProfService } from '../services/assignment/assignment-prof.service';
import { AssignmentStudentService } from '../services/assignment/assignment-student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './create-assignment.component.html',
  styleUrl: './create-assignment.component.css'
})
export class CreateAssignmentComponent implements OnInit {
  formData = {
    assignmentId: "",
    studentId: "",
    remarkFromStudent: "",
    linkAssignment: ""
  }

  constructor (
    private assignmentStudentService: AssignmentStudentService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formData.linkAssignment = "";
    this.formData.remarkFromStudent = "";
  }

  submitAssignment () {
    const idAssignment = this.activateRoute.snapshot.params['idAssignment'];
    const studentId = this.authService.getIdStudent();
    this.assignmentStudentService.submitAssignment(
      idAssignment,
      studentId,
      this.formData.remarkFromStudent,
      this.formData.linkAssignment
    ).subscribe(
      async (result) => {
        if (result) {
          if (result.data) {
            await this.route.navigateByUrl("list-assignments");
          }
        }
      }
    )
  }
}
