import { animate, state, style, transition, trigger } from '@angular/animations';

export let expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        opacity: 0
    })),

    // state('expanded', style({ height: '*', padding: '*', overflow: 'auto' })),

    transition('collapsed => expanded', [
        animate("300ms ease-out", style({ height: '*', paddingTop: '*', paddingBottom: '*' })),
        animate('1s', style({ opacity: 1 }))
    ]),

    transition('expanded => collapsed', [
        animate("300ms ease-in")
    ])
]);