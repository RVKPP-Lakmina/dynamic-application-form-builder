import MultiStageFormBuilderProvider from "../../providers/MultiStageFormBuilderProvider";
import FormStoreConfigBreaker from "./FormStoreConfigBreaker";

interface ApplicationFormBuilderProps {
  elementId: string;
  formStore: unknown[];
}

const ApplicationFormBuilder: React.FC<ApplicationFormBuilderProps> = ({
  elementId,
  formStore,
}: ApplicationFormBuilderProps) => {
  return (
    <div className="p-15">
      <MultiStageFormBuilderProvider
        key={`${elementId}-ApplicationFormBuilder-div-MultiStageFormBuilderProvider`}
      >
        <FormStoreConfigBreaker elementId={elementId} formStore={formStore} />
      </MultiStageFormBuilderProvider>
    </div>
  );
};

export default ApplicationFormBuilder;
