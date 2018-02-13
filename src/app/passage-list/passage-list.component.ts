import {Component, Input, OnInit} from '@angular/core';
import {PassageList} from '../services/passageList.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-passage-list',
  templateUrl: './passage-list.component.html',
  styleUrls: ['./passage-list.component.css']
})
export class PassageListComponent implements OnInit {
  @Input('items') items: PassageList[];
  time: boolean = true;
  numbers: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute) {}
  goToPassage(id: string): void{
    this.router.navigate(['/passages', id], {relativeTo: this.route});
  }
  byTime(): void{
    if(this.time){
      this.items = this.upSort(this.items);
      this.time = false;
    }
    else{
      this.items = this.downSort(this.items);
      this.time = true;
    }
  }
  
  byNumbers(): void{
    if(this.numbers){
      this.items = this.hotSort(this.items);
      this.numbers = false;
    }
    else{
      this.items = this.coldSort(this.items);
      this.numbers = true;
    }
  }
  private upSort(vals: PassageList[]): PassageList[]{
    vals.sort(function(a,b){
      return (Date.parse(b.passTime)- Date.parse(a.passTime));
    });
    return vals;
  }
  private downSort(vals: PassageList[]): PassageList[]{
    vals.sort(function(a, b){
      return (Date.parse(a.passTime)- Date.parse(b.passTime));
    });
    return vals;
  }
  
  private hotSort(vals: PassageList[]): PassageList[]{
    vals.sort(function(a,b){
      return (b.numbers - a.numbers);
    });
    return vals;
  }
  private coldSort(vals: PassageList[]): PassageList[]{
    vals.sort(function(a, b){
      return (a.numbers - b.numbers);
    });
    return vals;
  }
  ngOnInit() {
  }

}
