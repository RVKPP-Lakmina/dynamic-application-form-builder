import compareWithPreviousData from "./compareWithPreviousData";

type FormData = Record<string, unknown> | string | number | boolean | unknown[];
type CompareDataParams = {
  prevData: Record<string, FormData> | FormData;
  sectionData: Record<string, FormData> | FormData;
  itemKey?: string;
};

const isValue: (value: unknown) => boolean = (value: unknown) =>
  Boolean(value !== null && value !== undefined && value !== "");

const isObject: (value: unknown) => boolean = (value: unknown) =>
  /^\s*\{.*\}\s*$/.test(String(value || {}));

const stringComparison = (prevData: string, sectionData: string) => {
  if (prevData !== sectionData) {
    return sectionData;
  }
  if (prevData === sectionData) {
    return isValue(sectionData as string) ? sectionData : undefined;
  }
};

const numberComparison = (prevData: number, sectionData: number) => {
  if (prevData !== sectionData) {
    return sectionData;
  }
  if (prevData === sectionData) {
    return isValue(sectionData as number) ? sectionData : undefined;
  }
};

const booleanComparison = (prevData: boolean, sectionData: boolean) => {
  if (prevData !== sectionData) {
    return sectionData;
  }
  if (prevData === sectionData) {
    return isValue(sectionData as boolean) ? sectionData : undefined;
  }
};

type DataItem = {
  dataId: string;
  [key: string]: unknown;
};

const arrayComparison = (prevData: DataItem[], sectionData: DataItem[]) => {
  const response: DataItem[] = [];
  const prevDataIds = new Set(prevData.map((data) => data.dataId));

  sectionData.forEach((data) => {
    if (prevDataIds.has(data.dataId)) {
      const prevItem = prevData.find((item) => item.dataId === data.dataId);
      if (prevItem) {
        const res: DataItem = compareWithPreviousData(
          prevItem as Record<string, FormData>,
          data as Record<string, FormData>
        );
        if (Object.keys(res).length > 0) {
          response.push(res);
        }
      }
    } else {
      response.push(data);
    }
  });

  return response;
};

export const compareData = ({
  prevData,
  sectionData,
  itemKey,
}: CompareDataParams) => {
  if (itemKey) {
    prevData = (prevData as Record<string, FormData>)[itemKey];
    sectionData = (sectionData as Record<string, FormData>)[itemKey];
  }

  if (Array.isArray(sectionData)) {
    return arrayComparison(prevData as DataItem[], sectionData as DataItem[]);
  }

  if (typeof prevData === "string" && typeof sectionData === "string") {
    const res = stringComparison(prevData as string, sectionData as string);
    if (res) {
      return res;
    }
  } else if (typeof prevData === "number" && typeof sectionData === "number") {
    const res = numberComparison(prevData as number, sectionData as number);
    if (res) {
      return res;
    }
  } else if (
    typeof prevData === "boolean" &&
    typeof sectionData === "boolean"
  ) {
    const res = booleanComparison(prevData as boolean, sectionData as boolean);
    if (res) {
      return res;
    }
  } else if (isObject(prevData) && isObject(sectionData)) {
    const response: Record<string, unknown> = {};

    Object.keys(sectionData).forEach((key: string) => {
      const res = compareWithPreviousData(
        prevData as Record<string, FormData>,
        sectionData as Record<string, FormData>
      );
      if (Object.keys(res).length > 0) {
        response[key] = res;
      }
    });

    return response;
  }
};
