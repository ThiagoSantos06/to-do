import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDaTarefaComponent } from './detalhes-da-tarefa.component';

describe('DetalhesDaTarefaComponent', () => {
  let component: DetalhesDaTarefaComponent;
  let fixture: ComponentFixture<DetalhesDaTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDaTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
