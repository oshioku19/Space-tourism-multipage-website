import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarencabezadoComponent } from './navbarencabezado.component';

describe('NavbarencabezadoComponent', () => {
  let component: NavbarencabezadoComponent;
  let fixture: ComponentFixture<NavbarencabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarencabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
