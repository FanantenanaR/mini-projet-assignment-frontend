import { Injectable } from '@angular/core';
import { GenericService } from '../basic/generic.service';
import { APIResponse, AssignmentProf, AssignmentStudent } from '../../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class AssignmentProfService {

  uri = "assignmentProf";

  constructor(private apiService: GenericService) { }

  getAll() {
    return this.apiService.get<APIResponse<AssignmentProf>>(this.uri);
  }

  get(id: string) {
    return this.apiService.get<APIResponse<AssignmentProf>>(`${this.uri}/${id}`);
  }

  notation(assignementStudentId: string, note: number, remark: string) {
    return this.apiService.post<APIResponse<AssignmentStudent>>(`${this.uri}/evaluate`, {
      assignementStudentId,
      note,
      remark
    });
  }
}
