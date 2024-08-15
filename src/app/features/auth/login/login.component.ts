import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ILoginResponse, IUserControls, IUserFormValues } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup<IUserControls>;
  message: string = '';
  loading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group<IUserControls>({
      username: this.fb.control<string | null>('', [Validators.required]),
      password: this.fb.control<string | null>('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {
      const formValues: IUserFormValues = this.loginForm?.getRawValue();
      this.login(formValues);
    } else {
      this.message = 'Form is invalid';
    }
  }

  login(formData: IUserFormValues): void {
    this.loading = true;
    this.subscription?.add(
      this.authService?.login(formData).subscribe({
        next: (res:ILoginResponse) => {
          console.log(res);
          localStorage.setItem('authToken', res.token);
          this.loading = false;
          this.router.navigate(['/home']);
        },
        error: (_err) => {
          this.message = 'Invalid Credentials';
          setTimeout(() => {
            this.message = '';
          }, 3000);
          this.loading = false;
        },
      })
    );
  }

  getErrorMessage(controlName: keyof IUserControls): string | null {
    const control = this.loginForm?.get(controlName);
    if (control && control?.touched && control?.errors) {
      if (control?.errors['required']) {
        return `${controlName} is required`;
      }
      if (control.errors['minlength']) {
        return `${controlName} must be at least ${control?.errors['minlength'].requiredLength} characters long`;
      }
    }
    return null;
  }

  unsubscribeAll(): void {
    this.subscription?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

}
