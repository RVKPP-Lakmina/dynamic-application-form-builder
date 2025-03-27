import { Typography } from "@mui/material";
import { MultiStageFormBuilderProps } from "../../interfaces/interfaces";
import ApplicationFormBuilder from "./ApplicationFormBuilder";
import StoreProvider from "../../providers/StoreProvider";

const MultiStageFormBuilder: React.FC<MultiStageFormBuilderProps> = ({
  formStore,
}: // otherParams,
MultiStageFormBuilderProps) => {
  switch (formStore?.type) {
    case "form":
    case "section": {
      return (
        <StoreProvider
          key={`MultiStageFormBuilder-switch-StoreProvider-${formStore.dataKey}`}
        >
          <ApplicationFormBuilder
            elementId={`MultiStageFormBuilder-switch-StoreProvider-ApplicationFormBuilder-${formStore.dataKey}`}
            formStore={formStore?.children}
          />
        </StoreProvider>
      );
    }

    default:
      return <Typography>Form Type Not Found!</Typography>;
  }
};

export default MultiStageFormBuilder;
