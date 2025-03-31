import Logger from "../../../utility/logger";
import { FormStore, WidgetParams } from "../../interfaces/interfaces";
import SectionBuilder from "./SectionBuilder";
import WidgetMap from "./WidgetMap";

/**
 * FormStoreConfigBreaker component is used to break the formStore configuration into different components.
 * It will break the formStore configuration into different components based on the type of the formStore.
 *
 * @param {Object} formStore - The formStore configuration
 * @param {String} elementId - The elementId for the component
 * @param {Object} params - The params for the component
 * @returns {React.ReactElement} - The FormStoreConfigBreaker component
 */

interface FormStoreConfigBreakerProps {
  formStore: FormStore[];
  elementId: string;
  params?: WidgetParams;
}

const FormStoreConfigBreaker: React.FC<FormStoreConfigBreakerProps> = ({
  formStore,
  elementId,
  params,
}: FormStoreConfigBreakerProps) => {
  if (!Array.isArray(formStore)) {
    Logger.info(
      "FormStoreConfigBreaker | FormStore is not an array",
      formStore
    );
    return <></>;
  }

  params = params ? params : ({} as WidgetParams);

  return (
    <>
      {formStore.map((form) => (
        <Build
          key={`${elementId}-${form?.type}-Build-map-FormStoreConfigBreaker-${form.dataKey}`}
          form={form}
          elementId={elementId}
          params={params || {}}
        />
      ))}
    </>
  );
};

export default FormStoreConfigBreaker;

/**
 * Build component is used to build the form based on the type of the form.
 * It will build the form based on the type of the form.
 * If the type of the form is section, it will call the SectionBuilder component.
 * If the type of the form is template or application, it will call the FormStoreConfigBreaker component.
 * If the type of the form is not section, template or application, it will call the WidgetMap component.
 * @param {Object} form - The form configuration
 * @param {String} elementId - The elementId for the component
 * @returns {React.ReactElement} - The Build component
 */

interface BuildProps {
  form: FormStore;
  elementId: string;
  params?: WidgetParams;
}

const Build: React.FC<BuildProps> = ({
  form,
  elementId,
  params,
}: BuildProps) => {
  switch (form?.type) {
    case "section": {
      return (
        <SectionBuilder
          key={`${elementId}-${form?.type}-SectionBuilder-switch-ApplicationFormBuilder-${form.dataKey}`}
          elementId={`${elementId}-${form?.type}-section-SectionBuilder-switch-ApplicationFormBuilder-${form.dataKey}`}
          metaData={form}
          params={{
            ...(params || {}),
            sectionKey: form.dataKey,
          }}
        />
      );
    }

    case "template":
    case "application": {
      return (
        <FormStoreConfigBreaker
          key={`${elementId}-${form?.type}-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${form.dataKey}`}
          elementId={`${elementId}-${form?.type}-template-FormStoreConfigBreaker-switch-ApplicationFormBuilder-${form.dataKey}`}
          formStore={[...form.children]}
          params={{
            ...((params as WidgetParams) || {}),
            sectionKey: form.dataKey,
          }}
        />
      );
    }

    default: {
      return (
        <WidgetMap
          key={`${elementId}-${form.type}-WidgetMap-switch-ApplicationFormBuilder-${form.dataKey}`}
          elementId={`${elementId}-${form.type}-WidgetMap-switch-ApplicationFormBuilder-${form.dataKey}`}
          formStore={form}
          params={{
            ...((params as WidgetParams) || {}),
            sectionKey: form.dataKey,
          }}
        />
      );
    }
  }
};
