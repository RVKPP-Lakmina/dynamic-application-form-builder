import { MetaDataProps, WidgetParams } from "../../../interfaces/interfaces";
import DualOptions from "../../ui/DualOptions";

interface DualOptionProps extends MetaDataProps {
  elementId: string;
  params: WidgetParams;
}

const DualOption: React.FC<DualOptionProps> = ({
  metaData,
  params,
}: DualOptionProps) => {
  const { value, onChangeValueHandler } = params;
  return (
    <DualOptions
      label={metaData?.title || ""}
      leftOption={"Yes"}
      rightOption={"No"}
      onChange={(e) => {
        console.log(e);
      }}
    />
  );
};

export default DualOption;
