import { Injectable } from '@angular/core';
import {LoggingService} from "../../shared/logging.service";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "../basic/generic.service";
import {APIResponse, APIResponsePaginated, Subject} from "../../models/model.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  uri = "subject";

  constructor(private logService:LoggingService,
              private http:HttpClient,
              private apiService: GenericService) { }

  getSubjectProf(idProf: string): Observable<APIResponsePaginated<Subject>> {
    return this.apiService.get<APIResponsePaginated<Subject>>(`${this.uri}/?prof=${idProf}&doPagination=false`);
  }

  getAll(
    title: string | null = null,
    prof: string | null = null,
    orderBy: string = "title.asc",
    doPagination: boolean = true,
    page: number = 1,
    limit: number = 10
  ) {
    return this.apiService.get<APIResponsePaginated<Subject>>(
      `${this.uri}/?title=${title}&prof=${prof ?? ""}&orderBy=${orderBy}&doPagination=${doPagination}&page=${page}&limit=${limit}`
    );
  }

  get(id: string) {
    return this.apiService.get<APIResponse<Subject>>(`${this.uri}/${id}`);
  }

  create(title: string, illustration: string, idProf: string) {
    return this.apiService.post<APIResponse<Subject>>(this.uri, {
      title: title,
      illustration: illustration,
      prof: idProf
    });
  }

  update(id: string, title: string | null = null, illustration: string | null = null, idProf: string | null = null) {
    return this.apiService.put<APIResponse<Subject>>(`${this.uri}/${id}`, {
      title: title,
      illustration: illustration,
      prof: idProf
    });

  }
}
