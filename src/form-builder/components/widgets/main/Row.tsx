import { Stack } from "@mui/material";
import FormStoreConfigBreaker from "../../other-components/FormStoreConfigBreaker";
import { MetaDataProps, WidgetParams } from "../../../interfaces/interfaces";

interface WrapProps extends MetaDataProps {
  elementId: string;
  params: WidgetParams;
}

const Row: React.FC<WrapProps> = ({
  metaData,
  elementId,
  params,
}: WrapProps) => {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={4}
      className="w-full h-full p-1 m-2 text-gray-500"
    >
      <FormStoreConfigBreaker
        formStore={metaData.children}
        elementId={`${elementId}-${metaData.type}-Wrap-Box-FormStoreConfigBreaker`}
        params={params}
      />
    </Stack>
  );
};

export default Row;
