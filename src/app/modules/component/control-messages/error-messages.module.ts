import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ErrorMessagesComponent } from './error-messages.component';
import {ErrorMessageControlModule} from "../../shared/error-message/error-message-control.module";


@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  exports: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageControlModule,
  ]
})
export class ErrorMessagesModule {
}
