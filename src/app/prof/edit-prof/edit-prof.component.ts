import {Component, OnInit} from '@angular/core';
import {Prof} from "../../models/model.interface";
import {ProfsService} from "../../services/prof/profs.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-prof',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-prof.component.html',
  styleUrl: './edit-prof.component.css'
})
export class EditProfComponent implements OnInit {
  prof?: Prof;

  newInformation = {
    lastname: "",
    firstname: "",
    profilePictureLink: ""
  }

  constructor(private profService: ProfsService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.profService.get(id).subscribe(
      (result) => {
        if(result.data) {
          this.prof = result.data;
          this.newInformation.firstname = this.prof.firstname;
          this.newInformation.lastname = this.prof.lastname;
          this.newInformation.profilePictureLink = this.prof.profilPicture;
        }
      }
    )
  }

  updateProf() {
    if (this.prof) {
      const id = this.route.snapshot.params['id'];
      console.log(this.newInformation);
      const firstname  = this.newInformation.firstname !== this.prof.firstname ? this.newInformation.firstname : null;
      const lastname = this.newInformation.lastname !== this.prof.lastname ? this.newInformation.lastname : null;
      const profilePicture = this.newInformation.profilePictureLink !== this.prof.profilPicture ? this.newInformation.profilePictureLink : null;
      if (firstname || lastname || profilePicture) {
        console.log("firstname", firstname);
        console.log("lastname", lastname);
        this.profService.update(id, firstname, lastname, profilePicture).subscribe(
          async (result) => {
            await this.router.navigateByUrl(`/prof/${id}`);
            // console.log(result);
          }
        )
      }
    }
  }
}
