import {trigger, animate, transition, style} from '@angular/animations';

export const loginAnimation =

  trigger('loginAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(500, style({ opacity: 0 }))
    ])
  ]);
