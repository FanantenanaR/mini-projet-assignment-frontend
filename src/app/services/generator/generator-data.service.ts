import { Injectable } from '@angular/core';
import {GenericService} from "../basic/generic.service";
import {APIResponse, GeneratedData} from "../../models/model.interface";

@Injectable({
  providedIn: 'root'
})
export class GeneratorDataService {

  constructor(private apiService: GenericService) { }

  generate() {
    return this.apiService.get<APIResponse<GeneratedData>>("generator");
  }
}
