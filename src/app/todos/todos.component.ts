import { animate, keyframes, state, style, transition, trigger, useAnimation, AnimationEvent, query, animateChild, group } from '@angular/animations';
import { Component } from '@angular/core';
import { bouceOutLeftAnimation, fade, fadeInAnimation, slide } from '../animation';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        // animate(1000, style({ backgroundColor: 'red' })),
        // animate(2000, style({ transform: 'translateY(50px)' }))

        group([

          query('h1', [
            style({ transform: 'translateY(-30px)' }),
            animate(1000)
          ]),

          query('@todoAnimation',
            animateChild()
          )
        ])
      ])
    ]),

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

  animationStarted($event: AnimationEvent) {
    console.log($event);
  }

  animationDone($event: AnimationEvent) {
    console.log($event);
  }
}
