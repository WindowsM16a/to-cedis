import { useState } from "react";
import { getExchangeRate } from "../src/scripts/main.js";
import { Analytics } from "@vercel/analytics/react";

const currencies = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [exchangeRate, setExchangeRate] = useState(null);

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const handleAmountChange = (e) => {
    // Get the raw value without formatting
    const rawValue = e.target.value.replace(/,/g, "");
    // Only update if it's a valid number or empty
    if (rawValue === "" || !isNaN(rawValue)) {
      setAmount(rawValue);
    }
  };

  const handleExchangeRate = async (e) => {
    e.preventDefault();
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    setExchangeRate(rate);
  };

  return (
    <>
      <div className="container flex flex-col items-center justify-center mw-[25rem] bg-white rounded-[1.8rem] p-[2.5rem] shadow-blue">
        <div className="heading flex flex-row items-center justify-center gap-4 font-bold">
          <img
            src="https://res.cloudinary.com/dx72ndl5e/image/upload/v1730431141/ulyehpdbamtysp1dfhsc.png"
            alt="To-Cedis logo"
            className="header-logo w-[2rem] h-[1.8rem] bg-black padding-logo rounded-[50%]"
          />
          <header className="font-clamped font-bold text-center flex items-center justify-center">
            Currency Converter
          </header>
        </div>
        <form action="#" className="margin-form w-full">
          <div className="amount">
            <p className="form-p-clamped mb-[0.4rem]">Enter Amount</p>
            <input
              className="w-full h-[3rem] border-form-input padding-form-input form-input-clamped outline-none rounded-[1.1rem] transition-all ease-in-out duration-300 focus:border-input-focus padding-input-focus"
              type="number"
              inputMode="numeric"
              value={amount ? formatNumber(amount) : ""}
              onChange={handleAmountChange}
              id="to-amount"
              placeholder="1000"
            />
          </div>
          <div className="from-to-list flex flex-row items-center justify-between mt-[1.4rem]">
            <div className="from">
              <p className="form-p-clamped mb-[0.4rem]">From</p>
              <div className="select-box w-[7rem] h-[2.8rem] flex flex-row justify-center items-center border-select-box p-[0.4rem] rounded-[0.6rem]">
                <img
                  className="w-[2rem] pr-[0.4rem] cursor-default"
                  src={`https://flagcdn.com/48x36/${currencies[
                    fromCurrency
                  ].toLowerCase()}.png`}
                  alt={`${fromCurrency} flag`}
                />
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-auto select-font-clamped font-medium bg-none margin-select-box border-none outline-none rounded-[1.1rem] cursor-pointer transition-all ease-in-out duration-300"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="exchange-icon cursor-pointer mt-[2.2rem] hover:transition-all hover:ease-in-out hover:duration-300 hover:cursor-pointer">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="to">
              <p className="form-p-clamped mb-[0.4rem]">To</p>
              <div className="select-box w-[7rem] h-[2.8rem] flex flex-row justify-center items-center border-select-box p-[0.4rem] rounded-[0.6rem]">
                <img
                  className="w-[2rem] pr-[0.4rem] cursor-default"
                  src="https://flagcdn.com/48x36/gh.png"
                  alt="flag"
                />
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-auto select-font-clamped font-medium bg-none margin-select-box border-none outline-none rounded-[1.1rem] cursor-pointer transition-all ease-in-out duration-300"
                >
                  {Object.keys(currencies).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="rates mt-[1.4rem] rates-margin font-bold italic">
            {exchangeRate
              ? `${formatNumber(amount)} ${fromCurrency} = ${formatNumber(
                  (amount * exchangeRate).toFixed(2)
                )} ${toCurrency}`
              : `0 ${fromCurrency} = 0 ${toCurrency}`}
          </div>
          <button
            onClick={handleExchangeRate}
            type="button"
            className="rates-btn w-full h-[2.9rem] text-center rates-font-clamped font-medium bg-btn-blue text-white cursor-pointer border-none outline-none rounded-[1.1rem] hover:bg-purple-700 focus:bg-purple-700 active:bg-black transition-all duration-300 ease-in-out"
          >
            Get Exchange Rates
          </button>
        </form>
      </div>
      <Analytics />
    </>
  );
}

export default App;
