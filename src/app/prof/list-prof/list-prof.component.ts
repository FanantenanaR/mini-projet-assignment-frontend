import {Component, OnInit} from '@angular/core';
import {CardPersonComponent} from "../../component/card-person/card-person.component";
import {ProfsService} from "../../services/prof/profs.service";
import {Prof} from"../../models/model.interface"

@Component({
  selector: 'app-list-prof',
  standalone: true,
  imports: [
    CardPersonComponent
  ],
  templateUrl: './list-prof.component.html',
  styleUrl: './list-prof.component.css'
})
export class ListProfComponent implements OnInit {
  profList: Prof[] = [];

  constructor(private profService: ProfsService) {
  }

  ngOnInit(): void {
    this.profService.getProfs().subscribe((result) => {
      this.profList = result.docs;
    });
  }


}
