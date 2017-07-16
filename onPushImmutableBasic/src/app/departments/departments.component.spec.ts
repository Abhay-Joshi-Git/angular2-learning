import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetsComponent } from './departmets.component';

describe('DepartmetsComponent', () => {
  let component: DepartmetsComponent;
  let fixture: ComponentFixture<DepartmetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
