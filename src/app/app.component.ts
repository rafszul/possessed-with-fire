import { Component } from '@angular/core';

@Component({
  selector: 'possessed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'possessed';

  links = [
    '/home',
    '/about',
    '/work',
    '/contact'
  ];

  // activeLink = this.links[0];

}
