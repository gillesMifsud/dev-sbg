import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { FORM_DIRECTIVES, FormGroup, FormControl, Validators, FormBuilder, AbstractControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    templateUrl: '/app/contact/contact.component.html',
    styleUrls: ['app/contact/contact.css'],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
    providers: [FormBuilder]
})

export class ContactComponent {

  contactForm: FormGroup;

  sujets = ['Informations', "Offre d'Emploi"];

  name: AbstractControl;
  email: AbstractControl;
  message: AbstractControl;
  sujet: AbstractControl;
  comment: AbstractControl;

  constructor(fb: FormBuilder) {

    this.contactForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'sujet': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'comment': ['', Validators.compose([Validators.required, Validators.minLength(20)])]
    });
    this.name = this.contactForm.controls['name'];
    this.email = this.contactForm.controls['email'];
    this.sujet = this.contactForm.controls['sujet'];
    this.comment = this.contactForm.controls['comment'];
  }

    onSubmit(form: any): void {
    console.log('Valeurs du formulaire:', form);
  }
}
