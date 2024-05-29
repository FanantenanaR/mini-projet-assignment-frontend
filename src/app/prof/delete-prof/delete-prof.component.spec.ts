import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfComponent } from './delete-prof.component';

describe('DeleteProfComponent', () => {
  let component: DeleteProfComponent;
  let fixture: ComponentFixture<DeleteProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
