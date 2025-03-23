import { Stack } from "@mui/material";
import FormStoreConfigBreaker from "../../other-components/FormStoreConfigBreaker";
import { MetaDataProps } from "../../../interfaces/interfaces";

interface WrapProps extends MetaDataProps {
  elementId: string;
}

const Row: React.FC<WrapProps> = ({ metaData, elementId }: WrapProps) => {
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
