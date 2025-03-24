import { useState } from "react";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";
import { MetaDataProps } from "../../../interfaces/interfaces";
import Input from "../../ui/Input";

interface TextProps extends MetaDataProps {
  elementId: string;
}

const Text: React.FC<TextProps> = ({ elementId, metaData }) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { onChangeValueHandler, value } = useHandleOnNext();
  const [text, setText] = useState(value[metaData.dataKey] || "");
  return (
    <Input
      id={`${elementId}-Box-TextField`}
      label={metaData.title}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={(e) => {
        value[metaData.dataKey] = e.target.value;
        onChangeValueHandler(value);
      }}
    />
  );
};

export default Text;
