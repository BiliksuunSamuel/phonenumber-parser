import { CountryCodes } from "./countryCodes";
import { countryPhoneCodes, phoneNumberDigits, phoneRegexes } from "./data";
import { IPhoneNumberValidationResponse } from "./interface";

export function IsValidPhoneNumber(
  phoneNumber: string,
  countryCode: CountryCodes
): IPhoneNumberValidationResponse {
  const regex = phoneRegexes[countryCode];
  const length = phoneNumberDigits[countryCode];
  const numberCode = countryPhoneCodes[countryCode];

  const response: IPhoneNumberValidationResponse = {
    isValid: false,
    number: "",
    country: countryCode,
    countryCallingCode: "",
    nationalNumber: "",
  };

  if (regex && regex.test(phoneNumber)) {
    let digitsOnly = phoneNumber.replace(/\D/g, "");
    console.log(digitsOnly);

    if (digitsOnly.startsWith(numberCode)) {
      digitsOnly = digitsOnly.slice(numberCode.length);
    } else if (digitsOnly.startsWith("0")) {
      digitsOnly = digitsOnly.slice(1);
    }

    if (digitsOnly.length !== length) {
      return response;
    }

    return {
      isValid: true,
      number: `${numberCode ?? "0"}${digitsOnly}`,
      nationalNumber: digitsOnly,
      country: countryCode,
      countryCallingCode: numberCode,
    };
  }

  return response;
}
