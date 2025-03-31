import { FormStore } from "../../interfaces/interfaces";
import FormStoreConfigBreaker from "./FormStoreConfigBreaker";

interface ApplicationFormBuilderProps {
  elementId: string;
  formStore: FormStore[];
}

const ApplicationFormBuilder: React.FC<ApplicationFormBuilderProps> = ({
  elementId,
  formStore,
}: ApplicationFormBuilderProps) => {
  return (
    <div className="p-15">
      <FormStoreConfigBreaker elementId={elementId} formStore={formStore} />
    </div>
  );
};

export default ApplicationFormBuilder;
