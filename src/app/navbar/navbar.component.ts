import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavRoute} from '../services/route.model';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {IndexPassagesService} from '../services/indexPassages.service';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers :[IndexPassagesService]
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  logout$ : Observable<any>;
  dataSource$: Observable<any>;
  @Input('items') items: NavRoute[];
  @Output() userLog: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location, passages: IndexPassagesService,
              private http: Http) {
    this.dataSource$ = passages.getUrl();
    this.dataSource$.subscribe(data => {
      this.isLogin = data.login;
    });
  }
  isActive(i): boolean {
    return `${this.items[i].path}` === this.location.path();
  }
  logClick(event: any): void {
    this.userLog.emit(event.target.id);
  }
  logout(): void {
    this.logout$ = this.http.get('/api/logout')
      .map(res => res.json()).catch(this.handleError);
    this.logout$.subscribe(
      data => {
        if(data.status === true){
          window.location.reload();
        }
        else{
          alert(data.msg);
        }
      }
    );
  }
  handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  ngOnInit() {
  }

}
