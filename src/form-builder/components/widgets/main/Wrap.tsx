import { MetaDataProps } from "../../../interfaces/interfaces";
import Row from "./Row";

interface WrapProps extends MetaDataProps {
  elementId: string;
}

const Wrap: React.FC<WrapProps> = ({ elementId, metaData }: WrapProps) => {
  return (
    // <div className="p-1 gap-2 grid grid-cols-4 ">
    //   <FormStoreConfigBreaker
    //     formStore={metaData.children}
    //     elementId={`${elementId}-${metaData.type}-Wrap-Box-FormStoreConfigBreaker`}
    //   />
    // </div>

    <Row metaData={metaData} elementId={elementId} />
  );
};

export default Wrap;
