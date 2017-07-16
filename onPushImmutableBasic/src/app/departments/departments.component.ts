import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { Observable } from 'rxjs';
import { Department } from './department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentsComponent implements OnInit {
  public departmentsData: Observable<Array<Department>> = null;

  constructor(
    private dptService: DepartmentsService
  ) { }

  ngOnInit() {
    this.departmentsData = this.dptService.getDepartments();
    // this.departmentsData.subscribe((data) => {
    //   console.log(data);
    //})
    // this.departmentsData = Observable.of([
    //   {
    //     name: 'sdf',
    //     hod: 'dsd'
    //   }
    // ]);
  }

}
