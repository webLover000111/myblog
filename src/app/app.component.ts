import {Component, Inject, Output} from '@angular/core';
import {Router} from '@angular/router';
import {NavRoute} from './services/route.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() log: string;
  logHandler(event: string) {
    this.log = event;
  }
  clickMaskHandler() {
    this.log = null;
  }
  constructor(
    private router: Router,
    @Inject('NavLinks') public navLinks: NavRoute[]) {
  }
}
