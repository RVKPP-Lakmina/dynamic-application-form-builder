import { MetaDataProps } from "../../../interfaces/interfaces";
import SelectBox from "../../ui/SelectBox";

interface SelectFieldProps extends MetaDataProps {
  elementId: string;
}

const SelectField: React.FC<SelectFieldProps> = () => {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
    { value: "uk", label: "United Kingdom" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "jp", label: "Japan", disabled: true },
  ];

  return <SelectBox options={countryOptions} />;
};

export default SelectField;
