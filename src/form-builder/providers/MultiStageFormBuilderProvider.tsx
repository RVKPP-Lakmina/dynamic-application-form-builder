/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useState } from "react";
import MultiStageFormBuilderContext from "../context/MultiStageFormBuilderContext";
import useStore from "../hooks/useStore";
import { FormStore } from "../interfaces/interfaces";
import validationMandatoryHandler from "../validations/validations";

export default function MultiStageFormBuilderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [applicationSectionErrors, setApplicationSectionErrors] = useState<
    Record<string, string[]>
  >({});
  const [expanded, setExpanded] = useState<string>("");

  const showAllErrors = useCallback(
    (
      isForCurrSection = false,
      section = ""
    ): string[] | Record<string, string[]> => {
      return isForCurrSection
        ? applicationSectionErrors[section] || []
        : applicationSectionErrors;
    },
    [applicationSectionErrors]
  );

  const useHandleOnNext = (metaData: FormStore, sectionDataKey: string) => {
    const {
      state,
      mainActions: { onChangeValue },
    } = useStore();

    console.log("metaData", sectionDataKey);

    useEffect(() => {
      if (sectionDataKey && !state?.[sectionDataKey]) {
        onChangeValue(sectionDataKey, {});
      }
    }, [onChangeValue, sectionDataKey, state]);

    const onChangeValueHandler = useCallback(
      (payload: any) => {
        onChangeValue(sectionDataKey, payload);
      },
      [onChangeValue, sectionDataKey]
    );

    const pencilClick = () => {
      console.log(sectionDataKey, state?.[sectionDataKey] || {});
    };

    //validations
    const handleValidation = () => {
      const mandatoryResponse: string[] = validationMandatoryHandler(
        metaData,
        sectionDataKey,
        state?.[sectionDataKey]
      );

      setApplicationSectionErrors((prevState) => ({
        ...prevState,
        [sectionDataKey]: mandatoryResponse,
      }));

      state[sectionDataKey]["status"] = mandatoryResponse.length
        ? "error"
        : "success";
    };

    const onNext = () => {
      handleValidation();
    };

    const onExpand =
      // @ts-nocheck


        (panel: string) =>
        (_event: React.SyntheticEvent, isExpanded: boolean) => {
          setExpanded(isExpanded ? panel : "");
        };

    return {
      handleValidation,
      onNext,
      onExpand,
      expanded,
      onChangeValueHandler,
      pencilClick,
      value: state?.[sectionDataKey] || {},
    };
  };

  return (
    <MultiStageFormBuilderContext.Provider
      value={{ formId: "1", otherParams: {}, useHandleOnNext, showAllErrors }}
    >
      {children}
    </MultiStageFormBuilderContext.Provider>
  );
}
