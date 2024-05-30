import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AssignmentStudent } from '../models/model.interface';
import { AssignmentStudentService } from '../services/assignment/assignment-student.service';

@Component({
  selector: 'app-list-student-assignments',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './list-student-assignments.component.html',
  styleUrl: './list-student-assignments.component.css'
})
export class ListStudentAssignmentsComponent implements OnInit {
  assignmentStudentList?: AssignmentStudent[];

  constructor (
    private assignmentStudentService: AssignmentStudentService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idAssignment = this.activeRoute.snapshot.params['idAssignment'];
   
      this.assignmentStudentService.getBySubject(`${idAssignment}`).subscribe(
        (response) => {
          if (response.datas) {
            this.assignmentStudentList = response.datas;
          }
        }
      )
  }
}
