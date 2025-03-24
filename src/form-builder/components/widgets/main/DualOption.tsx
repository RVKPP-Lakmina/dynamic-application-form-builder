import { MetaDataProps } from "../../../interfaces/interfaces";
import DualOptions from "../../ui/DualOptions";

interface DualOptionProps extends MetaDataProps {
  elementId: string;
}

const DualOption: React.FC<DualOptionProps> = ({
  metaData,
}: DualOptionProps) => {
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
