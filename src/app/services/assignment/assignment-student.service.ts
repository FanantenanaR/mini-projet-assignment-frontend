import { Injectable } from '@angular/core';
import { GenericService } from '../basic/generic.service';
import { APIResponse, AssignmentStudent } from '../../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class AssignmentStudentService {

  uri = "assignmentStudent";

  constructor(private apiService: GenericService) { }

  getAll() {
    return this.apiService.get<APIResponse<AssignmentStudent>>(this.uri);
  }

  get(id: string) {
    return this.apiService.get<APIResponse<AssignmentStudent>>(`${this.uri}/${id}`);
  }
}
