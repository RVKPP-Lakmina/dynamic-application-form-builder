import AccordionComponent from "../ui/AccordionComponent";
import FormStoreConfigBreaker from "./FormStoreConfigBreaker";
import useMultiStageFormBuilder from "../../hooks/useMultiStageFormBuilder";
import { Box, Button, Stack } from "@mui/material";
import { MetaDataProps, WidgetParams } from "../../interfaces/interfaces";
import React from "react";

interface SectionBuilderProps<T = unknown> extends MetaDataProps {
  elementId: string;
  params: Record<string, T>;
  isFromAccordion?: boolean;
}

const Build = ({
  elementId,
  metaData,
  params,
  onNext,
}: {
  onNext: () => Promise<void>;
} & SectionBuilderProps) => {
  return (
    <>
      <FormStoreConfigBreaker
        key={`${elementId}-${metaData?.type}-Build-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
        elementId={`${elementId}-${metaData?.type}-Build-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
        formStore={[...metaData.children]}
        params={params as WidgetParams}
      />
      <Stack mt={2} direction="row" justifyContent="flex-end">
        <Button
          key={`${elementId}-${metaData?.type}-Build-Stack-Button-switch-ApplicationFormBuilder-${metaData.dataKey}`}
          variant="contained"
          onClick={onNext}
          className="flex items-center w-[200px]"
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

const SectionBuilder: React.FC<SectionBuilderProps> = ({
  elementId,
  metaData,
  params,
  isFromAccordion = true,
}: SectionBuilderProps) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const {
    expanded,
    onExpand,
    onNext,
    value,
    pencilClick,
    onChangeValueHandler,
  } = useHandleOnNext(metaData, metaData.dataKey);

  params = params
    ? ({ ...params, value, onChangeValueHandler } as WidgetParams)
    : {};

  if (!isFromAccordion) {
    return (
      <Build
        elementId={`${elementId}-${metaData?.type}-AccordionComponent-Build-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
        metaData={metaData}
        params={params}
        onNext={onNext}
      />
    );
  }

  return (
    <Box className=" h-full p-1 m-1 border border-gray-200">
      <AccordionComponent
        pencilClick={pencilClick}
        key={`${elementId}-${metaData?.type}-AccordionComponent-switch-ApplicationFormBuilder-${metaData.dataKey}`}
        formData={metaData}
        expanded={expanded}
        status={value?.status || "pending"}
        onExpand={onExpand}
      >
        {expanded && expanded === metaData.dataKey && (
          <Build
            elementId={`${elementId}-${metaData?.type}-AccordionComponent-Build-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
            metaData={metaData}
            params={params}
            onNext={onNext}
          />
        )}
      </AccordionComponent>
    </Box>
  );
};

const SectionBuilderMemo = React.memo(
  SectionBuilder,
  (prevProps, nextProps) => {
    return (
      prevProps.elementId === nextProps.elementId &&
      prevProps.metaData.dataKey === nextProps.metaData.dataKey
    );
  }
);

export default SectionBuilderMemo;
