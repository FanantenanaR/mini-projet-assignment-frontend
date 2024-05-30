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
import { AssignmentProfService } from '../services/assignment/assignment-prof.service';

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
    assignementStudentId: "",
    note: 0,
    remark: ""
  }

  constructor (
    private assignmentStudentService: AssignmentStudentService,
    private activeRoute: ActivatedRoute,
    private assignmentProfService: AssignmentProfService
  ) {}

  ngOnInit(): void {
      const id = this.activeRoute.snapshot.params['id'];
      this.assignmentStudentService.get(id).subscribe(
        (result) => {
          if(result.data) {
            this.assignmentStudent = result.data;
            this.formData.assignementStudentId = this.assignmentStudent._id;
            this.formData.note = this.assignmentStudent.note ?? 0;
            this.formData.remark = this.assignmentStudent.remark ?? "";
          }
        }
      )
  }

  evaluateAssignment () {
    console.log('ok', this.formData.note);
    console.log('okRemark', this.formData.remark);

    this.assignmentProfService.notation(
      this.formData.assignementStudentId,
      this.formData.note,
      this.formData.remark
    ).subscribe(
      async (result) => {
        if (result.data) {
          console.log('ok', result.data);
          
        }
      }
    )
  }
}
