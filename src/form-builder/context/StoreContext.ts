import { createContext } from "react";
import { SectionState } from "../interfaces/interfaces";

interface MainActions {
  onChangeValue: (section: string, payload: any) => void;
  onDeleteSection: (section: string) => void;
  onResetStore: () => void;
}

const StoreContext = createContext<
  { state: SectionState; mainActions: MainActions } | undefined
>(undefined);

export default StoreContext;
