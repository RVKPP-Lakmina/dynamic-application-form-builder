import { MetaDataProps } from "../interfaces/interfaces";

export default function visible(
  value: Record<string, unknown>,
  params: MetaDataProps
): boolean {
  if (!params.metaData.render.visibleInForm) {
    return Boolean(params.metaData.render.visibleInForm);
  }

  let visibility: boolean = params.metaData.render.visibleInForm;

  if (
    !Object.keys(params.metaData.dependencyManagement?.visibility || {}).length
  ) {
    return visibility;
  }

  Object.entries(
    params.metaData.dependencyManagement?.visibility || {}
  ).forEach(([dataKey, dataValue]: [string, string]) => {
    if (!value?.[dataKey] || value?.[dataKey] !== dataValue) {
      visibility = false;
    }
  });

  return visibility;
}
