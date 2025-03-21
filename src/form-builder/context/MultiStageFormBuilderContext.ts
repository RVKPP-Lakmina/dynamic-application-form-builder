import { createContext } from "react";
import { MultiStageFormBuilderContextProps } from "../interfaces/interfaces";

const MultiStageFormBuilderContext = createContext<
  MultiStageFormBuilderContextProps | undefined
>(undefined);

export default MultiStageFormBuilderContext;
