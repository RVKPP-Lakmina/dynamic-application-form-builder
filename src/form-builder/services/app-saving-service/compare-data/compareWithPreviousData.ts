import { compareData } from "./compare";

type FormData = Record<string, unknown> | string | number | boolean | unknown[];

const compareWithPreviousData = (
  previoslySavedData: Record<string, FormData>,
  sectionData: Record<string, FormData>
): {
  dataId: string;
  [key: string]: unknown;
} => {
  const response: Record<string, unknown> & { dataId: string } = { dataId: "" };

  Object.keys(sectionData).forEach((key: string) => {
    if (Object.hasOwn(previoslySavedData, key)) {
      const res = compareData({
        prevData: previoslySavedData[key],
        sectionData: sectionData[key],
      });

      response[key] = res;
    } else {
      response[key] = sectionData[key];
    }
  });

  return response;
};

export default compareWithPreviousData;
