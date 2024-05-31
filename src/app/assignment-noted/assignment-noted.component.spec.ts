import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentNotedComponent } from './assignment-noted.component';

describe('AssignmentNotedComponent', () => {
  let component: AssignmentNotedComponent;
  let fixture: ComponentFixture<AssignmentNotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentNotedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentNotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
