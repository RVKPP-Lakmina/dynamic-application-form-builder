import { FormStore } from "../interfaces/interfaces";
import CachingStorage from "../services/cachingStorage";
import mandatory from "../utility/mandatoryManagement";

const cacheKey: string = "mandatory-validation";
const restrictedTypes: string[] = ["label"];

const getIndividualFields = (
  structure: FormStore,
  sectionKey: string,
  isRecurse: boolean = false
): FormStore[] => {
  const nodeMetaData: FormStore[] = [];

  if (!isRecurse && CachingStorage.has(sectionKey)) {
    return CachingStorage.get<FormStore[]>(`${cacheKey}-${sectionKey}`) || [];
  }

  structure.children.forEach((child) => {
    if (child.children.length) {
      const response: FormStore[] = getIndividualFields(
        child,
        sectionKey,
        true
      );
      nodeMetaData.push(...response);
    }

    if (!restrictedTypes.includes(child.type)) {
      nodeMetaData.push(child);
    }
  });

  if (!isRecurse) {
    CachingStorage.set(`${cacheKey}-${sectionKey}`, nodeMetaData);
  }

  return nodeMetaData;
};

export default function validationMandatoryHandler(
  structure: FormStore,
  sectionKey: string,
  formData: Record<string, unknown>
) {
  const fields: FormStore[] = getIndividualFields(structure, sectionKey);
  const errors: string[] = intermediateValidationHandler(fields, formData);
  return errors;
}

function intermediateValidationHandler(
  fields: FormStore[],
  formData: Record<string, unknown>
): string[] {
  let errors: string[] = [];

  fields.forEach((field: FormStore) => {
    const isMandatory: boolean = mandatory(formData, { metaData: field });

    errors = isMandatory ? [...errors, field.title] : errors;
  });

  return errors;
}
