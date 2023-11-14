import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent {

  descrição: string = '';
  concluida: boolean = false;

  tarefas = [
    { descricao: 'Fazer ac2 do rafael', concluida: false },
    { descricao: 'Lavar a louça', concluida: true },
    { descricao: 'Limpar a casa', concluida: false },
    { descricao: 'Lavar o notebook', concluida: false },
    { descricao: 'Estudar para a prova', concluida: true }
  ];

  concluirTarefa(tarefa: { concluida: boolean; }) {
    tarefa.concluida = !tarefa.concluida;
  }
  
}
