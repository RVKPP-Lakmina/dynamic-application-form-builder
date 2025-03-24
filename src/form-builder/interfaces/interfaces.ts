/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormBuilderProps {
  formId: string;
  otherParams?: Record<string, unknown>;
}

export interface IntermediateFormBuilderProps {
  formId: string;
  otherParams: Record<string, unknown>;
}

export interface MultiStageFormBuilderContextProps {
  formId: string;
  otherParams: Record<string, unknown>;
  useHandleOnNext: () => {
    handleValidation: () => void;
    onNext: () => void;
    expanded: string | false;
    onExpand: (
      panel: string
    ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    onChangeValueHandler: (payload: any) => void;
    value: any;
  };
}

export interface MultiStageFormBuilderProps {
  otherParams: Record<string, unknown>;
  formStore: FormStore;
}

// Define State Type
export type SectionState = Record<string, any>;

// Define Action Types
export type Action =
  | { type: "UPDATE_SECTION"; section: string; payload: any }
  | { type: "DELETE_SECTION"; section: string }
  | { type: "RESET_STORE" };

export type FormStore = {
  title: string;
  type: string;
  children: FormStore[];
  dataKey: string;
  inputOptions?: { formatter: string; type: string };
};
export interface MetaDataProps {
  metaData: FormStore;
}

export type ThemeVariants = "general" | "normal" | "fancy";
export interface ThemedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: ThemeVariants;
  label?: string;
  labelClassName?: string;
}
