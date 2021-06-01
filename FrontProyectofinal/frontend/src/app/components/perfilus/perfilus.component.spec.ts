import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilusComponent } from './perfilus.component';

describe('PerfilusComponent', () => {
  let component: PerfilusComponent;
  let fixture: ComponentFixture<PerfilusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
