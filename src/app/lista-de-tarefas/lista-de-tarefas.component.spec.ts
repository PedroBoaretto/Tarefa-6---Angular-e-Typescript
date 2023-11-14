import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTarefasComponent } from './lista-de-tarefas.component';

describe('ListaDeTarefasComponent', () => {
  let component: ListaDeTarefasComponent;
  let fixture: ComponentFixture<ListaDeTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeTarefasComponent]
    });
    fixture = TestBed.createComponent(ListaDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
