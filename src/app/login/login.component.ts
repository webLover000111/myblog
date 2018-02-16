import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login$: Observable<any>;
  formModel: FormGroup;
  constructor(loginForm: FormBuilder,
              private  http: Http) {
    this.formModel= loginForm.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  @Output() logup: EventEmitter<string> = new EventEmitter();
  isLogup(event: any): void{
    this.formModel.reset();
    this.logup.emit('logup');
  }
  isLogin(): void{
    let name = this.formModel.get('name').value;
    let password = this.formModel.get('password').value;
    let data = {
      "name": name,
      "password": password
    };
    this.login$ = this.http.post('/api/login', data)
      .map(res => res.json()).catch(this.handleError);
    this.login$.subscribe(
      data => {
        if(data.status === true){
          window.location.reload();
        }
        else{
          alert(data.msg);
          window.location.reload();
        }
      }
    );
  }
  handleError(error: Response | any){
    console.error(error.message || error);
    return Observable.throw(error.message || error);
}
  ngOnInit() {
  }

}
