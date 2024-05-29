import {Component, signal} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
  isSelected: boolean;
}
@Component({
  selector: 'app-template',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  menuItems = signal<MenuItem[]>([]);
}
