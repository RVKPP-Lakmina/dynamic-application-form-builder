import { MetaDataProps } from "../../../interfaces/interfaces";
import Label from "../../ui/Label";

interface LabelWidgetProps extends MetaDataProps {
  elementId: string;
}

const LabelWidget: React.FC<LabelWidgetProps> = ({
  metaData,
}: LabelWidgetProps) => {
  return (
    <Label
      labelClassName="text-[16px] text-gray-800 "
      label={metaData?.title}
    />
  );
};

const LabelWidgetWrapper: React.FC<LabelWidgetProps> = (props) => {
  return <LabelWidget {...props} />;
};

export default LabelWidgetWrapper;
