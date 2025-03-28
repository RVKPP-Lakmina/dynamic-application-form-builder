import AccordionComponent from "../ui/AccordionComponent";
import FormStoreConfigBreaker from "./FormStoreConfigBreaker";
import useMultiStageFormBuilder from "../../hooks/useMultiStageFormBuilder";
import { Box, Button, Stack } from "@mui/material";
import { MetaDataProps } from "../../interfaces/interfaces";

interface SectionBuilderProps<T = unknown> extends MetaDataProps {
  elementId: string;
  params: Record<string, T>;
}

const SectionBuilder: React.FC<SectionBuilderProps> = ({
  elementId,
  metaData,
  params,
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
          <>
            <FormStoreConfigBreaker
              key={`${elementId}-${metaData?.type}-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
              elementId={`${elementId}-${metaData?.type}-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
              formStore={[...metaData.children]}
              params={{ ...params, value, onChangeValueHandler }}
            />
            <Stack mt={2} direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={onNext}
                className="flex items-center w-[200px]"
              >
                Next
              </Button>
            </Stack>
          </>
        )}
      </AccordionComponent>
    </Box>
  );
};

export default SectionBuilder;
