import {Component, Inject, OnInit} from '@angular/core';
import {PassExample} from '../services/passage.model';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {IndexPassagesService} from '../services/indexPassages.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers :[IndexPassagesService]
})
export class MainPageComponent implements OnInit {

  dataSource: Observable<any>;
  newPassages: PassExample[];
  hotPassages: PassExample[];
  constructor(
    private http: Http, public passages: IndexPassagesService) {
      /*console.log(passages.getUrl());*/
      this.dataSource = passages.getUrl();
      this.dataSource.subscribe(
        data => {
          this.newPassages = data.newPassages as PassExample[];
          this.hotPassages = data.hotPassages as PassExample[];
        }
      );
     /*this.dataSource.subscribe((data) =>{
       this.examples = data;
       console.log(this.examples);
     });*/
    
    /*this.dataSource = this.http.get('/api').map((res) => res.json());*/
  }

  ngOnInit() {
    /*/!*this.dataSource.subscribe((data)=>{
      this.examples = data.examples;
      this.hotPassages = data.hotPassages;*!/
    });*/
  }

}
