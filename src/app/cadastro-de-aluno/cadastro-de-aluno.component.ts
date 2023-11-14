import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-de-aluno',
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.css']
})
export class CadastroDeAlunoComponent {
  RA: number = 0;
  nome: string = '';
  email: string = '';
  celular: number = 0;

  cadastrarAluno() {
    console.log('Aluno cadastrado:', { RA: this.RA, nome: this.nome, email: this.email, celular: this.celular });
  }
}
