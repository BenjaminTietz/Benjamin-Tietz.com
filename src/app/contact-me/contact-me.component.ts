import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  isSendButtonActive = false;

  @ViewChild('nameField') nameField!: ElementRef<HTMLInputElement>;
  @ViewChild('emailField') emailField!: ElementRef<HTMLInputElement>;
  @ViewChild('messageField') messageField!: ElementRef<HTMLInputElement>;
  @ViewChild('checkboxField') checkboxField!: ElementRef<HTMLInputElement>;

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
    //let checkboxField = this.checkboxField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    //checkboxField.disabled = true;
    // animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    //senden
    await fetch('https://benjamin-tietz.com/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
      );

      // Text anzeigen: Nachricht gesendet
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    //checkboxField.disabled = false;
  }

  checkInputfield() {

  }
}