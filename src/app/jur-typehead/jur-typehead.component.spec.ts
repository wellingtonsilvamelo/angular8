import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurTypeheadComponent } from './jur-typehead.component';

describe('JurTypeheadComponent', () => {
  let component: JurTypeheadComponent;
  let fixture: ComponentFixture<JurTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurTypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
