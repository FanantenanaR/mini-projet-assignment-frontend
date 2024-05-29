import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ProfsService} from "../../services/prof/profs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-prof',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-prof.component.html',
  styleUrl: './create-prof.component.css'
})
export class CreateProfComponent {
  formData = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  }

  constructor(private profService: ProfsService,
              private route: Router) {
  }

  doInsertion () {
    this.profService.create(
      this.formData.firstname,this.formData.lastname,
      this.formData.email, this.formData.password
    ).subscribe(
      async (result) => {
        if (result.data) {
          await this.route.navigateByUrl(`/prof/${result.data._id}`);
        }
      }
    )
  }
}
