import { Injectable } from '@angular/core';
import { GenericService } from '../basic/generic.service';
import { APIResponse, APIResponsePaginated, AssignmentStudent } from '../../models/model.interface';

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

  getBySubject(subjectId: string) {
    return this.apiService.get<APIResponse<AssignmentStudent>>(`${this.uri}/subject/${subjectId}`);
  }

  submitAssignment(assignmentId: string, studentId: string, remarkFromStudent: string, linkAssignment: string) {
    return this.apiService.post<APIResponse<AssignmentStudent>>(`${this.uri}`, {
      assignmentId,
      studentId,
      remarkFromStudent,
      linkAssignment
    });
  }

  getAssignmentStudentPaginate(page:number, limit:number) {
    return this.apiService.get<APIResponsePaginated<AssignmentStudent>>(this.uri + "?page=" + page + "&limit=" + limit);
  }
}
