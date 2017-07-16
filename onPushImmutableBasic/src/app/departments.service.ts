import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DepartmentsService {
  public departmentsData = [
    {
      name: 'accounts',
      hod: 'Mark'
    },
    {
      name: 'sales',
      hod: 'Peter'
    },
    {
      name: 'production',
      hod: 'Tim'
    }
  ];

  constructor() { }

  public getDepartments() {
    return Observable.of(this.departmentsData);
  }
}
