import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {equalPwd, pwdValidate,check} from '../validate/validate';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {
  formModel: FormGroup;
  dataSource: Observable<any>;
  private http: Http;
  constructor(logupForm: FormBuilder){
    this.formModel= logupForm.group({
      email: ['', Validators.email],
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
      check:['', check],
      pwdGroup: logupForm.group({
        password: ['', pwdValidate],
        pwdConfig: ['', Validators.required]
      }, {validator: equalPwd})
    });
  }
  @Output() login: EventEmitter<string> = new EventEmitter();
  hide: boolean = true;
  isHide(): boolean{
    return this.hide;
  }
  isLogin(event: any): void {
    this.formModel.reset();
    this.login.emit('login');
  }
  clickService(): void{
    this.hide = false;
  }
  close(): void{
    this.hide = true;
  }
  onSubmit():void{
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.dataSource = this.http.post('/api/logup',this.formModel.value)
        .map((res) => res.json());
      this.dataSource.subscribe(
        (data) => {this.dataSource = data;}
      );
    }
  }
  ngOnInit() {
  }

}
