import {Component, OnInit} from '@angular/core';
import {Prof, Subject} from "../../models/model.interface";
import {ProfsService} from "../../services/prof/profs.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CardPersonComponent} from "../../component/card-person/card-person.component";
import {SubjectsService} from "../../services/subject/subjects.service";
import {MatTable} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-show-prof',
  standalone: true,
  imports: [
    CardPersonComponent,
    MatTable,
    MatIcon,
    RouterLink
  ],
  templateUrl: './show-prof.component.html',
  styleUrl: './show-prof.component.css'
})
export class ShowProfComponent implements OnInit {
  prof: Prof | undefined;
  subjects?: Subject[];
  profilePicture: string = "https://cdn.dribbble.com/userupload/6045565/file/original-eb30c1bd543cfa6fa93ee5beabf9a9fd.jpg?resize=752x564";
  constructor(private profService: ProfsService,
              private subjectService: SubjectsService,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.profService.get(`${id}`).subscribe(
      (result) => {
        if (result.data) {
          this.prof = result.data;
          if (result.data.profilPicture != "") {
            this.profilePicture = result.data.profilPicture;
          }
          if (this.prof._id) {
            this.subjectService.getSubjectProf(this.prof._id).subscribe(
              (result) => {
                if (result) {
                  this.subjects = result.docs;
                }
              }
            )
          }

        }
      }
    )
  }
}
