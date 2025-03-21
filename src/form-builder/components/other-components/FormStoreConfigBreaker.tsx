import Logger from "../../../utility/logger";
import SectionBuilder from "./SectionBuilder";
import WidgetMap from "./WidgetMap";

const FormStoreConfigBreaker = ({ formStore, elementId }) => {
  if (!Array.isArray(formStore) || formStore?.children) {
    Logger.info(
      "FormStoreConfigBreaker | FormStore is not an array",
      formStore
    );
    return formStore;
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
