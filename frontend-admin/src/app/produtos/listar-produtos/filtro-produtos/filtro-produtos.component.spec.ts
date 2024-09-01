import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProdutosComponent } from './filtro-produtos.component';

describe('FiltroProdutosComponent', () => {
  let component: FiltroProdutosComponent;
  let fixture: ComponentFixture<FiltroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltroProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
