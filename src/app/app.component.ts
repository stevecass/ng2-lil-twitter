import { Component } from '@angular/core';

import { ApiService } from './shared';
import { HomeComponent } from './home';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
