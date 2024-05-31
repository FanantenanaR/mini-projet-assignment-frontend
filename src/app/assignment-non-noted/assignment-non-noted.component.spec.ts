import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentNonNotedComponent } from './assignment-non-noted.component';

describe('AssignmentNonNotedComponent', () => {
  let component: AssignmentNonNotedComponent;
  let fixture: ComponentFixture<AssignmentNonNotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentNonNotedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignmentNonNotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
