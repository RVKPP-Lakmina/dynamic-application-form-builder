import React from "react";
import { customWidgetMap, mainWidgetMap } from "../widgets/widgets";
import { FormStore } from "../../interfaces/interfaces";
import { CircularProgress } from "@mui/material";

const searchAndVerifyWidget = <
  T extends { elementId: string; metaData: FormStore }
>(
  widgetName: string
): React.LazyExoticComponent<React.ComponentType<T>> => {
  return (
    (mainWidgetMap.get(widgetName) as React.LazyExoticComponent<
      React.ComponentType<T>
    >) ??
    (customWidgetMap.get(widgetName) as React.LazyExoticComponent<
      React.ComponentType<T>
    >) ??
    (mainWidgetMap.get("text") as React.LazyExoticComponent<
      React.ComponentType<T>
    >)
  );
};

interface WidgetMapProps {
  elementId: string;
  formStore: FormStore;
}

const WidgetMap: React.FC<WidgetMapProps> = ({
  elementId,
  formStore,
}: WidgetMapProps) => {
  return (
    <React.Suspense fallback={<CircularProgress size={10} />}>
      <>
        {React.createElement(searchAndVerifyWidget(formStore.type), {
          key: `${elementId}-${formStore.type}-WidgetMap-switch-ApplicationFormBuilder-${formStore.dataKey}`,
          elementId: `${elementId}-${formStore.type}-WidgetMap-switch-ApplicationFormBuilder-${formStore.dataKey}`,
          metaData: formStore,
        })}
      </>
    </React.Suspense>
  );
};

export default WidgetMap;
