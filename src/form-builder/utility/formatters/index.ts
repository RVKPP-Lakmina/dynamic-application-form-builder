import { E, FormatterRule } from "../../interfaces/interfaces";
import formatter from "./formatterMap";
import valueFormatter from "./formatterValue";
import { Value } from "./types";

export const formatOnInput = (value: E, formatterRule: FormatterRule) => {
  if (formatter.has(formatterRule)) {
    formatter.get(formatterRule)!(value);
  }
};

export const formatValue = (
  value: Value = "NO_FORMATTER",
  formatterRule: FormatterRule
): Value => {
  switch (formatterRule) {
    case "CURRENCY":
      return valueFormatter.get(formatterRule)!({ value, metaData: {} });

    default:
      return value;
  }
};
