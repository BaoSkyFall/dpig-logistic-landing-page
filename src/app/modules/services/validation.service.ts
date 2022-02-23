import {Injectable} from '@angular/core';
interface configProps {
  email: string;
  required: string;
  invalidPassword:string;
  invalidPhone:string;
  maxLength:string;
  mustMatch:string;
  greaterThan:string;

}
@Injectable({
  providedIn: 'root'
})

export class ValidationService {


  public static getValidationErrorMessage(validatorName: string | number |any, validatorValue?: any, labelName?: string, labelCompare?: string): any {
    const config = {
      email: `wrong format`,
      required: `required`,
      invalidPassword: 'invalid password. Password must be at least 6 characters long, and contain a number.',
      invalidPhone: 'invalid phone number',
      maxLength: `the field can't contain more than ${validatorValue.requiredLength} characters.`,
      mustMatch: `Those ${labelCompare} didn’t match`,
      greaterThan: `must be greater than ${labelCompare}`,
      lowerThan: `cannot be greater than ${labelCompare}`

    };
    return `${labelName} ${config[validatorName as keyof configProps]}`;
  }
}
