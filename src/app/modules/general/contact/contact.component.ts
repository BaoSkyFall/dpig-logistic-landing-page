import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  sendGridConfig = environment.sendGridConfig
  constructor(private fb:FormBuilder,
              private http: HttpClient,
              private translate: TranslateService,
              private toastr: ToastrService) { }
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
    this.http.post('https://app-dpig-global-logistic.herokuapp.com/contact',value,).subscribe((res:any)=>{
      console.log(res);
      this.toastr.success('Success');
      this.rf.reset();
    },err=>{
      console.log(err);
    })
  }
}
