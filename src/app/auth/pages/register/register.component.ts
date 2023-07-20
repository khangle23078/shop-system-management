import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.message.success('Đăng ký thành công!');
        this.router.navigateByUrl('/auth/login');
      },
      error: () => {
        this.message.success('Đăng ký thất bại!');
      },
    });
  }
}
