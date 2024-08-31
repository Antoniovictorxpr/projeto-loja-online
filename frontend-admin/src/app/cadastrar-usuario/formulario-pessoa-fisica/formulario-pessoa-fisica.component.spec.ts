import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPessoaFisicaComponent } from './formulario-pessoa-fisica.component';

describe('FormularioPessoaFisicaComponent', () => {
  let component: FormularioPessoaFisicaComponent;
  let fixture: ComponentFixture<FormularioPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioPessoaFisicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
