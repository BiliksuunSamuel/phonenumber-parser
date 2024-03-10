export interface IPhoneNumberValidationResponse {
  isValid: boolean;
  number: string;
  nationalNumber: string;
  country: string;
  countryCallingCode: string;
}

export interface IPhoneRegexes {
  [countryCode: string]: RegExp;
}

export interface ICountryNumberDigits {
  [countryCode: string]: number;
}

export interface ICountryPhoneCodes {
  [countryCode: string]: string;
}
