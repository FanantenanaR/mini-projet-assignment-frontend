import { Injectable } from '@angular/core';
import {ErrorService} from "./error.service";
import axios from "axios";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";


export interface ApiResponse <T> {
  status: number;
  message: string;
  data?: T;
}

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  error: any = {};
  // private baseUrl: string = "http://localhost:8010/api";
  private baseUrl: string = "https://mini-projet-assignment-backend.onrender.com/api";
  constructor(private ErrorService: ErrorService, private http: HttpClient) {
    this.ErrorService.data$.subscribe((value) => (this.error = value));
  }
  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`).pipe(
      catchError((error: HttpErrorResponse) => {
        this.error = {
          statut: true,
          message: error.message,
        };
        this.ErrorService.updateData(this.error);
        // Renvoie une erreur observable
        return throwError(() => error);
      }));
  }
  post<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("POST caught error ", error.message);
        // Gérez l'erreur ici
        this.error = {
          statut: true,
          message: error.message,
        };
        this.ErrorService.updateData(this.error);
        // Renvoie une erreur observable
        return throwError(() => error);
      }));
  }
  delete<T>(path: string, id: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        // Gérez l'erreur ici
        this.error = {
          statut: true,
          message: error.message,
        };
        this.ErrorService.updateData(this.error);
        // Renvoie une erreur observable
        return throwError(() => error);
      }));
  }
  put<T>(path: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        // Gérez l'erreur ici
        this.error = {
          statut: true,
          message: error.message,
        };
        this.ErrorService.updateData(this.error);
        // Renvoie une erreur observable
        return throwError(() => error);
      }));
  }
}
