import {Component, Inject, OnInit} from '@angular/core';
import {PassageList} from '../services/passageList.model';
import {Observable} from 'rxjs/Observable';
import {OthersService} from '../services/others.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css'],
  providers:[OthersService]
})
export class OthersComponent implements OnInit {
  otherPassages: PassageList[];
  dataSource: Observable<any>;
  constructor(public passages: OthersService) {
    this.dataSource = passages.getUrl();
  }
  
  ngOnInit() {
    this.dataSource.subscribe(
      data => {
        this.otherPassages =( data as PassageList[]);
      }
    );
  }

}
