import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  constructor(private http: HttpClient) { }

  //Post method for adding a new employee
  createEmployee(employee: Object):Observable<Object>{
      return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployeeList():Observable<any>{
      return this.http.get(`${this.baseUrl}`);
  }

  updateEmployee(id:number,value:any):Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
}

getEmployee(id:number,):Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}

}
