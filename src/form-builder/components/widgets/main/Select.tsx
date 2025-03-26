import { useCallback, useMemo, useState } from "react";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";
import { MetaDataProps } from "../../../interfaces/interfaces";
import mandatory from "../../../utility/mandatoryManagement";
import visible from "../../../utility/visibilityManagement";
import SelectBox from "../../ui/SelectBox";

interface SelectFieldProps extends MetaDataProps {
  elementId: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ elementId, metaData }) => {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
    { value: "uk", label: "United Kingdom" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "jp", label: "Japan", disabled: true },
  ];
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { value, onChangeValueHandler } = useHandleOnNext();
  const [text, setText] = useState(value[metaData.dataKey] || "");

  const onBlur = useCallback(
    (e: React.FocusEvent<HTMLSelectElement>) => {
      value[metaData.dataKey] = e.target.value;
      onChangeValueHandler(value);
    },
    [metaData.dataKey, onChangeValueHandler, value]
  );

  const onChanges = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  }, []);

  const required: boolean = useMemo(
    () => mandatory(value, { metaData }),
    [value, metaData]
  );

  return (
    <SelectBox
      id={`${elementId}-SelectField-SelectBox`}
      label={metaData.title}
      required={required}
      value={text}
      onChange={onChanges}
      onBlur={onBlur}
      options={countryOptions}
    />
  );
};

const SelectFieldWrapper: React.FC<SelectFieldProps> = ({
  elementId,
  metaData,
}) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { value } = useHandleOnNext();

  const visibility: boolean = visible(value, { metaData });

  if (!visibility) return <></>;

  return <SelectField elementId={elementId} metaData={metaData} />;
};

export default SelectFieldWrapper;
