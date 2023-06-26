import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(({ data }: any) => {
      try {
        this.userService.saveUser(data);
        this.message.success('Đăng nhập thành công!');
      } catch (error) {
        this.message.warning('Đăng nhập thất bại');
      }
    });
  }
}
