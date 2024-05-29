import { Injectable } from '@angular/core';
import {LoggingService} from "../../shared/logging.service";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "../basic/generic.service";
import {Observable} from "rxjs";
import {APIResponse, APIResponsePaginated, Prof} from "../../models/model.interface";

@Injectable({
  providedIn: 'root'
})
export class ProfsService {

  uri = 'prof';
  constructor(private logService:LoggingService,
              private http:HttpClient,
              private apiService: GenericService) { }

  getProfs(): Observable<APIResponsePaginated<Prof>> {
    return this.apiService.get<APIResponsePaginated<Prof>>(this.uri);
  }

  get(id: string): Observable<APIResponse<Prof>> {
    return this.apiService.get<APIResponse<Prof>>(this.uri+"/"+id);
  }

  update(
    id: string,
    firstname: string | null = null,
    lastname: string | null = null,
    profilePicture: string | null = null
  ): Observable<APIResponse<Prof>> {
    return this.apiService.put<APIResponse<Prof>>(`${this.uri}/${id}`, {
      firstname: firstname,
      lastname: lastname,
      profilPicture: profilePicture
    })
  }

  create(firstname: string, lastname: string, email: string, password: string): Observable<APIResponse<Prof>> {
    return this.apiService.post<APIResponse<Prof>>(`${this.uri}/`, {
      firstname,
      lastname,
      email,
      password
    });
  }

}
