import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../department';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentsListComponent implements OnInit {
  @Input() public departments: Observable<Array<Department>>;
  ///@Output() 
  public selectedDpt: string;

  constructor() { }

  ngOnInit() {
  }

  public departmentClick(dptName: string) {
    console.log(dptName);
    this.selectedDpt = dptName;
  }
}
