import Logger from "../../../utility/logger";
import { FormStore } from "../../interfaces/interfaces";
import SectionBuilder from "./SectionBuilder";
import WidgetMap from "./WidgetMap";

/**
 * FormStoreConfigBreaker component is used to break the formStore configuration into different components.
 * It will break the formStore configuration into different components based on the type of the formStore.
 *
 * @param {Object} formStore - The formStore configuration
 * @param {String} elementId - The elementId for the component
 * @returns {React.ReactElement} - The FormStoreConfigBreaker component
 */

interface FormStoreConfigBreakerProps {
  formStore: FormStore[];
  elementId: string;
}

const FormStoreConfigBreaker: React.FC<FormStoreConfigBreakerProps> = ({
  formStore,
  elementId,
}: FormStoreConfigBreakerProps) => {
  if (!Array.isArray(formStore)) {
    Logger.info(
      "FormStoreConfigBreaker | FormStore is not an array",
      formStore
    );
    return <></>;
  }

  return (
    <>
      {formStore.map((form) => {
        switch (form?.type) {
          case "section": {
            return (
              <SectionBuilder
                key={`${elementId}-${form?.type}-SectionBuilder-switch-ApplicationFormBuilder-${form.dataKey}`}
                elementId={`${elementId}-${form?.type}-section-SectionBuilder-switch-ApplicationFormBuilder-${form.dataKey}`}
                metaData={form}
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
              />
            );
          }

          default: {
            return (
              <WidgetMap
                key={`${elementId}-${form.type}-WidgetMap-switch-ApplicationFormBuilder-${form.dataKey}`}
                elementId={`${elementId}-${form.type}-WidgetMap-switch-ApplicationFormBuilder-${form.dataKey}`}
                formStore={form}
              />
            );
          }
        }
      })}
    </>
  );
};

export default FormStoreConfigBreaker;
