import {Component, OnInit} from '@angular/core';
import {Prof, Subject} from "../../models/model.interface";
import {SubjectsService} from "../../services/subject/subjects.service";
import {ProfsService} from "../../services/prof/profs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-edit-subject',
  standalone: true,
  imports: [
    FormsModule,
    MatOption,
    MatSelect
  ],
  templateUrl: './edit-subject.component.html',
  styleUrl: './edit-subject.component.css'
})
export class EditSubjectComponent implements OnInit {
  subject?: Subject;
  profList?: Prof[];
  formData = {
    idProf: "",
    title: "",
    illustration: ""
  }


  constructor(
    private subjectService: SubjectsService,
    private profService: ProfsService,
    private routerActivated: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.routerActivated.snapshot.params['id'];
    this.subjectService.get(id).subscribe(
      (result) => {
        if (result.data) {
          this.subject = result.data;
          this.formData.idProf = result.data.prof;
          this.formData.title = result.data.title;
          this.formData.illustration = result.data.illustration;
          this.profService.getProfs().subscribe(
            (resultProf) => {
              if (resultProf.docs) {
                this.profList = resultProf.docs;
              }
            }
          );
        }
      }
    );
  }

  doUpdate () {
    if (this.subject && this.subject._id) {
      const title = this.formData.title !== this.subject.title ? this.formData.title : null;
      const illustration = this.formData.illustration !== this.subject.illustration ? this.formData.illustration : null;
      const idProf = this.formData.idProf !== this.subject.prof ? this.formData.idProf : null;
      if (title || illustration || idProf) {
        this.subjectService.update(this.subject._id, title, illustration, idProf).subscribe(
          async (result) => {
            if (result.data) {
              await this.router.navigateByUrl(`/subject/${result.data._id}`);
            }
          }
        )
      }
    }
  }
}
