import React from "react";
import { customWidgetMap, mainWidgetMap } from "../widgets/widgets";

const searchAndVerifyWidget = (widgetName) => {
  if (
    !widgetName ||
    (!mainWidgetMap.has(widgetName) && !customWidgetMap.has(widgetName))
  ) {
    return mainWidgetMap.get("text");
  } else if (customWidgetMap.has(widgetName)) {
    return customWidgetMap.get(widgetName);
  } else {
    return mainWidgetMap.get(widgetName);
  }
};

const WidgetMap = ({ elementId, formStore }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
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
