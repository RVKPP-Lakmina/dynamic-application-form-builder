const compareWithPreviousData = (
  previoslySavedData: Record<string, unknown>,
  sectionData: Record<string, unknown>
) => {
  const response = {};

  Object.keys(sectionData).forEach((key: string) => {
    if (Object.hasOwn(previoslySavedData, key)) {
    }
  });

  return response;
};

export default compareWithPreviousData;
