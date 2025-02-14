import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcconutAdminComponent } from './acconut-admin.component';

describe('AcconutAdminComponent', () => {
  let component: AcconutAdminComponent;
  let fixture: ComponentFixture<AcconutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcconutAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcconutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
