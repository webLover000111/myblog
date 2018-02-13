import {Component, Input, OnInit} from '@angular/core';
import { PassExample} from '../services/passage.model';

@Component({
  selector: 'app-passages-item',
  templateUrl: './passages-item.component.html',
  styleUrls: ['./passages-item.component.css']
})
export class PassagesItemComponent implements OnInit {
  @Input('items') items: PassExample[];
  constructor() { }

  ngOnInit() {
  }

}
