import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImagensComponent } from './form-imagens.component';

describe('FormImagensComponent', () => {
  let component: FormImagensComponent;
  let fixture: ComponentFixture<FormImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormImagensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
