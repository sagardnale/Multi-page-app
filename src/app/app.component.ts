import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeAnimation',[
      transition('* <=> *',[
        query(':enter, :leave',[
          style({ position: 'absolute', width:'100%'})
        ],{optional:true}),
        group([
          query(':enter',[
            style({opacity:0}),
            animate('400ms ease-out',style({ opacity:1}))
          ],{ optional: true}),
          query(':leave',[
            animate('400ms ease-out',style({ opacity: 0}))
          ],{optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'multi-page-app';
  constructor(public auth:AuthService){

  }
  getRouterOutletState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
