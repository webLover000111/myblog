import {Component, Input, OnInit} from '@angular/core';
import {PassExample} from '../services/passage.model';
import {ActivatedRoute} from '@angular/router';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-whole-passage',
  templateUrl: './whole-passage.component.html',
  styleUrls: ['./whole-passage.component.css']
})
export class WholePassageComponent implements OnInit {
  @Input() item: PassExample = {title: '', content: '', statement: '', passTime: '', numbers: 0 };
  dataSource: Observable<any>;
  constructor(private route: ActivatedRoute, private http: Http){
    route.params.subscribe(params => {
      let url = `/api/passages/${params['id']}`;
      this.dataSource = this.http.get(url)
        .map(res => res.json() as PassExample);
      this.dataSource.subscribe(data => {
        this.item = data;
      });
    });
    
  }
  
  ngOnInit() {
  }

}
