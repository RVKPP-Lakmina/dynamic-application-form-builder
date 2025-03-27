import { MetaDataProps } from "../../../interfaces/interfaces";
import { DropzoneWidget } from "../../ui/DropZone";

interface DropZoneProps extends MetaDataProps {
  elementId: string;
}

const DropZone: React.FC<DropZoneProps> = ({
  elementId,
  metaData,
}: DropZoneProps) => {
  console.log(elementId, metaData);
  return <DropzoneWidget />;
};

export default DropZone;
