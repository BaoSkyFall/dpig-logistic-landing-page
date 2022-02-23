import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  sendGridConfig = environment.sendGridConfig
  constructor(private fb:FormBuilder,
              private http: HttpClient) { }
  rf = this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phoneNumber: ['',Validators.required],
    subject: ['',Validators.required],
    message: ['',Validators.required],

  })
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.rf.value);
    this.rf.markAllAsTouched()
    if(this.rf.invalid)
    {
      return
    }
    const value ={
      ...this.rf.value,
      subject:'Test Subject',
      email:'baoit128@gmail.com'

    }
    this.http.post('https://app-dpig-global-logistic.herokuapp.com/contact',value,).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
}
