import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosBasicosComponent } from './form-dados-basicos.component';

describe('FormDadosBasicosComponent', () => {
  let component: FormDadosBasicosComponent;
  let fixture: ComponentFixture<FormDadosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDadosBasicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDadosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
