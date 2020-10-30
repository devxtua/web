import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'my-form_message',
    templateUrl: './message.component.html'
})
export class MessageFormComponent {
    name: string;
    email: string;
    phone: string;

    submit(form: NgForm) {
        console.log(form);
    }
}
