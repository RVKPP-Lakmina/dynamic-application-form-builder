import { ReactNode, useMemo, useReducer } from "react";
import StoreContext from "../context/StoreContext";
import { initialState, reducer } from "../stores/formDataStore";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mainActions = useMemo(() => {
    const onChangeValue = (section: string, payload: any) => {
      dispatch({ type: "UPDATE_SECTION", section, payload });
    };

    const onDeleteSection = (section: string) => {
      dispatch({ type: "DELETE_SECTION", section });
    };

    const onResetStore = () => {
      dispatch({ type: "RESET_STORE" });
    };

    return {
      onChangeValue,
      onDeleteSection,
      onResetStore,
    };
  }, []);

  return (
    <StoreContext.Provider value={{ state, mainActions }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
