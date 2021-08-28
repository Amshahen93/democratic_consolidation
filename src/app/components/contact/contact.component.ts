import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formGroup: FormGroup;
  disabledButton = false;
  constructor(private fs: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.createFormGroup();
    console.log(this.formGroup.controls.name);
  }
  createFormGroup() {
    this.formGroup = this.fs.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: [''],
      massage: ['', [Validators.required]]
    });
  }
  onSendData() {
    if (this.formGroup.valid) {
      this.disabledButton = true;
      this.contactService.sendDataToBackend(this.formGroup.value).subscribe(data => {
        this.formGroup.reset();
        this.disabledButton = false;
      }, error => {
        this.disabledButton = false;
      });
    } else {
      for (const key in this.formGroup.controls) {
        if (this.formGroup.controls.hasOwnProperty(key)) {
         this.formGroup.controls[key].markAsTouched();
        }
      }
    }
  }
}
