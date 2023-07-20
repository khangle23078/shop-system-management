import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
    private message: NzMessageService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: ({ data }: any) => {
        this.userService.saveUser(data);
        this.message.success('Đăng nhập thành công!');
        this.router.navigateByUrl('/admin/product');
      },
      error: (error: HttpErrorResponse) => {
        this.message.warning(`Đăng nhập thất bại`);
      },
    });
  }
}
