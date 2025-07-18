# Tanzanian Phone Number Validation

A simple npm package for validating Tanzanian phone numbers using regular expressions.

## Installation

You can install this package via npm:

```bash
npm i tanzanian-phone-validator
```

## Example

You can check an example of this library [Here](https://tanzania-phone-validator-playground.vercel.app/).

Here is how it look like:

![image](https://github.com/fredygerman/tanzanian-phone-validator/blob/main/screenshots/ScreenShot.png?raw=true)

## Usage

Use the `isValidPhoneNumber` function to validate a phone number. It returns true if the phone number is valid and false otherwise.

Use the `getPhoneNumberDetails` function to get information about a phone number. It returns an object various information about the phone number as shown below:

```js
const results = {
  isValid: true,
  telecomCompanyDetails: {
    prefix: 76,
    company: "Vodacom Tanzania Limited",
    brand: "Vodacom",
    operational: "yes",
  },
};
```

## Usage with validation libraries

Here are some usage examples with different validation libraries:

### Using Yup

```js
const yup = require("yup");
import { isValidPhoneNumber } from "tanzanian-phone-validator";

const schema = yup.object({
  phoneNumber: yup
    .string()
    .test("is-tanzanian", "Invalid Tanzanian phone number", (value) => {
      return isValidPhoneNumber(value);
    }),
});

// Example usage
const data = {
  phoneNumber: "+255761234567",
};

schema
  .validate(data)
  .then((validatedData) => {
    console.log("Validation succeeded:", validatedData);
  })
  .catch((error) => {
    console.error("Validation failed:", error.message);
  });
```

### Using Zod

```js
const { z } = require("zod");
import { validateTanzanianPhoneNumber } from "tanzanian-phone-validator";

const schema = z.object({
  phoneNumber: z.string().refine(
    (value) => {
      return isValidPhoneNumber(value);
    },
    {
      message: "Invalid Tanzanian phone number",
    }
  ),
});

// Example usage
const data = {
  phoneNumber: "+255761234567",
};

try {
  const validatedData = schema.parse(data);
  console.log("Validation succeeded:", validatedData);
} catch (error) {
  console.error("Validation failed:", error.message);
}
```

### Direct usage (Node Js)

You can also directly use the isValidPhoneNumber function:

```js
import { validateTanzanianPhoneNumber } from "tanzanian-phone-validator";

const phoneNumber = "+255761234567";

if (isValidPhoneNumber(phoneNumber)) {
  console.log("Valid Tanzanian phone number.");
} else {
  console.log("Invalid Tanzanian phone number.");
}
```

## List of Tanzanian mobile network operators and their prefixes

This table was used to used to create this package. IT can be found [in wikipedia (Click here).](https://en.wikipedia.org/wiki/Telephone_numbers_in_Tanzania).
Note : this package does not validate for Operators which are not in Operation nor on this table.

| Prefix | Operator                                          | Trading as | Operational[1] |
| ------ | ------------------------------------------------- | ---------- | -------------- |
| 61     | Viettel Tanzania Limited                          | halotel    | yes            |
| 62     | Viettel Tanzania Limited                          | halotel    | yes            |
| 63     | Mkulima African Telecommunication Company Limited | Amotel     | no             |
| 64     | Wiafrica Tanzania Limited                         | CooTel     | no             |
| 65     | MIC Tanzania Limited                              | tiGo       | yes            |
| 66     | Smile Communications Tanzania Limited             | smile      | yes            |
| 67     | MIC Tanzania Limited                              | tiGo       | yes            |
| 68     | Airtel Tanzania Limited                           | airtel     | yes            |
| 69     | Airtel Tanzania Limited                           | airtel     | yes            |
| 71     | MIC Tanzania Limited                              | tiGo       | yes            |
| 72     | MO Mobile Holding Limited                         |            | no             |
| 73     | Tanzania Telecommunications Company Ltd           | TTCL       | yes            |
| 74     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 75     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 76     | Vodacom Tanzania Limited                          | Vodacom    | yes            |
| 77     | MIC Tanzania Limited                              | tiGo       | yes            |
| 78     | Airtel Tanzania Limited                           | airtel     | yes            |
| 79     | Vodacom Tanzania Limited                          | Vodacom    | yes            |

License
This package is licensed under the MIT License. [See the LICENSE.](https://github.com/fredygerman/tanzanian-phone-validator/blob/main/LICENSE.md).
