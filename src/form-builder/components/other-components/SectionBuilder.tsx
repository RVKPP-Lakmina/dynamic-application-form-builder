import AccordionComponent from "../ui/AccordionComponent";
import FormStoreConfigBreaker from "./FormStoreConfigBreaker";
import useMultiStageFormBuilder from "../../hooks/useMultiStageFormBuilder";
import { Box, Button, Stack } from "@mui/material";

const SectionBuilder = ({ elementId, metaData }) => {
  const { useHandleOnNext } = useMultiStageFormBuilder();
  const { expanded, onExpand } = useHandleOnNext();

  return (
    <Box className=" h-full p-1 m-1 border border-gray-200">
      <AccordionComponent
        key={`${elementId}-${metaData?.type}-AccordionComponent-switch-ApplicationFormBuilder-${metaData.dataKey}`}
        formData={metaData}
        expanded={expanded}
        onExpand={onExpand}
      >
        {/* FormStoreConfigBreaker */}

        {expanded && expanded === metaData.dataKey && (
          <>
            <FormStoreConfigBreaker
              key={`${elementId}-${metaData?.type}-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
              elementId={`${elementId}-${metaData?.type}-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${metaData.dataKey}`}
              formStore={[...metaData.children]}
            />
            <Stack mt={2} direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
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
