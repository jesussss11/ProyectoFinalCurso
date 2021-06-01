import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialusComponent } from './historialus.component';

describe('HistorialusComponent', () => {
  let component: HistorialusComponent;
  let fixture: ComponentFixture<HistorialusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
