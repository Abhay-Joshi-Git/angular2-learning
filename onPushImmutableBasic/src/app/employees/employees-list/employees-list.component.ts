import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from "rxjs/Observable";
import { Department } from '../../departments/department';
import { EmployeesService } from '../employees.service';
 
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesListComponent implements OnInit, OnChanges {
  @Input() public selectedDept: Department = null;

  public employees: Observable<Array<Employee>>;

  constructor(
    private empService: EmployeesService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDept &&
      (changes.selectedDept.currentValue !== changes.selectedDept.previousValue)
    ) {
      this.getEmployees();
    }
  }

  public getEmployees() {
    this.empService.getEmployees().flatMap((emp: any) => {
      if (this.selectedDept) {
        return (emp.department === this.selectedDept.name) ? Observable.of(emp) : Observable.empty();
      } else {
        return Observable.of(emp);
      }
    });    
  }
}
