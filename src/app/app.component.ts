import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {NavRoute} from './testmodule/route.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject('NavLinks') public navLinks: NavRoute[]) {
  }
}
