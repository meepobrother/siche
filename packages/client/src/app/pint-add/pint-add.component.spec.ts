import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintAddComponent } from './pint-add.component';

describe('PintAddComponent', () => {
  let component: PintAddComponent;
  let fixture: ComponentFixture<PintAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
