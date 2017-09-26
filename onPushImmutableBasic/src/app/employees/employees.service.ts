import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeesService {
  public employees = [
    {
      name: 'Likoy',
      department: 'accounts',
    },
    {
      name: 'Kiel',
      department: 'accounts',
    },
    {
      name: 'Hugo',
      department: 'sales',
    },
    {
      name: 'Polo',
      department: 'production',
    }
  ];
  constructor() { }
  public getEmployees(): Observable<Array<Employee>> {
    return Observable.of(this.employees);
  }
}
