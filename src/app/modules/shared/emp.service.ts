import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmpService {
  mockUrl = "http://localhost:3000/Employee";

  currentEmp: Employee = {
    id: null,
    name: '',
    phone: '',
    city: '',
    address_line1: '',
    address_line2: '',
    postal_code: '',
  }

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.mockUrl, headerOption)
  }

  onDeleteEmp(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.mockUrl + '/' + id, headerOption)
  }

  createEmp(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.mockUrl, emp, headerOption)
  }
  updateEmp(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.mockUrl + '/' + emp.id, emp, headerOption)
  }
}
