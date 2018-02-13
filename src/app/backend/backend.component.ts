import {Component, Inject, OnInit} from '@angular/core';
import {PassageList} from '../services/passageList.model';
import {BackendService} from '../services/backend.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css'],
  providers:[BackendService]
})
export class BackendComponent implements OnInit {
  dataSource: Observable<any>;
  backend: PassageList[];
  constructor(public passages: BackendService) {
    this.dataSource = passages.getUrl();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      data => {
        this.backend = (data as PassageList[]);
      }
    );
  }

}
