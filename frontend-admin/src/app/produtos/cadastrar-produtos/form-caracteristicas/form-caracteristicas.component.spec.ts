import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCaracteristicasComponent } from './form-caracteristicas.component';

describe('FormCaracteristicasComponent', () => {
  let component: FormCaracteristicasComponent;
  let fixture: ComponentFixture<FormCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCaracteristicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
