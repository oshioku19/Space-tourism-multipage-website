import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginahomemainComponent } from './paginahomemain.component';

describe('PaginahomemainComponent', () => {
  let component: PaginahomemainComponent;
  let fixture: ComponentFixture<PaginahomemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginahomemainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginahomemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
