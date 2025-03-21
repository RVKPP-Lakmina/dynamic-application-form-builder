import { use, useCallback, useEffect, useMemo, useState } from "react";
import MultiStageFormBuilderContext from "../context/MultiStageFormBuilderContext";
import useStore from "../hooks/useStore";

export default function MultiStageFormBuilderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [applicationSectionErrors, setApplicationSectionErrors] = useState<
    Record<string, string[]>
  >({});
  const [currSaveData, setCurrSaveData] = useState<Record<string, unknown>>({});
  const [expanded, setExpanded] = useState<string>("");

  const useHandleOnNext = () => {
    const {
      state,
      mainActions: { onChangeValue },
    } = useStore();

    useEffect(() => {
      if (expanded && !state?.[expanded]) {
        onChangeValue(expanded, {});
      }
    }, [expanded, onChangeValue]);

    const onChangeValueHandler = useCallback(
      (payload: any) => {
        onChangeValue(expanded, payload);
      },
      [expanded, onChangeValue]
    );

    //validations
    const handleValidation = () => {};

    const onNext = () => {};

    const onExpand =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : "");
      };

    return {
      handleValidation,
      onNext,
      onExpand,
      expanded,
      onChangeValueHandler,
      value: state?.[expanded] || {},
    };
  };

  return (
    <MultiStageFormBuilderContext.Provider
      value={{ formId: "1", otherParams: {}, useHandleOnNext }}
    >
      {children}
    </MultiStageFormBuilderContext.Provider>
  );
}
