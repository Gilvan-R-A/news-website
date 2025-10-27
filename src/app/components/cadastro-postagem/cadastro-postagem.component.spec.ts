import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPostagemComponent } from './cadastro-postagem.component';

describe('CadastroPostagemComponent', () => {
  let component: CadastroPostagemComponent;
  let fixture: ComponentFixture<CadastroPostagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPostagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
