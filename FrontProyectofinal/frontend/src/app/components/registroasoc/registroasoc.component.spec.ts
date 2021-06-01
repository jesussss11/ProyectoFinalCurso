import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroasocComponent } from './registroasoc.component';

describe('RegistroasocComponent', () => {
  let component: RegistroasocComponent;
  let fixture: ComponentFixture<RegistroasocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroasocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroasocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
