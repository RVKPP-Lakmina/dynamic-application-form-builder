import CachingStorage from "../cachingStorage";
import compareWithPreviousData from "./compare-data/compareWithPreviousData";

type CustomFormData = Record<string, unknown>;

type saveSectionChangesParams = {
  sectionKey: string;
  sectionData: Record<string, unknown>;
};

const saveSectionChanges: (params: saveSectionChangesParams) => void = async ({
  sectionKey,
  sectionData,
}: saveSectionChangesParams) => {
  if (!sectionData[sectionKey]) {
    throw new Error("Section data is missing");
  }

  const previoslySavedData =
    (CachingStorage.get("sectionData") as Record<string, CustomFormData>) || {};

  let response = sectionData[sectionKey];

  if (previoslySavedData) {
    response = compareWithPreviousData(
      previoslySavedData as Record<string, CustomFormData>,
      response as Record<string, CustomFormData>
    );

    console.log("Response from compareWithPreviousData", response);
    CachingStorage.set(
      "sectionData",
      response as Record<string, CustomFormData>
    );
  }
};

export default saveSectionChanges;
