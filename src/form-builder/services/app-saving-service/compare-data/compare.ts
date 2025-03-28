import compareWithPreviousData from "./compareWithPreviousData";

type FormData = Record<string, unknown> | string | number | boolean | unknown[];

type CompareDataParams = {
  prevData: Record<string, FormData> | FormData;
  sectionData: Record<string, FormData> | FormData;
  itemKey?: string;
};

const stringComparison = (prevData: string, sectionData: string) => {
  if (prevData === sectionData) {
    return sectionData;
  }
};

const numberComparison = (prevData: number, sectionData: number) => {
  if (prevData === sectionData) {
    return sectionData;
  }
};

const booleanComparison = (prevData: boolean, sectionData: boolean) => {
  if (prevData === sectionData) {
    return sectionData;
  }
};

const arrayComparison = (prevData: unknown[], sectionData: unknown[]) => {
  //BY CONSIDERING THAT THE ARRAY IS OF OBJECT DATA TYPES
  // EVERY AARRAY SHOULD HAVE A UNIQUE KEY TO COMPARE NAMED "dataId"

  const response: unknown[] = [];

  const prevDataIds = prevData.map((data) => data["dataId"]);

  sectionData.forEach((data) => {
    if (prevDataIds.includes(data["dataId"])) {
      const res = compareWithPreviousData(
        prevData.find((data) => data?.["dataId"]),
        data
      );
    }
  });
};

export const compareData = ({
  prevData,
  sectionData,
  itemKey,
}: CompareDataParams) => {
  const response: Record<string, unknown> = {};

  if (itemKey) {
    prevData = (prevData as Record<string, FormData>)[itemKey];
    sectionData = (sectionData as Record<string, FormData>)[itemKey];
  }

  if (prevData === sectionData) {
    return sectionData;
  }
};
