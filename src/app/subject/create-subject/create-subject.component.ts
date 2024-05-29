import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {SubjectsService} from "../../services/subject/subjects.service";
import {Prof} from "../../models/model.interface";
import {ProfsService} from "../../services/prof/profs.service";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-subject',
  standalone: true,
  imports: [
    FormsModule,
    MatSelect,
    MatOption,
    NgOptimizedImage
  ],
  templateUrl: './create-subject.component.html',
  styleUrl: './create-subject.component.css'
})
export class CreateSubjectComponent implements OnInit {
  formData = {
    idProf: "",
    title: "",
    illustration: ""
  }

  profList?: Prof[];

  doInsertion () {
    this.subjectService.create(
      this.formData.title,
      this.formData.illustration,
      this.formData.idProf
    ).subscribe(
      async (result) => {
        if (result.data) {
          await this.route.navigateByUrl(`/subject/${result.data._id}`);
        }
      }
    )
  }

  constructor(
    private subjectService: SubjectsService,
    private profService: ProfsService,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.profService.getProfs().subscribe(
      (result) => {
        if (result.docs) {
          this.profList = result.docs;
        }
      }
    )
  }
}
