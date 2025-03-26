import { FormatterValueProps, Value } from "../types";

const formatCurrency: (props: FormatterValueProps) => Value = ({
  value,
  metaData,
}: FormatterValueProps): Value => {
  const digits = metaData?.digits || 0;

  if (value === null || value === undefined) {
    return value;
  } else if (!isNaN(Number(value))) {
    const numberFormatter = Intl.NumberFormat("en-US", {
      minimumFractionDigits: digits,
    });
    return numberFormatter.format(Number(value || 0));
  } else {
    return "0";
  }
};

export default formatCurrency;
