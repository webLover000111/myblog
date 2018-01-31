import {Component, Input, OnInit} from '@angular/core';
import {NavRoute} from '../testmodule/route.model';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('items') items: NavRoute[];
  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }
  // Checks if this current example is the selected one
  isActive(i): boolean {
    return `${this.items[i].path}`=== this.location.path();
  }
  ngOnInit() {
  }

}
