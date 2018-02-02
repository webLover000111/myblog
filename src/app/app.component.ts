import {Component, Inject, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavRoute} from './testmodule/route.model';
import {UserLogComponent} from './user-log/user-log.component';
import {LoginComponent} from './login/login.component';
import {LogupComponent} from './logup/logup.component';


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
  clickMaskHandler(event: string) {
    this.log = null;
  }
  constructor(
    private router: Router,
    @Inject('NavLinks') public navLinks: NavRoute[]) {
  }
}
