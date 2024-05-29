import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfComponent } from './show-prof.component';

describe('ShowProfComponent', () => {
  let component: ShowProfComponent;
  let fixture: ComponentFixture<ShowProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
