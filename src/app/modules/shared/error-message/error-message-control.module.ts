import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorMessageControlPipe} from "./error-message-control.pipe";



@NgModule({
  declarations: [ErrorMessageControlPipe],
  imports: [
    CommonModule
  ],
  exports: [ErrorMessageControlPipe],
})
export class ErrorMessageControlModule { }
