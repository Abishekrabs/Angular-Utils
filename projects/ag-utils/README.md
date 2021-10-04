# Angular Utils

Angular Utils is an Angular library that provides some basic utility methods used in typescript to reduce code complexity. In addition, this npm is very much useful for code reusability as it reduces the development time and effort because of the predefined utility methods.

[![Known Vulnerabilities](https://snyk.io/test/npm/encrypt-webstorage/0.0.4/badge.svg)](https://snyk.io/test/npm/encrypt-webstorage/0.0.4)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Angular Utils.

```npm
npm install angular-utility-methods@latest
```

## Usage

#### For Angular Utils usage ########

```javascript
import { AgUtils } from 'angular-utility-methods';

AgUtils.numberWithCommas(1456783); // returns "1,456,783"
AgUtils.removeCurrencyFormatting("$25,000"); // returns "25000"
AgUtils.fitToTwoDecimalPlaces(583.578711); // returns "583.58"

AgUtils.sortNumberArray([13, 1 , 5, 6, 2, 4, 9], false); // returns [13, 9, 6, 5, 4, 2, 1]
AgUtils.sortNumberArray([13, 1 , 5, 6, 2, 4, 9], true); // returns [1, 2, 4, 5, 6, 9, 13]

AgUtils.formatDateString("2021-12-28", "dd/MM/yyyy"); // returns "28/12/2021"
AgUtils.formatDateString("2021-08-15", "yyyy:MM:dd"); // returns "2021:08:15"
AgUtils.formatDateString("2021-05-04T10:05:10.000Z", "yyyy/MM/dd"); // returns "2021/05/04"
AgUtils.formatDateString("2021-02-21T10:05:10.000Z", "yyyy-MM-dd'T'HH:mm:ss"); // returns "2021-02-21T15:35:10" (UTC)

AgUtils.convertObjectToString({name: 'John', age: 21}); // returns "{\"name\":\"John\",\"age\":21}"
AgUtils.convertStringToObject('{"name": "John", "age": 21}'); // returns  {name: 'John', age: 21}

let array = [{"name":"Robert","age":11},{"name":"Andrea","age":34},{"name":"Kerry","age":28}];
AgUtils.sortObjectArrayByProperty(array, 'age'); // Ascending sort
// returns [{"name":"Robert","age":11},{"name":"Kerry","age":28},{"name":"Andrea","age":34}]

AgUtils.sortObjectArrayByProperty(array, 'age', false); // Descending sort
// returns [{"name":"Andrea","age":34},{"name":"Kerry","age":28},{"name":"Robert","age":11}]

AgUtils.isStringValid("Hello World"); // returns true
AgUtils.isStringValid(null); // returns false

AgUtils.isArrayLengthValid([1]);  // returns true
AgUtils.isArrayLengthValid(null); // returns false


```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.