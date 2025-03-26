import { FormatterRule } from "../../interfaces/interfaces";
import formatCurrency from "./custom-formatters/formatCurrency";
import { FormatterValueProps, Value } from "./types";

const valueFormatter = new Map<
  FormatterRule,
  (params: FormatterValueProps) => Value
>([["CURRENCY", formatCurrency]]);

export default valueFormatter;
