import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AssignmentStudent } from '../models/model.interface';
import { AssignmentStudentService } from '../services/assignment/assignment-student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-assignment',
  standalone: true,
  imports:  [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule, MatCardModule],
  templateUrl: './detail-assignment.component.html',
  styleUrl: './detail-assignment.component.css'
})
export class DetailAssignmentComponent implements OnInit {
  assignmentStudent?: AssignmentStudent;
  formData = {
    remark: ""
  }

  constructor (
    private assignmentStudentService: AssignmentStudentService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id = this.activeRoute.snapshot.params['id'];
      this.assignmentStudentService.get(id).subscribe(
        (result) => {
          if(result.data) {
            this.assignmentStudent = result.data;
          }
        }
      )
  }
}
