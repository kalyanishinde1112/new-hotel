import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialogue1Component } from './dialogue1.component';

describe('Dialogue1Component', () => {
  let component: Dialogue1Component;
  let fixture: ComponentFixture<Dialogue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dialogue1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dialogue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
