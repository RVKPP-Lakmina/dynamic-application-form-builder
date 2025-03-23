import { TextField } from "@mui/material";
import { useState } from "react";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";

const Text = ({ elementId, metaData }) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { onChangeValueHandler, value } = useHandleOnNext();
  const [text, setText] = useState(value[metaData.dataKey]);
  return (
    <TextField
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
      variant="outlined"
      className="w-general h-general padding-genaeral"
    />
  );
};

export default Text;
