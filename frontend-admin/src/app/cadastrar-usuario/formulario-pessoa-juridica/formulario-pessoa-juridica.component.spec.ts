import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPessoaJuridicaComponent } from './formulario-pessoa-juridica.component';

describe('FormularioPessoaJuridicaComponent', () => {
  let component: FormularioPessoaJuridicaComponent;
  let fixture: ComponentFixture<FormularioPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioPessoaJuridicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
