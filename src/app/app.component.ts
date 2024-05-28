import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  result: number = 0;

  calculate(operator: string, operand1: string, operand2: string): void {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
      case '/':
        this.result = num1 / num2;
        break;
      default:
        this.result = NaN; //Operador no válido
    }
  }
}
