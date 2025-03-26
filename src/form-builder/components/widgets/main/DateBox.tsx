import React, { useCallback, useMemo, useState } from "react";
import { DateField } from "../../ui/DataBox";
import { MetaDataProps } from "../../../interfaces/interfaces";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";
import mandatory from "../../../utility/mandatoryManagement";

interface DateBoxProps extends MetaDataProps {
  elementId: string;
}

const DateBox: React.FC<DateBoxProps> = ({
  elementId,
  metaData,
}: DateBoxProps) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { value, onChangeValueHandler } = useHandleOnNext();
  const [text, setText] = useState(value[metaData.dataKey] || "");

  const onBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      value[metaData.dataKey] = e.target.value;
      onChangeValueHandler(value);
    },
    [metaData.dataKey, onChangeValueHandler, value]
  );

  const onChanges = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(new Date(e.target.value).getUTCDate);
    setText(new Date(e.target.value));
  }, []);

  const required: boolean = useMemo(
    () => mandatory(value, { metaData }),
    [value, metaData]
  );

  return (
    <DateField
      id={`${elementId}-Box-TextField`}
      label={metaData?.title}
      required={required}
      value={new Date(text || "").valueOf()}
      onChange={onChanges}
      onBlur={onBlur}
    />
  );
};

const DateBoxWrapper: React.FC<DateBoxProps> = ({
  elementId,
  metaData,
}: DateBoxProps) => {
  return <DateBox metaData={metaData} elementId={elementId} />;
};

export default DateBoxWrapper;
