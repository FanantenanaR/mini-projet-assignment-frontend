import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { AssignmentProf } from '../models/model.interface';
import { AssignmentProfService } from '../services/assignment/assignment-prof.service';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-list-assignments',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './list-assignments.component.html',
  styleUrl: './list-assignments.component.css'
})
export class ListAssignmentsComponent implements OnInit {
  assignmentProfList?: AssignmentProf[];

  constructor (private assignmentProfService: AssignmentProfService,
               private authService: AuthService) {}

  ngOnInit(): void {
    this.assignmentProfService.getAll().subscribe(
      (response) => {
        if (response.datas) {
          this.assignmentProfList = response.datas;
        }
      }
    )
  }

  isProf() {
    return this.authService.isProf();
  }
}
