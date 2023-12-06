import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  isSendButtonActive = false;
  myForm!: FormGroup;
  
  @ViewChild('nameField') nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('emailField') emailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField') messageField!: ElementRef<HTMLInputElement>;
  @ViewChild('checkboxField') checkboxField!: ElementRef<HTMLInputElement>;
  @ViewChild('successMessage') successMessage!: ElementRef<HTMLParagraphElement>;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  updateSendButtonClass() {
    // Überprüfen Sie, ob alle Formularfelder ausgefüllt sind und die Checkbox aktiviert ist
    if (this.nameField.nativeElement.checkValidity() && this.emailField.nativeElement.checkValidity() && this.messageField.nativeElement.checkValidity() && this.checkboxField.nativeElement.checked) {
      this.isSendButtonActive = true;
    } else {
      this.isSendButtonActive = false;
    }
  }
  


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;

    // animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('https://benjamin-tietz.com/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
      );

      this.successMessage.nativeElement.classList.add('success');
    setTimeout(() => {
      this.successMessage.nativeElement.classList.remove('success');
      }, 2000);

    if (this.myForm instanceof FormGroup) {
      // Setze das Formular zurück
      this.myForm.reset();
    }
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
   }

  checkInputfield() {

  }
}