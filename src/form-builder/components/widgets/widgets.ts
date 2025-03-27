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
    "dualOption",
    React.lazy(() =>
      import("./main/DualOption").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
  [
    "date",
    React.lazy(() =>
      import("./main/DateBox").then((module) => ({
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
  [
    "label",
    React.lazy(() =>
      import("./main/Label").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
  [
    "filePicker",
    React.lazy(() =>
      import("./main/DropZone").then((module) => ({
        default: module.default as React.ComponentType<unknown>,
      }))
    ),
  ],
]);

export const customWidgetMap = new Map<string, unknown>([]);
