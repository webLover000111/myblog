import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  constructor(loginForm: FormBuilder) {
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
  onSubmit(): void{
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
