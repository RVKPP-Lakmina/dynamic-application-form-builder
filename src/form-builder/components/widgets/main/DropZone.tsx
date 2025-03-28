import { MetaDataProps, WidgetParams } from "../../../interfaces/interfaces";
import { DropzoneWidget } from "../../ui/DropZone";

interface DropZoneProps extends MetaDataProps {
  elementId: string;
  params: WidgetParams;
}

const DropZone: React.FC<DropZoneProps> = ({
  elementId,
  metaData,
}: // params,
DropZoneProps) => {
  console.log(elementId, metaData);
  return <DropzoneWidget />;
};

export default DropZone;
