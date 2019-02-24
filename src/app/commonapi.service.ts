import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Details } from './details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonapiService {
  empDetailsURL = '/api/details/'
  allDetailsURL = '/api/details';
  addEmployeeURL = '/api/addemployee';
  deleteEmployeeURL = '/api/deleteEmployee/';
  updateEmployeeURL = '/api/updateEmployee/';

  constructor(
    private http: HttpClient
  ) { }

  getAllDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(this.allDetailsURL, httpOptions);    
  }

  addEmployee(empData): Observable<Details[]> {
    return this.http.post<Details[]>(this.addEmployeeURL, empData);
  }

  editEmployee(empId): Observable<Details[]> {
    return this.http.get<Details[]>(this.empDetailsURL + empId, httpOptions);    
  }

  updateEmployee(empId, updatedData): Observable<Details[]> {
    return this.http.put<Details[]>(this.updateEmployeeURL + empId, updatedData, httpOptions);    
  }

  removeEmployee(empId): Observable<Details[]> {
    return this.http.delete<Details[]>(this.deleteEmployeeURL + empId);
  }
}
