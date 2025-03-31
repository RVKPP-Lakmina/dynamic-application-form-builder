import { ReactNode, useMemo, useReducer } from "react";
import StoreContext from "../context/StoreContext";
import { initialState, reducer } from "../stores/formDataStore";
import MultiStageFormBuilderProvider from "./MultiStageFormBuilderProvider";

const StoreProvider = ({
  children,
  elementId,
}: {
  children: ReactNode;
  elementId: string;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mainActions = useMemo(() => {
    const onChangeValue = (section: string, payload: unknown) => {
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
      <MultiStageFormBuilderProvider
        key={`${elementId}-StoreProvider-StoreContext-MultiStageFormBuilderProvider`}
      >
        {children}
      </MultiStageFormBuilderProvider>
    </StoreContext.Provider>
  );
};

export default StoreProvider;
