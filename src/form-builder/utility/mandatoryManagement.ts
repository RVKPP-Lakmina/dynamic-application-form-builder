import { MetaDataProps } from "../interfaces/interfaces";
import visible from "./visibilityManagement";

export default function mandatory(
  value: Record<string, unknown>,
  params: MetaDataProps
): boolean {
  const visibility: boolean = visible(value, params);

  if (!visibility) {
    return false;
  }

  let mandatory: boolean = Boolean(params?.metaData?.render?.required);

  if (
    !Object.keys(params.metaData.dependencyManagement?.mandatory || {}).length
  ) {
    return mandatory;
  }

  Object.entries(params.metaData.dependencyManagement?.mandatory || {}).forEach(
    ([dataKey, dataValue]: [string, string]) => {
      if (!value?.[dataKey] || value?.[dataKey] !== dataValue) {
        mandatory = false;
      }
    }
  );

  return mandatory;
}
