import { useCallback, useMemo, useState } from "react";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";
import {
  E,
  FormatterRule,
  MetaDataProps,
} from "../../../interfaces/interfaces";
import Input from "../../ui/Input";
import { formatOnInput, formatValue } from "../../../utility/formatters";
import { Value } from "../../../utility/formatters/types";
import visible from "../../../utility/visibilityManagement";
import mandatory from "../../../utility/mandatoryManagement";

interface TextProps extends MetaDataProps {
  elementId: string;
}

const Text: React.FC<TextProps> = ({ elementId, metaData }) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { onChangeValueHandler, value } = useHandleOnNext();
  const [text, setText] = useState(value[metaData.dataKey] || "");

  const onInput = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      formatOnInput(
        { target: { value: e.currentTarget.value } } as E,
        metaData.inputOptions?.formatterRule ||
          ("NO_FORMATTER" as FormatterRule)
      );
    },
    [metaData.inputOptions?.formatterRule]
  );

  const onBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      value[metaData.dataKey] = e.target.value;
      onChangeValueHandler(value);
    },
    [metaData.dataKey, onChangeValueHandler, value]
  );

  const onChanges = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const required: boolean = useMemo(
    () => mandatory(value, { metaData }),
    [value, metaData]
  );

  return (
    <Input
      id={`${elementId}-Box-TextField`}
      label={metaData.title}
      required={required}
      value={formatValue(
        text as Value,
        metaData.inputOptions?.formatterRule || "NO_FORMATTER"
      )}
      onChange={onChanges}
      onInput={onInput}
      onBlur={onBlur}
    />
  );
};

const IntermediaryComponent: React.FC<TextProps> = ({
  elementId,
  metaData,
}: TextProps) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { value } = useHandleOnNext();

  const visibility: boolean = visible(value, { metaData });

  if (!visibility) return <></>;

  return <Text elementId={elementId} metaData={metaData} />;
};

export default IntermediaryComponent;
