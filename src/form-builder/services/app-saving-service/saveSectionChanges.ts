import CachingStorage from "../cachingStorage";

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

  const previoslySavedData = CachingStorage.get("sectionData") || {};

  if (previoslySavedData) {
    const response = compareWithPreviousData(
      previoslySavedData as Record<string, unknown>,
      sectionData
    );
  }
};

export default saveSectionChanges;
