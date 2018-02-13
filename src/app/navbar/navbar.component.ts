import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavRoute} from '../services/route.model';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('items') items: NavRoute[];
  @Output() userLog: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }
  
  isActive(i): boolean {
    return `${this.items[i].path}` === this.location.path();
  }
  logClick(event: any): void {
    this.userLog.emit(event.target.id);
  }
  ngOnInit() {
  }

}
