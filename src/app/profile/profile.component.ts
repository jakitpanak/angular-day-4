import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private accountSerive: AccountService
  ) { }

  ngOnInit() {
    const {firstName,lastName} = this.accountSerive.account;
    const v = [Validators.required,Validators.minLength(3)]
    this.form = this.fb.group({
      firstName: [firstName, v],
      lastName: [lastName, [...v ,Validators.maxLength(3)]]
    });
  }

  onSubmit(form:FormGroup){
    if(!form.valid){
      const {firstName, lastName} = form.value;
      const account = new Account(firstName,lastName);
      this.accountSerive.account = account;
    }else{
      alert("firstname or lastname")
    }
  }


}
