import { E, FormatterRule } from "../../interfaces/interfaces";
import {
  OnDemandValueFormatter,
  OnDemandLengthValidator,
} from "./formatterRule";

const formatter = new Map<FormatterRule, (value: E) => void>([
  ["ALPHABETIC", OnDemandValueFormatter.alphabetical],
  ["ALPHABETIC_AND_UPPERCASE", OnDemandValueFormatter.alphaUpperCase],
  ["ALPHANUMERIC", OnDemandValueFormatter.alphaNumeric],
  ["ALPHANUMERIC_AND_SYMBOLS", OnDemandValueFormatter.alphaSymbol],
  ["YEAR", OnDemandValueFormatter.yearFormat],
  ["NUMBER_AND_UPPERCASE", OnDemandValueFormatter.numeric],
  ["OLD_NIC", OnDemandLengthValidator.oldNIC],
  ["NEW_NIC", OnDemandLengthValidator.newNIC],
]);

export default formatter;
