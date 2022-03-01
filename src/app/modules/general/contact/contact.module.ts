import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import {environment} from "../../../../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ErrorMessagesModule} from "../../component/control-messages/error-messages.module";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorMessagesModule,
    TranslateModule

  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
  ],
})
export class ContactModule { }
