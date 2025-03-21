import Box from "@mui/material/Box/Box";
import FormStoreConfigBreaker from "../../other-components/FormStoreConfigBreaker";
import { Stack } from "@mui/material";
import Row from "./Row";

const Wrap = ({ elementId, metaData }) => {
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
