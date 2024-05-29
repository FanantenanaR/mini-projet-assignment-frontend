import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-student-assignments',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './list-student-assignments.component.html',
  styleUrl: './list-student-assignments.component.css'
})
export class ListStudentAssignmentsComponent {

}
