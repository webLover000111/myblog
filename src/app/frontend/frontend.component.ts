import {Component, Inject, OnInit} from '@angular/core';
import {PassageList} from '../services/passageList.model';
import {FrontendService} from '../services/frontend.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
  providers:[FrontendService]
})
export class FrontendComponent implements OnInit {
  dataSource: Observable<any>;
  frontend: PassageList[];
  constructor(public passages: FrontendService) {
    this.dataSource = passages.getUrl();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      data => {
        this.frontend = (data as PassageList[]);
      }
    );
  }

}
