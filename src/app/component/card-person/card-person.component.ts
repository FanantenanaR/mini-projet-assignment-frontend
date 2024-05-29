import { Component, Input } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-card-person',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './card-person.component.html',
  styleUrl: './card-person.component.css'
})
export class CardPersonComponent {
  @Input() title: string = "";
  @Input() profileUrl: string = "";
  @Input() roundedProfile = true;

  constructor() {
    if (this.profileUrl == "" || this.profileUrl == "#") {
      this.profileUrl = "https://cdn.dribbble.com/userupload/6045565/file/original-eb30c1bd543cfa6fa93ee5beabf9a9fd.jpg?resize=752x564";
    }
  }
}
