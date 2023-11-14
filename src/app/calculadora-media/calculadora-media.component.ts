import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css']
})
export class CalculadoraMediaComponent {

  AC1: number = 1;
  AC2: number = 2;
  AG: number = 3;
  AF: number = 4;
  media: number = 5;
  status: string = 'ok';

  calcular() {
    // Fórmula para calcular a média
    this.media = (this.AC1 * 0.15) + (this.AC2 * 0.30) + (this.AG * 0.10) + (this.AF * 0.45);

    // Verificar se está aprovado ou reprovado
    this.status = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }

}
