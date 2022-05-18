import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bouceOutLeftAnimation, fade, fadeInAnimation, slide } from '../animation';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoAnimation', [

      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '2000ms'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bouceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
