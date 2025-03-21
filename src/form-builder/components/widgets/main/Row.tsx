import { Stack } from "@mui/material";
import React from "react";
import FormStoreConfigBreaker from "../../other-components/FormStoreConfigBreaker";

const Row = ({ metaData, elementId }) => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      className="w-full h-full p-1"
    >
      <FormStoreConfigBreaker
        formStore={metaData.children}
        elementId={`${elementId}-${metaData.type}-Wrap-Box-FormStoreConfigBreaker`}
      />
    </Stack>
  );
};

export default Row;
