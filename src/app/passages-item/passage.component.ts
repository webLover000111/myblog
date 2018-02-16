import {Component, Input, OnInit} from '@angular/core';
import { PassExample } from '../services/passage.model';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-passage',
  templateUrl: './passage.component.html',
  styleUrls: ['./passage.component.css']
})
export class PassageComponent implements OnInit {
  @Input('item') item: PassExample;
  constructor(private router: Router, private route: ActivatedRoute) { }
  goToPassage(id: number): void {
    this.router.navigate(['passages', id], {relativeTo: this.route});
  }
  ngOnInit() {
  }

}
