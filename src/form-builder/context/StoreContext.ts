import { createContext } from "react";
import { SectionState } from "../interfaces/interfaces";

interface MainActions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeValue: (section: string, payload: any) => void;
  onDeleteSection: (section: string) => void;
  onResetStore: () => void;
}

const StoreContext = createContext<
  { state: SectionState; mainActions: MainActions } | undefined
>(undefined);

export default StoreContext;
