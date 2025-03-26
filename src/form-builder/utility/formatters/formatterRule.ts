import { E } from "../../interfaces/interfaces";

export class OnDemandLengthValidator {
  static oldNIC = (e: E) => {
    let inputValue = e.target.value.toString();

    if (inputValue && inputValue.length < 10) {
      const value = Math.max(0, parseInt(inputValue));
      if (isNaN(value)) {
        inputValue = "";
      } else {
        const formattedVale = value.toString().slice(0, 10);
        inputValue = formattedVale;
      }
    } else if (inputValue.length === 10) {
      let lastChar = inputValue.toString().slice(9);
      if (["v", "x"].includes(lastChar.toString().toLowerCase()) === false) {
        lastChar = "V";
      }
      inputValue = inputValue.toString().slice(0, 9) + lastChar.toUpperCase();
    } else {
      inputValue = inputValue.toString().slice(0, 10);
    }
    e.target.value = inputValue;
  };

  static newNIC = (e: E) => {
    const inputValue = e.target.value.toString();

    const value: number = Math.max(0, parseInt(inputValue));
    if (isNaN(value)) {
      e.target.value = "";
    } else {
      const formattedVale = value.toString().slice(0, 12);
      e.target.value = formattedVale;
    }
  };

  static phoneNumber = (e: E) => {
    e.target.value = e.target.value.toString().slice(0, 10);
  };

  static currency = (e: E) => {
    e.target.value = e.target.value.toString().slice(0, 10);
  };

  static loanCycles = (e: E) => {
    e.target.value = e.target.value.toString().slice(0, 2);
  };

  static gracePeriod = (e: E) => {
    e.target.value = e.target.value.toString().slice(0, 2);
  };

  static loanTenor = (e: E, length = 3) => {
    e.target.value = e.target.value.toString().slice(0, length);
  };

  static followUpCheckList = (e: E) => {
    e.target.value = e.target.value.toString().slice(0, 100);
  };

  static proposedRate = (e: E) => {
    let value = e.target.value.toString();
    if (value && parseInt(value) > 100) {
      value = "100";
    }
    if (value && parseInt(value) < 0) {
      value = "0";
    }
    e.target.value = value;
  };

  static year = (e: E) => {
    const inputValue = e.target.value.toString();
    const value = Math.max(0, parseInt(inputValue));
    if (isNaN(value)) {
      e.target.value = "";
    } else {
      const formattedVale = value.toString().slice(0, 4);
      e.target.value = formattedVale;
    }
  };

  static currentYear = (e: E) => {
    const inputValue = e.target.value.toString();
    const value = Math.max(0, parseInt(inputValue));
    if (isNaN(value)) {
      e.target.value = "";
    } else {
      const formattedVale = parseInt(value.toString().slice(0, 4));
      const d = new Date();
      const currentYear = d.getFullYear();

      if (formattedVale > currentYear) {
        e.target.value = "";
      } else {
        e.target.value = formattedVale;
      }
    }
  };
}

export class Formatter {
  // Matches any ASCII characters between "xxx" markers
  // eslint-disable-next-line no-control-regex
  static ANY = /xxx[\x00-\x7F]*?xxx/gi;

  // Matches non-numeric characters
  static NUMERIC = /[^0-9]/g;

  // Matches non-numeric characters except negative sign and dot
  static NEGATIVE_POSITIVE_NUMERIC = /[^-?\d.]/g;

  // Matches non-alphabetic characters
  static ALPHABETICAL = /[^a-zA-Z]/g;

  // Matches non-alphanumeric characters
  static ALPHA_NUMERIC = /[^a-zA-Z0-9]/g;

  // Matches non-alphanumeric characters except commas
  static ALPHA_NUMERIC_COMMA = /[^a-zA-Z0-9,]/g;

  // Matches non-alphanumeric characters except dots
  static ALPHA_NUMERIC_DOTTED = /[^a-zA-Z0-9.]/g;

  // Matches non-alphanumeric characters except dots and spaces
  static ALPHA_NUMERIC_EXTENDED = /[^a-zA-Z0-9. ]/g;

  // Matches non-alphabetic characters except commas, periods, and spaces
  static ALPHABETICAL_EXTENDED = /[^a-zA-Z,.' ]/g;

  // Matches non-alphabetic characters except spaces
  static ALPHABETICAL_SPACE = /[^a-zA-Z ]/g;

  // Matches non-alphabetic characters except commas and spaces
  static ALPHABETICAL_ADVANCED = /[^a-zA-Z, ]/g;

  // Matches non-alphanumeric characters except spaces
  static ALPHA_NUMERIC_SPACE = /[^0-9a-zA-Z ]/g;

  // Matches non-alphabetic characters except underscores
  static ALPHA_NUMERIC_UNDERSCORE = /[^a-zA-Z0-9_]/g;

  // Matches non-numeric versioning characters (e.g., 1.0.2)
  static NUMERIC_VERSIONS = /[^0-9.]/g;

  // Matches non-numeric characters except slashes (for dates like 12/31/2024)
  static DATE = /[^0-9/]/g;

  // Matches positions for thousand separators in numbers
  static THOUSAND_SEPARATOR = /\B(?=(\d{3})+(?!\d))/g;

  // Improved email regex
  static EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Matches percentage values from 0 to 100
  static PERCENTAGE_VERSIONS = /^(100|[1-9]?[0-9])$/;

  // Matches positive and negative percentage values from -100 to 100
  static PERCENTAGE_NEGATIVE_VERSIONS = /^-?(100|[1-9]?[0-9])$/;

  //Matches any letters (A-Z, a-z), numbers (0-9), and symbols (special characters like @, #, $, etc.).
  static ALPHANUMERIC_AND_SYMBOLS =
    /[^A-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>?/~`]/g;
}

export class OnDemandValueFormatter {
  private static evaluate = (e: E, formatter: RegExp) => {
    let value = e.target.value
      ? e.target.value.toString().replace(formatter, "")
      : "";

    const maxValue: number = e.target.maxLength || 0;
    const ceilValue: number = Number(e.target.max || 0);

    let ceil = 0;

    try {
      ceil = parseInt(ceilValue.toString());
    } catch {
      ceil = 0;
    }

    if (maxValue > 0) {
      value = value.toString().slice(0, maxValue);
    }

    if (ceil > 0) {
      try {
        if (parseInt(value) > ceil) {
          value = ceil.toString();
        }
      } catch {
        value = value.toString();
      }
    }

    e.target.value = value;
  };

  static numeric = (e: E) => {
    this.evaluate(e, Formatter.NUMERIC);
  };

  static negetivePositivenumeric = (e: E) => {
    this.evaluate(e, Formatter.NEGATIVE_POSITIVE_NUMERIC);
  };

  static abnAcnValidator = (e: E) => {
    this.evaluate(e, Formatter.NUMERIC);
    const formattedVale = e.target.value.toString().slice(0, 11);
    e.target.value = formattedVale;
  };

  static date = (e: E) => {
    this.evaluate(e, Formatter.DATE);
  };

  static alphaSymbol = (e: E) => {
    this.evaluate(e, Formatter.ALPHANUMERIC_AND_SYMBOLS);
  };

  static alphabetical = (e: E) => {
    this.evaluate(e, Formatter.ALPHABETICAL);
  };

  static any = (e: E) => {
    this.evaluate(e, Formatter.ANY);
  };

  static alphaNumeric = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC);
  };

  static alphabeticalExtended = (e: E) => {
    this.evaluate(e, Formatter.ALPHABETICAL_EXTENDED);
  };

  static alphabeticalSpaces = (e: E) => {
    this.evaluate(e, Formatter.ALPHABETICAL_SPACE);
  };

  static alphabeticalUnderscore = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC_UNDERSCORE);
  };

  static validateVersion = (e: E) => {
    this.evaluate(e, Formatter.NUMERIC_VERSIONS);
  };

  static alphabeticalAutoSpaced = (e: E) => {
    this.evaluate(e, Formatter.ALPHABETICAL_SPACE);
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value
        .toString()
        .split("")
        .filter((char: string) => {
          return char != " ";
        })
        .join(" ")
        .toUpperCase();
    }
  };

  static alphaNumericUpper = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC);
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value.toString().toUpperCase();
    }
  };
  static numericPresentage = (e: E) => {
    if (Formatter.PERCENTAGE_VERSIONS.test(e.target.value.toString())) {
      return e.target.value;
    }
  };

  static alphaNumericLower = (e: E) => {
    this.evaluate(e, Formatter.ANY);
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value.toString().toLowerCase();
    }
  };

  static alphaNumericLowerCaseUnderscore = (e: E) => {
    this.evaluate(e, Formatter.ANY);
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value
        .toString()
        .toLowerCase()
        .replace(/ /g, "_");
    }
  };

  static alphaNumericSpaces = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC_SPACE);
  };

  static alphabeticalComma = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC_COMMA);
  };

  static alphabeticalAdvanced = (e: E) => {
    this.evaluate(e, Formatter.ALPHABETICAL_ADVANCED);
  };

  static formatSearchNIC = (e: E) => {
    this.evaluate(e, Formatter.NUMERIC);
    const value = e.target.value.toString();
    if (value && value.length <= 10) {
      OnDemandLengthValidator.oldNIC(e);
    } else if (value && value.length > 10) {
      OnDemandLengthValidator.newNIC(e);
    }
  };

  static thousandSeparator = (x: E) => {
    return x.toString().replace(Formatter.THOUSAND_SEPARATOR, ",");
  };

  static alphaNumericUpperTaxLimit = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC);
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value.toString().toUpperCase().substring(0, 15);
    }
  };

  static alphaNumericDotted = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC_DOTTED);
  };

  static alphaNumericExtended = (e: E) => {
    this.evaluate(e, Formatter.ALPHA_NUMERIC_EXTENDED);
  };

  static yearFormat = (e: E) => {
    OnDemandLengthValidator.year(e);
  };

  static currentYearFormat = (e: E) => {
    OnDemandLengthValidator.currentYear(e);
  };

  static alphaUpperCase = (e: E) => {
    e.target.value = e.target.value.toString().toUpperCase();
  };

  static alphabaticToUpperUnderscore = (e: E) => {
    if (e.target.value && e.target.value.toString().length > 1) {
      e.target.value = e.target.value
        .toString()
        .split(" ")
        .join("_")
        .toUpperCase();
    }
  };

  static percentage = (e: E) => {
    const formattedPresentage = Number(e.target.value);
    if (formattedPresentage >= 0 && formattedPresentage <= 100) {
      e.target.value = formattedPresentage;
    }
  };

  static enforceValidPercentageRange = (e: E) => {
    if (
      Formatter.PERCENTAGE_NEGATIVE_VERSIONS.test(e.target.value.toString())
    ) {
      return e.target.value;
    } else if (e.target.value && e.target.value.toString().length > 1) {
      const sliceIndex = e.target.value.toString().startsWith("-") ? 3 : 2;
      e.target.value = e.target.value.toString().slice(0, sliceIndex);
    }
    return e.target.value;
  };
}
