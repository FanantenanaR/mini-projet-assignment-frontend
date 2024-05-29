import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentAssignmentsComponent } from './list-student-assignments.component';

describe('ListStudentAssignmentsComponent', () => {
  let component: ListStudentAssignmentsComponent;
  let fixture: ComponentFixture<ListStudentAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStudentAssignmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListStudentAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
