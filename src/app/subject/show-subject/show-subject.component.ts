import {Component, OnInit} from '@angular/core';
import {Subject} from "../../models/model.interface";
import {SubjectsService} from "../../services/subject/subjects.service";
import {ActivatedRoute} from "@angular/router";
import {CardPersonComponent} from "../../component/card-person/card-person.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-show-subject',
  standalone: true,
  imports: [
    CardPersonComponent,
    MatIcon
  ],
  templateUrl: './show-subject.component.html',
  styleUrl: './show-subject.component.css'
})
export class ShowSubjectComponent implements OnInit {
  subject?: Subject;

  constructor(
    private subjectService: SubjectsService,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.subjectService.get(id).subscribe(
      (result) => {
        if (result.data) {
          this.subject = result.data;
        }
      }
    )
  }
}
