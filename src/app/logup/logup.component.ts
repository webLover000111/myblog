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
  result: any;
  constructor(logupForm: FormBuilder, private http: Http){
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
  isLogin(): void {
    this.formModel.reset();
    this.login.emit('login');
  }
  clickService(): void{
    this.hide = false;
  }
  close(): void{
    this.hide = true;
  }
  onSubmit(): void {
    let email = this.formModel.get('email').value;
    let name = this.formModel.get('name').value;
    let passowrd = this.formModel.get(['pwdGroup', 'password']).value;
    if(this.formModel.valid){
      let upData = {
        'email': email,
        'name' : name,
        'password': passowrd
      };
      this.dataSource = this.http.post('/api/logup', upData)
        .map((res) => res.json()).catch(this.handleError);
      this.dataSource.subscribe(
        (data) => {
           if(data.status === false){
             alert(data.msg);
             window.location.reload();
           }
           else{
             window.location.href = '/';
           }
        },
        error =>{
          throw error;
        }
      );
    }
    else if( !this.formModel.get('check').valid ){
      alert("必须同意服务协议才可以注册!");
    }
  }
  handleError (error: Response | any){
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  ngOnInit() {
  }

}
