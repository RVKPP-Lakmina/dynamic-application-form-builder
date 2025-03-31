import { Typography } from "@mui/material";
import { MultiStageFormBuilderProps } from "../../interfaces/interfaces";
import ApplicationFormBuilder from "./ApplicationFormBuilder";
import StoreProvider from "../../providers/StoreProvider";
import SectionBuilder from "./SectionBuilder";
import React from "react";

const MultiStageFormBuilder: React.FC<MultiStageFormBuilderProps> = ({
  formStore,
}: MultiStageFormBuilderProps) => {
  switch (formStore?.type) {
    case "form": {
      return (
        <StoreProvider
          key={`form-MultiStageFormBuilder-switch-StoreProvider-${formStore.dataKey}`}
          elementId={`form-MultiStageFormBuilder-switch-StoreProvider-${formStore.dataKey}`}
        >
          <ApplicationFormBuilder
            elementId={`form-MultiStageFormBuilder-switch-StoreProvider-ApplicationFormBuilder-${formStore.dataKey}`}
            formStore={formStore?.children}
          />
        </StoreProvider>
      );
    }

    case "section": {
      return (
        <StoreProvider
          key={`section-MultiStageFormBuilder-switch-StoreProvider-${formStore.dataKey}`}
          elementId={`section-MultiStageFormBuilder-switch-StoreProvider-${formStore.dataKey}`}
        >
          <div
            key={`section-MultiStageFormBuilder-switch-StoreProvider-div-${formStore.dataKey}`}
            className="p-4"
          >
            <SectionBuilder
              elementId={`section-MultiStageFormBuilder-switch-StoreProvider-ApplicationFormBuilder-${formStore.dataKey}`}
              metaData={formStore}
              params={{}}
              isFromAccordion={false}
            />
          </div>
        </StoreProvider>
      );
    }

    default:
      return <Typography>Form Type Not Found!</Typography>;
  }
};

const MultiStageFormBuilderMemo = React.memo(
  MultiStageFormBuilder,
  (prevProps, nextProps) => {
    return prevProps?.formStore?.dataKey === nextProps.formStore?.dataKey;
  }
);
export default MultiStageFormBuilderMemo;
