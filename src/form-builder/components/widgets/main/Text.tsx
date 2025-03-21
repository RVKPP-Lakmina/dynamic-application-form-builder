import { Box, TextField } from "@mui/material";
import React from "react";
import useMultiStageFormBuilder from "../../../hooks/useMultiStageFormBuilder";

const Text = ({ elementId, metaData }) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { onChangeValueHandler, value } = useHandleOnNext();
  return (
    <TextField
      id={`${elementId}-Box-TextField`}
      label={metaData.title}
      value={value[metaData.dataKey] || ""}
      onChange={(e) => {
        value[metaData.dataKey] = e.target.value;
        onChangeValueHandler(value);
      }}
      variant="outlined"
      className="w-[320px]"
    />
  );
};

export default Text;
