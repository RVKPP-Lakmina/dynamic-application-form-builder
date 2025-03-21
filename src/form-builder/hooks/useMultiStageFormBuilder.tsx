import { useContext } from "react";
import MultiStageFormBuilderContext from "../context/MultiStageFormBuilderContext";
import { MultiStageFormBuilderContextProps } from "../interfaces/interfaces";

const useMultiStageFormBuilder = () => {
  const context = useContext<MultiStageFormBuilderContextProps | undefined>(
    MultiStageFormBuilderContext
  );

  if (!context) {
    throw new Error(
      "useApplicationFormContext must be used within a ApplicationFormManageProvider"
    );
  }

  return context;
};

export default useMultiStageFormBuilder;
