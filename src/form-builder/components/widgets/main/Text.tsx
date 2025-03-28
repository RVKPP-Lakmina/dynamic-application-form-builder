import { useCallback, useMemo, useState } from "react";
import {
  E,
  FormatterRule,
  MetaDataProps,
  WidgetParams,
} from "../../../interfaces/interfaces";
import Input from "../../ui/Input";
import { formatOnInput, formatValue } from "../../../utility/formatters";
import { Value } from "../../../utility/formatters/types";
import visible from "../../../utility/visibilityManagement";
import mandatory from "../../../utility/mandatoryManagement";

interface TextProps extends MetaDataProps {
  elementId: string;
  params: WidgetParams;
}

const Text: React.FC<TextProps> = ({ elementId, metaData, params }) => {
  const { onChangeValueHandler, value } = params;
  const [text, setText] = useState(value[metaData.dataKey] || "");

  const onInput = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      const eventParams = { target: { value: e.currentTarget.value } } as E;
      formatOnInput(
        eventParams,
        metaData.inputOptions?.formatterRule ||
          ("NO_FORMATTER" as FormatterRule)
      );

      (e.target as HTMLInputElement).value =
        eventParams.target.value.toString();
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
  params,
}: TextProps) => {
  const { value } = params;

  const visibility: boolean = visible(value, { metaData });

  if (!visibility) return <></>;

  return <Text elementId={elementId} metaData={metaData} params={params} />;
};

export default IntermediaryComponent;
