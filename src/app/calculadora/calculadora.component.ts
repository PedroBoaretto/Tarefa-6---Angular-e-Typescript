import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  num1: number = 10;
  num2: number = 5;
  resultado: number = 0;
  operacao: string = '+';

  constructor() {}

  ngOnInit(): void {}

  calcular(){
    switch(this.operacao){
      case '+':
        this.resultado = this.num1 + this.num2;
        break;

      case '-':
        this.resultado = this.num1 - this.num2;
        break;

      case '*':
        this.resultado = this.num1 * this.num2;
        break;

      case '/':
        this.resultado = this.num1 / this.num2;
        break;

      default:
        this.resultado = 0;
    }
  }
}
