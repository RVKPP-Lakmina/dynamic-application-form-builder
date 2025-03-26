import { MetaDataProps } from "../interfaces/interfaces";

export default function mandatory(
  value: Record<string, unknown>,
  params: MetaDataProps
): boolean {
  if (!params.metaData.render.required) {
    return Boolean(params.metaData.render.required);
  }

  let mandatory: boolean = params.metaData.render.required;

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
