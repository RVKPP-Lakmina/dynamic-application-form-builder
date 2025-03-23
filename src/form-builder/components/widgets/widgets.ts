import React from "react";

export const mainWidgetMap = new Map<
  string,
  React.LazyExoticComponent<React.ComponentType<unknown>>
>([
  [
    "wrap",
    React.lazy(() =>
      import("./main/Wrap").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
  [
    "text",
    React.lazy(() =>
      import("./main/Text").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
  [
    "select",
    React.lazy(() =>
      import("./main/Select").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
  [
    "row",
    React.lazy(() =>
      import("./main/Row").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
]);

export const customWidgetMap = new Map<string, unknown>([]);
