import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  myContactForm!: FormGroup;
  @Input() showEnglishVersion!: boolean;
  @Input() showGermanVersion!: boolean;

  @ViewChild('successMessage')
  successMessage!: ElementRef<HTMLParagraphElement>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myContactForm = this.fb.group({
      name: ['', [Validators.required, this.fullNameValidator]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  /**
   * Custom validator to check if the input is a full name (two words).
   * @param {AbstractControl} control - The form control to validate.
   * @returns {ValidationErrors | null} An object with validation errors or null if the control is valid.
   */
  fullNameValidator(control: AbstractControl): ValidationErrors | null {
    const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return fullNamePattern.test(control.value) ? null : { fullName: true };
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.myContactForm.controls[controlName].hasError(errorName);
  }

  async sendMail() {
    if (this.myContactForm.valid) {
      let fd = new FormData();
      fd.append('name', this.myContactForm.get('name')?.value);
      fd.append('email', this.myContactForm.get('email')?.value);
      fd.append('message', this.myContactForm.get('message')?.value);

      try {
        const response = await fetch('https://formspree.io/f/xovadpqr', {
          method: 'POST',
          body: fd,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          this.successMessage.nativeElement.classList.add('success');
          setTimeout(() => {
            this.successMessage.nativeElement.classList.remove('success');
          }, 2000);

          this.myContactForm.reset();
        } else {
          console.error('Form submission error', response.statusText);
        }
      } catch (error) {
        console.error('Form submission error', error);
      }
    }
  }
}
