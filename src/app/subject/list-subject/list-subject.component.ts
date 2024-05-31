import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTextColumn
} from "@angular/material/table";
import {Subject} from "../../models/model.interface";
import {SubjectsService} from "../../services/subject/subjects.service";
import {DatePipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-subject',
  standalone: true,
  imports: [
    MatTable,
    DatePipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTextColumn,
    MatHeaderCellDef,
    MatIcon,
    MatLabel,
    MatSelect,
    MatOption,
    MatFormField,
    MatInput,
    FormsModule
  ],
  templateUrl: './list-subject.component.html',
  styleUrl: './list-subject.component.css'
})
export class ListSubjectComponent implements OnInit {
  listSubject?: Subject[];

  searchInput = "";
  orderBy = "title.asc";

  displayedColumns: string[] = ['illustration','title', 'prof', 'action'];

  constructor(private subjectService: SubjectsService) {
  }

  ngOnInit() {
    this.subjectService.getAll(null, null, this.orderBy, false).subscribe(
      (result) => {
        if (result.docs) {
          this.listSubject = result.docs;
        }
      }
    )
  }

  applyFilter() {
    this.subjectService.getAll(
      this.searchInput, null, this.orderBy,
      false
    ).subscribe(
      (result) => {
        if (result.docs) {
          this.listSubject = result.docs;
        }
      }
    )
  }
}
