import {FormControl, FormGroup} from '@angular/forms';


export function pwdValidate(control: FormControl): any {
  let reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;
  let valid= reg.test(control.value);
  return valid ? null : {password: true};
}
export function equalPwd(group: FormGroup): any{
    let password: FormControl= group.get('password') as FormControl;
    let pwdConfiig: FormControl= group.get('pwdConfig') as FormControl;
    let valid: boolean= (password.value === pwdConfiig.value);
    return valid ? null: {equal: true};
}
export function check(control: FormControl): any{
  let valid = control.value;
  return valid ? null : {check: true};
}
