import {Pipe, PipeTransform} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ValidationService} from "../../services/validation.service";

@Pipe({
  name: 'errorMessageControl'
})
export class ErrorMessageControlPipe implements PipeTransform {

  transform(control: FormControl, messageObject:any, ...args: unknown[]): string {
    // todo handle common fails control error
    for (const propertyName in control.errors) {
      return messageObject?.hasOwnProperty(propertyName) ? messageObject[propertyName] : ValidationService.getValidationErrorMessage(
        propertyName,
        control.errors[propertyName],
        messageObject.labelName,
        messageObject.labelCompare,
      );

    }
    return '';
  }

}
