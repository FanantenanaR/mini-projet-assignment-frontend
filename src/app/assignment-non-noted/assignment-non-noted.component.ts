import { Component } from '@angular/core';
import { AssignmentStudent } from '../models/model.interface';
import { AssignmentStudentService } from '../services/assignment/assignment-student.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignment-non-noted',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './assignment-non-noted.component.html',
  styleUrl: './assignment-non-noted.component.css'
})
export class AssignmentNonNotedComponent {
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
