import { Component } from '@angular/core';
import {GeneratedData} from "../../models/model.interface";
import {GeneratorDataService} from "../../services/generator/generator-data.service";

@Component({
  selector: 'app-generate-data',
  standalone: true,
  imports: [],
  templateUrl: './generate-data.component.html',
  styleUrl: './generate-data.component.css'
})
export class GenerateDataComponent {
  generatedDataResult: GeneratedData = {
    numberProf: 0,
    numberStudent: 0,
    numberSubject: 0,
    numberAssignmentProf: 0,
    numberAssignmentStudent: 0
  }

  isLoading = false;

  constructor(private generatorDataService: GeneratorDataService) {

  }

  generateNow () {
    this.isLoading = true;
    this.generatorDataService.generate().subscribe(
      (result) => {
        this.isLoading = false;
        if (result.data) {
          this.generatedDataResult = result.data;
        }
      }
    )
  }
}
