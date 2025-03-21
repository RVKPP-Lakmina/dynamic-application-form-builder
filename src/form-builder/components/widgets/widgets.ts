import React from "react";

export const mainWidgetMap = new Map<
  string,
  React.LazyExoticComponent<React.ComponentType<unknown>>
>([
  ["wrap", React.lazy(() => import("./main/Wrap"))],
  ["text", React.lazy(() => import("./main/Text"))],
  ["select", React.lazy(() => import("./main/Select"))],
  ["row", React.lazy(() => import("./main/Row"))],
]);

export const customWidgetMap = new Map<string, any>([]);
