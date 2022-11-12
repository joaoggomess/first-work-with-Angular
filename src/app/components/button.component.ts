import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class MyButton {
  @Input() label: string = '';
  buttonText: string = 'Acessar';
  buttonNumber: number = 1;

  getAlert(num: number) {
    alert(num);
  }
}
