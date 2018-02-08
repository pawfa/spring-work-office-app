import {trigger, animate, transition, style, query, keyframes, stagger, state} from '@angular/animations';

export const linkAnimation =

  trigger('linkAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(1000, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(1000, style({ opacity: 0 }))
    ])
  ]);
