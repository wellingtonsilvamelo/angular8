import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTesauroTextComponent } from './select-tesauro-text.component';

describe('SelectTesauroTextComponent', () => {
  let component: SelectTesauroTextComponent;
  let fixture: ComponentFixture<SelectTesauroTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTesauroTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTesauroTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
