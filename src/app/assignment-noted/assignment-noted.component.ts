import { Component, OnInit } from '@angular/core';
import { AssignmentStudent } from '../models/model.interface';
import { AssignmentStudentService } from '../services/assignment/assignment-student.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignment-noted',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './assignment-noted.component.html',
  styleUrl: './assignment-noted.component.css'
})
export class AssignmentNotedComponent implements OnInit {
  assignmentStudentList?: AssignmentStudent[];
  idAssignment: string = "";

  constructor (
    private assignmentStudentService: AssignmentStudentService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idAssignment = this.activeRoute.snapshot.params['idAssignment'];
    this.idAssignment = idAssignment;
   
      this.assignmentStudentService.getBySubject(`${idAssignment}`).subscribe(
        (response) => {
          if (response.datas) {
            this.assignmentStudentList = response.datas;
          }
        }
      )
  }
}
