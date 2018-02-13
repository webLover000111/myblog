import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent implements OnInit {
  @Input('log') log: string;
  @Output() clickMask: EventEmitter<string> = new EventEmitter();
  isClickMask(event: any): void{
    this.clickMask.emit('flag');
  }
  loginHandler(event: string): void{
    this.log= event;
  }
  logupHandler(event: string): void{
    this.log= event;
  }
  isClick(): boolean{
    if(!this.log){
      return true;
    }
    else{
      return false;
    }
  }
  isLogin(): boolean{
    return (this.log==='login');
  }
  isLogup(): boolean{
    return (this.log==='logup');
  }
  constructor() { }
  ngOnInit() {
  }

}
