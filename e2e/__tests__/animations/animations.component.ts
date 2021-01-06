import { trigger, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  animations: [slideToLeft()],
  templateUrl: './animations.component.html',
})
export class AnimationsComponent {
  @HostBinding('@routerTransition')
  title = 'app works!';
  hasClass = true;
  variableWithPrecedingDolar = 1234;
}

export function slideToLeft(): AnimationTriggerMetadata {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ transform: 'translateX(200%)', position: 'fixed', width: '100%' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)', position: 'fixed', width: '100%' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-200%)' })),
    ]),
  ]);
}
