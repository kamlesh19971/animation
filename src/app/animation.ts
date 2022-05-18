import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(2000)
    ]),


]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),

    transition(':leave', [
        animate('0.5s cubic-bezier(.61, .29, .07, 1.02 )',
            keyframes([
                style({
                    offset: 0.2,
                    opacity: 1,
                    transform: 'translateX(20px)'
                }),
                style({
                    offset: 1,
                    opacity: 0,
                    transform: 'translateX(-100%)'
                })
            ])
        )
    ])

])