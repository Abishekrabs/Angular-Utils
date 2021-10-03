import { formatDate } from '@angular/common';

export class AgUtils {
    
  static isArrayLengthValid(list: Array<any>): boolean {
    if (list && list.length > 0) {
      return true;
    }
    return false;
  }

  static isStringValid(input: string): boolean {
    if (input !== null && input.trim() !== "") {
      return true;
    }
    return false;
  }

  static removeCurrencyFormatting(input: string): string {
    if (this.isStringValid(input)) {
      if (input.includes(',') || input.includes('$')) {
        input = input.replace(/,/g, '').replace(/\$/gi, '');
      }
    }
    return input;
  }

  static fitToTwoDecimalPlaces(input: any): string {
    if ((typeof (input) === 'number')) {
      return input.toFixed(2);
    } else if ((typeof (input) === 'string')) {
      return parseFloat(input).toFixed(2);
    }
    return null;
  }

  static convertStringToObject(input: string): any {
    if (this.isStringValid(input)) {
      return JSON.parse(input);
    }
    return input;
  }

  static convertObjectToString(input: any): string {
    if (input) {
      return JSON.stringify(input);
    }
    return "";
  }

  static sortNumberArray(numericArray: number[], isAscending: boolean): number[] {
    if (this.isArrayLengthValid(numericArray)) {
      if (isAscending) {
        return numericArray.sort((n1, n2) => n1 - n2);
      } else {
        return numericArray.sort((n1, n2) => n2 - n1);
      }
    }
    return numericArray;
  }

  static sortObjectArrayByProperty(objectArray: Array<any>, propertyName: any, isAscending?: boolean): Array<any> {
    if (this.isArrayLengthValid(objectArray)) {
      if (isAscending === false) {
        return objectArray.sort((a, b) => (b[propertyName] < a[propertyName] ? -1 : 1));
      } else {
        return objectArray.sort((a, b) => (a[propertyName] < b[propertyName] ? -1 : 1));
      }
    }
    return objectArray;
  }

  static formatDateString(dateString: string, inputFormat: string): string {
    if (this.isStringValid(dateString)) {
      return formatDate(new Date(dateString), inputFormat, 'en');
    }
    return dateString;
  }

  static numberWithCommas(input: number) {
    var parts = input.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
}