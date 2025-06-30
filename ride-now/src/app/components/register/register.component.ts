import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
   registerForm!: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      password: ['',Validators.required],
      confirmPass: ['',Validators.required],

    },
    { validators: this.passwordMatchValidator })
  
  }

passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPass = form.get('confirmPass')?.value;
  return password === confirmPass ? null : {mismatch: true}

}

  handleRegister() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Integrate with AuthService for real registration logic
    console.log('Register Data:', this.registerForm);

    // For demo, simulate registration success
    alert('Registration successful! You can now login.');

    // Redirect to login page
    this.router.navigate(['/login']);
  }

  registerWithGoogle() {
    alert('Google registration coming soon!');
  }

  registerWithFacebook() {
    alert('Facebook registration coming soon!');
  }

  get f() {
  return this.registerForm.controls;
}

}
