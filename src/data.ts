import {
  ICountryNumberDigits,
  ICountryPhoneCodes,
  IPhoneRegexes,
} from "./interface";

export const phoneRegexes: IPhoneRegexes = {
  AD: /^(?:\+?376)?\d{6}$/,
  AE: /^(?:\+?971)?\d{9}$/,
  AF: /^(?:\+?93)?\d{9}$/,
  AG: /^(?:\+?1-268)?\d{7}$/,
  AI: /^(?:\+?1-264)?\d{7}$/,
  AL: /^(?:\+?355)?\d{8}$/,
  AM: /^(?:\+?374)?\d{8}$/,
  AO: /^(?:\+?244)?\d{9}$/,
  AQ: /^(?:\+?672)?\d{7}$/,
  AR: /^(?:\+?54)?\d{10}$/,
  AS: /^(?:\+?1-684)?\d{7}$/,
  AT: /^(?:\+?43)?\d{9}$/,
  AU: /^(?:\+?61)?\d{9}$/,
  AW: /^(?:\+?297)?\d{7}$/,
  AX: /^(?:\+?358)?\d{9}$/,
  AZ: /^(?:\+?994)?\d{9}$/,
  BA: /^(?:\+?387)?\d{8}$/,
  BB: /^(?:\+?1-246)?\d{7}$/,
  BD: /^(?:\+?880)?\d{10}$/,
  BE: /^(?:\+?32)?\d{9}$/,
  BF: /^(?:\+?226)?\d{7}$/,
  BG: /^(?:\+?359)?\d{9}$/,
  BH: /^(?:\+?973)?\d{8}$/,
  BI: /^(?:\+?257)?\d{8}$/,
  BJ: /^(?:\+?229)?\d{8}$/,
  BL: /^(?:\+?590)?\d{9}$/,
  BM: /^(?:\+?1-441)?\d{7}$/,
  BN: /^(?:\+?673)?\d{7}$/,
  BO: /^(?:\+?591)?\d{8}$/,
  BQ: /^(?:\+?599)?\d{7}$/,
  BR: /^(?:\+?55)?\d{10}$/,
  BS: /^(?:\+?1-242)?\d{7}$/,
  BT: /^(?:\+?975)?\d{7}$/,
  BV: /^(?:\+?47)?\d{8}$/,
  BW: /^(?:\+?267)?\d{8}$/,
  BY: /^(?:\+?375)?\d{9}$/,
  BZ: /^(?:\+?501)?\d{7}$/,
  CA: /^(?:\+?1)?\d{10}$/,
  CC: /^(?:\+?61)?\d{9}$/,
  CD: /^(?:\+?243)?\d{9}$/,
  CF: /^(?:\+?236)?\d{8}$/,
  CG: /^(?:\+?242)?\d{8}$/,
  CH: /^(?:\+?41)?\d{9}$/,
  CI: /^(?:\+?225)?\d{8}$/,
  CK: /^(?:\+?682)?\d{5}$/,
  CL: /^(?:\+?56)?\d{9}$/,
  CM: /^(?:\+?237)?\d{8}$/,
  CN: /^(?:\+?86)?\d{11}$/,
  CO: /^(?:\+?57)?\d{10}$/,
  CR: /^(?:\+?506)?\d{8}$/,
  CU: /^(?:\+?53)?\d{8}$/,
  CV: /^(?:\+?238)?\d{7}$/,
  CW: /^(?:\+?599)?\d{7}$/,
  CX: /^(?:\+?61)?\d{9}$/,
  CY: /^(?:\+?357)?\d{8}$/,
  CZ: /^(?:\+?420)?\d{9}$/,
  DE: /^(?:\+?49)?\d{10}$/,
  DJ: /^(?:\+?253)?\d{7}$/,
  DK: /^(?:\+?45)?\d{8}$/,
  DM: /^(?:\+?1-767)?\d{7}$/,
  DO: /^(?:\+?1-809)?\d{7}$/,
  DZ: /^(?:\+?213)?\d{9}$/,
  EC: /^(?:\+?593)?\d{9}$/,
  EE: /^(?:\+?372)?\d{8}$/,
  EG: /^(?:\+?20)?\d{10}$/,
  EH: /^(?:\+?212)?\d{8}$/,
  ER: /^(?:\+?291)?\d{7}$/,
  ES: /^(?:\+?34)?\d{9}$/,
  ET: /^(?:\+?251)?\d{9}$/,
  FI: /^(?:\+?358)?\d{9}$/,
  FJ: /^(?:\+?679)?\d{7}$/,
  FK: /^(?:\+?500)?\d{5}$/,
  FM: /^(?:\+?691)?\d{7}$/,
  FO: /^(?:\+?298)?\d{6}$/,
  FR: /^(?:\+?33)?\d{9}$/,
  GA: /^(?:\+?241)?\d{8}$/,
  GB: /^(?:\+?44)?\d{10}$/,
  GD: /^(?:\+?1-473)?\d{7}$/,
  GE: /^(?:\+?995)?\d{9}$/,
  GF: /^(?:\+?594)?\d{9}$/,
  GG: /^(?:\+?44)?\d{10}$/,
  GH: /^(?:\+?233|0)?\d{9}$/,
  GI: /^(?:\+?350)?\d{8}$/,
  GL: /^(?:\+?299)?\d{6}$/,
  GM: /^(?:\+?220)?\d{7}$/,
  GN: /^(?:\+?224)?\d{8}$/,
  GP: /^(?:\+?590)?\d{9}$/,
  GQ: /^(?:\+?240)?\d{8}$/,
  GR: /^(?:\+?30)?\d{10}$/,
  GS: /^(?:\+?500)?\d{5}$/,
  GT: /^(?:\+?502)?\d{8}$/,
  GU: /^(?:\+?1-671)?\d{7}$/,
  GW: /^(?:\+?245)?\d{7}$/,
  GY: /^(?:\+?592)?\d{7}$/,
  HK: /^(?:\+?852)?\d{8}$/,
  HM: /^(?:\+?672)?\d{7}$/,
  HN: /^(?:\+?504)?\d{8}$/,
  HR: /^(?:\+?385)?\d{9}$/,
  HT: /^(?:\+?509)?\d{8}$/,
  HU: /^(?:\+?36)?\d{9}$/,
  ID: /^(?:\+?62)?\d{9,11}$/,
  IE: /^(?:\+?353)?\d{9}$/,
  IL: /^(?:\+?972)?\d{9}$/,
  IM: /^(?:\+?44)?\d{10}$/,
  IN: /^(?:\+?91)?\d{10}$/,
  IO: /^(?:\+?246)?\d{7}$/,
  IQ: /^(?:\+?964)?\d{10}$/,
  IR: /^(?:\+?98)?\d{10}$/,
  IS: /^(?:\+?354)?\d{7}$/,
  IT: /^(?:\+?39)?\d{10}$/,
  JE: /^(?:\+?44)?\d{10}$/,
  JM: /^(?:\+?1-876)?\d{7}$/,
  JO: /^(?:\+?962)?\d{9}$/,
  JP: /^(?:\+?81)?\d{10}$/,
  KE: /^(?:\+?254)?\d{9}$/,
  KG: /^(?:\+?996)?\d{9}$/,
  KH: /^(?:\+?855)?\d{8}$/,
  KI: /^(?:\+?686)?\d{5}$/,
  KM: /^(?:\+?269)?\d{7}$/,
  KN: /^(?:\+?1-869)?\d{7}$/,
  KP: /^(?:\+?850)?\d{8}$/,
  KR: /^(?:\+?82)?\d{10}$/,
  KW: /^(?:\+?965)?\d{8}$/,
  KY: /^(?:\+?1-345)?\d{7}$/,
  KZ: /^(?:\+?7)?\d{10}$/,
  LA: /^(?:\+?856)?\d{8}$/,
  LB: /^(?:\+?961)?\d{8}$/,
  LC: /^(?:\+?1-758)?\d{7}$/,
  LI: /^(?:\+?423)?\d{7}$/,
  LK: /^(?:\+?94)?\d{9}$/,
  LR: /^(?:\+?231)?\d{7}$/,
  LS: /^(?:\+?266)?\d{8}$/,
  LT: /^(?:\+?370)?\d{8}$/,
  LU: /^(?:\+?352)?\d{9}$/,
  LV: /^(?:\+?371)?\d{8}$/,
  LY: /^(?:\+?218)?\d{9}$/,
  MA: /^(?:\+?212)?\d{9}$/,
  MC: /^(?:\+?377)?\d{8}$/,
  MD: /^(?:\+?373)?\d{8}$/,
  ME: /^(?:\+?382)?\d{8}$/,
  MF: /^(?:\+?590)?\d{9}$/,
  MG: /^(?:\+?261)?\d{9}$/,
  MH: /^(?:\+?692)?\d{7}$/,
  MK: /^(?:\+?389)?\d{8}$/,
  ML: /^(?:\+?223)?\d{8}$/,
  MM: /^(?:\+?95)?\d{8}$/,
  MN: /^(?:\+?976)?\d{8}$/,
  MO: /^(?:\+?853)?\d{8}$/,
  MP: /^(?:\+?1-670)?\d{7}$/,
  MQ: /^(?:\+?596)?\d{9}$/,
  MR: /^(?:\+?222)?\d{7}$/,
  MS: /^(?:\+?1-664)?\d{7}$/,
  MT: /^(?:\+?356)?\d{8}$/,
  MU: /^(?:\+?230)?\d{7}$/,
  MV: /^(?:\+?960)?\d{7}$/,
  MW: /^(?:\+?265)?\d{8}$/,
  MX: /^(?:\+?52)?\d{10}$/,
  MY: /^(?:\+?60)?\d{9}$/,
  MZ: /^(?:\+?258)?\d{9}$/,
  NA: /^(?:\+?264)?\d{8}$/,
  NC: /^(?:\+?687)?\d{6}$/,
  NE: /^(?:\+?227)?\d{8}$/,
  NF: /^(?:\+?672)?\d{7}$/,
  NG: /^(?:\+?234)?\d{10}$/,
  NI: /^(?:\+?505)?\d{8}$/,
  NL: /^(?:\+?31)?\d{9}$/,
  NO: /^(?:\+?47)?\d{8}$/,
  NP: /^(?:\+?977)?\d{10}$/,
  NR: /^(?:\+?674)?\d{5}$/,
  NU: /^(?:\+?683)?\d{4}$/,
  NZ: /^(?:\+?64)?\d{9}$/,
  OM: /^(?:\+?968)?\d{8}$/,
  PA: /^(?:\+?507)?\d{8}$/,
  PE: /^(?:\+?51)?\d{9}$/,
  PF: /^(?:\+?689)?\d{6}$/,
  PG: /^(?:\+?675)?\d{7}$/,
  PH: /^(?:\+?63)?\d{10}$/,
  PK: /^(?:\+?92)?\d{10}$/,
  PL: /^(?:\+?48)?\d{9}$/,
  PM: /^(?:\+?508)?\d{6}$/,
  PN: /^(?:\+?870)?\d{6}$/,
  PR: /^(?:\+?1-787)?\d{7}$/,
  PS: /^(?:\+?970)?\d{9}$/,
  PT: /^(?:\+?351)?\d{9}$/,
  PW: /^(?:\+?680)?\d{7}$/,
  PY: /^(?:\+?595)?\d{8}$/,
  QA: /^(?:\+?974)?\d{8}$/,
  RE: /^(?:\+?262)?\d{8}$/,
  RO: /^(?:\+?40)?\d{9}$/,
  RS: /^(?:\+?381)?\d{9}$/,
  RU: /^(?:\+?7)?\d{10}$/,
  RW: /^(?:\+?250)?\d{9}$/,
  SA: /^(?:\+?966)?\d{9}$/,
  SB: /^(?:\+?677)?\d{7}$/,
  SC: /^(?:\+?248)?\d{7}$/,
  SD: /^(?:\+?249)?\d{9}$/,
  SE: /^(?:\+?46)?\d{9}$/,
  SG: /^(?:\+?65)?\d{8}$/,
  SH: /^(?:\+?290)?\d{6}$/,
  SI: /^(?:\+?386)?\d{8}$/,
  SJ: /^(?:\+?47)?\d{8}$/,
  SK: /^(?:\+?421)?\d{9}$/,
  SL: /^(?:\+?232)?\d{8}$/,
  SM: /^(?:\+?378)?\d{8}$/,
  SN: /^(?:\+?221)?\d{9}$/,
  SO: /^(?:\+?252)?\d{7}$/,
  SR: /^(?:\+?597)?\d{7}$/,
  SS: /^(?:\+?211)?\d{9}$/,
  ST: /^(?:\+?239)?\d{7}$/,
  SV: /^(?:\+?503)?\d{8}$/,
  SX: /^(?:\+?1-721)?\d{7}$/,
  SY: /^(?:\+?963)?\d{9}$/,
  SZ: /^(?:\+?268)?\d{7}$/,
  TC: /^(?:\+?1-649)?\d{7}$/,
  TD: /^(?:\+?235)?\d{8}$/,
  TF: /^(?:\+?262)?\d{8}$/,
  TG: /^(?:\+?228)?\d{8}$/,
  TH: /^(?:\+?66)?\d{9}$/,
  TJ: /^(?:\+?992)?\d{9}$/,
  TK: /^(?:\+?690)?\d{4}$/,
  TL: /^(?:\+?670)?\d{6}$/,
  TM: /^(?:\+?993)?\d{8}$/,
  TN: /^(?:\+?216)?\d{8}$/,
  TO: /^(?:\+?676)?\d{5}$/,
  TR: /^(?:\+?90)?\d{10}$/,
  TT: /^(?:\+?1-868)?\d{7}$/,
  TV: /^(?:\+?688)?\d{5}$/,
  TW: /^(?:\+?886)?\d{9}$/,
  TZ: /^(?:\+?255)?\d{9}$/,
  UA: /^(?:\+?380)?\d{9}$/,
  UG: /^(?:\+?256)?\d{9}$/,
  UM: /^(?:\+?1)?\d{10}$/,
  US: /^(?:\+?1)?\d{10}$/,
  UY: /^(?:\+?598)?\d{8}$/,
  UZ: /^(?:\+?998)?\d{9}$/,
  VA: /^(?:\+?379)?\d{8}$/,
  VC: /^(?:\+?1-784)?\d{7}$/,
  VE: /^(?:\+?58)?\d{10}$/,
  VG: /^(?:\+?1-284)?\d{7}$/,
  VI: /^(?:\+?1-340)?\d{7}$/,
  VN: /^(?:\+?84)?\d{9}$/,
  VU: /^(?:\+?678)?\d{5}$/,
  WF: /^(?:\+?681)?\d{6}$/,
  WS: /^(?:\+?685)?\d{5}$/,
  YE: /^(?:\+?967)?\d{9}$/,
  YT: /^(?:\+?262)?\d{8}$/,
  ZA: /^(?:\+?27)?\d{9}$/,
};

export const phoneNumberDigits: ICountryNumberDigits = {
  AD: 6,
  AE: 9,
  AF: 9,
  AG: 7,
  AI: 7,
  AL: 9,
  AM: 8,
  AO: 9,
  AQ: 7,
  AR: 8,
  AS: 7,
  AT: 10,
  AU: 9,
  AW: 7,
  AX: 6,
  AZ: 9,
  BA: 8,
  BB: 7,
  BD: 8,
  BE: 9,
  BF: 8,
  BG: 9,
  BH: 8,
  BI: 8,
  BJ: 8,
  BL: 7,
  BM: 7,
  BN: 8,
  BO: 8,
  BQ: 7,
  BR: 9,
  BS: 7,
  BT: 8,
  BV: 7,
  BW: 8,
  BY: 9,
  BZ: 7,
  CA: 10,
  CC: 7,
  CD: 9,
  CF: 8,
  CG: 9,
  CH: 9,
  CI: 8,
  CK: 7,
  CL: 8,
  CM: 8,
  CN: 11,
  CO: 10,
  CR: 8,
  CU: 8,
  CV: 7,
  CW: 7,
  CX: 7,
  CY: 8,
  CZ: 9,
  DE: 11,
  DJ: 8,
  DK: 8,
  DM: 7,
  DO: 8,
  DZ: 9,
  EC: 8,
  EE: 8,
  EG: 9,
  EH: 7,
  ER: 8,
  ES: 9,
  ET: 8,
  FI: 9,
  FJ: 7,
  FK: 7,
  FM: 7,
  FO: 6,
  FR: 9,
  GA: 8,
  GB: 10,
  GD: 7,
  GE: 9,
  GF: 9,
  GG: 6,
  GH: 9,
  GI: 8,
  GL: 6,
  GM: 8,
  GN: 8,
  GP: 9,
  GQ: 8,
  GR: 10,
  GS: 7,
  GT: 8,
  GU: 7,
  GW: 8,
  GY: 8,
  HK: 8,
  HM: 7,
  HN: 8,
  HR: 9,
  HT: 8,
  HU: 9,
  ID: 9,
  IE: 9,
  IL: 9,
  IM: 6,
  IN: 10,
  IO: 7,
  IQ: 10,
  IR: 10,
  IS: 7,
  IT: 10,
  JE: 6,
  JM: 7,
  JO: 9,
  JP: 10,
  KE: 9,
  KG: 9,
  KH: 8,
  KI: 7,
  KM: 8,
  KN: 7,
  KP: 7,
  KR: 9,
  KW: 8,
  KY: 7,
  KZ: 10,
  LA: 8,
  LB: 8,
  LC: 7,
  LI: 8,
  LK: 9,
  LR: 8,
  LS: 8,
  LT: 8,
  LU: 9,
  LV: 8,
  LY: 9,
  MA: 9,
  MC: 8,
  MD: 8,
  ME: 8,
  MF: 7,
  MG: 9,
  MH: 7,
  MK: 8,
  ML: 8,
  MM: 8,
  MN: 8,
  MO: 8,
  MP: 7,
  MQ: 9,
  MR: 8,
  MS: 7,
  MT: 8,
  MU: 9,
  MV: 7,
  MW: 8,
  MX: 10,
  MY: 9,
  MZ: 9,
  NA: 8,
  NC: 7,
  NE: 8,
  NF: 7,
  NG: 10,
  NI: 8,
  NL: 9,
  NO: 8,
  NP: 9,
  NR: 7,
  NU: 7,
  NZ: 9,
  OM: 8,
  PA: 8,
  PE: 9,
  PF: 8,
  PG: 7,
  PH: 10,
  PK: 10,
  PL: 9,
  PM: 7,
  PN: 7,
  PR: 7,
  PS: 8,
  PT: 9,
  PW: 7,
  PY: 8,
  QA: 8,
  RE: 9,
  RO: 9,
  RS: 9,
  RU: 10,
  RW: 8,
  SA: 9,
  SB: 7,
  SC: 7,
  SD: 9,
  SE: 9,
  SG: 8,
  SH: 7,
  SI: 8,
  SJ: 6,
  SK: 9,
  SL: 8,
  SM: 8,
  SN: 9,
  SO: 8,
  SR: 7,
  SS: 9,
  ST: 8,
  SV: 8,
  SX: 7,
  SY: 8,
  SZ: 8,
  TC: 7,
  TD: 8,
  TF: 7,
  TG: 8,
  TH: 9,
  TJ: 9,
  TK: 7,
  TL: 7,
  TM: 8,
  TN: 8,
  TO: 7,
  TR: 10,
  TT: 7,
  TV: 7,
  TW: 9,
  TZ: 9,
  UA: 9,
  UG: 9,
  UM: 7,
  US: 10,
  UY: 8,
  UZ: 9,
  VA: 7,
  VC: 7,
  VE: 11,
  VG: 7,
  VI: 7,
  VN: 9,
  VU: 7,
  WF: 7,
  WS: 7,
  YE: 9,
  YT: 9,
  ZA: 9,
  ZM: 9,
  ZW: 9,
};

export const countryPhoneCodes: ICountryPhoneCodes = {
  AD: "376",
  AE: "971",
  AF: "93",
  AG: "1",
  AI: "1",
  AL: "355",
  AM: "374",
  AO: "244",
  AQ: "672",
  AR: "54",
  AS: "1",
  AT: "43",
  AU: "61",
  AW: "297",
  AX: "358",
  AZ: "994",
  BA: "387",
  BB: "1",
  BD: "880",
  BE: "32",
  BF: "226",
  BG: "359",
  BH: "973",
  BI: "257",
  BJ: "229",
  BL: "590",
  BM: "1",
  BN: "673",
  BO: "591",
  BQ: "599",
  BR: "55",
  BS: "1",
  BT: "975",
  BV: "47",
  BW: "267",
  BY: "375",
  BZ: "501",
  CA: "1",
  CC: "61",
  CD: "243",
  CF: "236",
  CG: "242",
  CH: "41",
  CI: "225",
  CK: "682",
  CL: "56",
  CM: "237",
  CN: "86",
  CO: "57",
  CR: "506",
  CU: "53",
  CV: "238",
  CW: "599",
  CX: "61",
  CY: "357",
  CZ: "420",
  DE: "49",
  DJ: "253",
  DK: "45",
  DM: "1",
  DO: "1",
  DZ: "213",
  EC: "593",
  EE: "372",
  EG: "20",
  EH: "212",
  ER: "291",
  ES: "34",
  ET: "251",
  FI: "358",
  FJ: "679",
  FK: "500",
  FM: "691",
  FO: "298",
  FR: "33",
  GA: "241",
  GB: "44",
  GD: "1",
  GE: "995",
  GF: "594",
  GG: "44",
  GH: "233",
  GI: "350",
  GL: "299",
  GM: "220",
  GN: "224",
  GP: "590",
  GQ: "240",
  GR: "30",
  GS: "500",
  GT: "502",
  GU: "1",
  GW: "245",
  GY: "592",
  HK: "852",
  HM: "672",
  HN: "504",
  HR: "385",
  HT: "509",
  HU: "36",
  ID: "62",
  IE: "353",
  IL: "972",
  IM: "44",
  IN: "91",
  IO: "246",
  IQ: "964",
  IR: "98",
  IS: "354",
  IT: "39",
  JE: "44",
  JM: "1",
  JO: "962",
  JP: "81",
  KE: "254",
  KG: "996",
  KH: "855",
  KI: "686",
  KM: "269",
  KN: "1",
  KP: "850",
  KR: "82",
  KW: "965",
  KY: "1",
  KZ: "7",
  LA: "856",
  LB: "961",
  LC: "1",
  LI: "423",
  LK: "94",
  LR: "231",
  LS: "266",
  LT: "370",
  LU: "352",
  LV: "371",
  LY: "218",
  MA: "212",
  MC: "377",
  MD: "373",
  ME: "382",
  MF: "590",
  MG: "261",
  MH: "692",
  MK: "389",
  ML: "223",
  MM: "95",
  MN: "976",
  MO: "853",
  MP: "1",
  MQ: "596",
  MR: "222",
  MS: "1",
  MT: "356",
  MU: "230",
  MV: "960",
  MW: "265",
  MX: "52",
  MY: "60",
  MZ: "258",
  NA: "264",
  NC: "687",
  NE: "227",
  NF: "672",
  NG: "234",
  NI: "505",
  NL: "31",
  NO: "47",
  NP: "977",
  NR: "674",
  NU: "683",
  NZ: "64",
  OM: "968",
  PA: "507",
  PE: "51",
  PF: "689",
  PG: "675",
  PH: "63",
  PK: "92",
  PL: "48",
  PM: "508",
  PN: "870",
  PR: "1",
  PS: "970",
  PT: "351",
  PW: "680",
  PY: "595",
  QA: "974",
  RE: "262",
  RO: "40",
  RS: "381",
  RU: "7",
  RW: "250",
  SA: "966",
  SB: "677",
  SC: "248",
  SD: "249",
  SE: "46",
  SG: "65",
  SH: "290",
  SI: "386",
  SJ: "47",
  SK: "421",
  SL: "232",
  SM: "378",
  SN: "221",
  SO: "252",
  SR: "597",
  SS: "211",
  ST: "239",
  SV: "503",
  SX: "1",
  SY: "963",
  SZ: "268",
  TC: "1",
  TD: "235",
  TF: "262",
  TG: "228",
  TH: "66",
  TJ: "992",
  TK: "690",
  TL: "670",
  TM: "993",
  TN: "216",
  TO: "676",
  TR: "90",
  TT: "1",
  TV: "688",
  TW: "886",
  TZ: "255",
  UA: "380",
  UG: "256",
  UM: "1",
  US: "1",
  UY: "598",
  UZ: "998",
  VA: "379",
  VC: "1",
  VE: "58",
  VG: "1",
  VI: "1",
  VN: "84",
  VU: "678",
  WF: "681",
  WS: "685",
  YE: "967",
  YT: "262",
  ZA: "27",
  ZM: "260",
  ZW: "263",
};
