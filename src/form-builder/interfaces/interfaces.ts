/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormBuilderProps {
  otherParams?: Record<string, unknown>;
}

export type FormStatus = "success" | "error" | "pending";

export type UpdateParams<T, K extends string, V> = Omit<T, K> & Record<K, V>;

export type E = {
  params?: {
    digits?: number;
  };
  currentTarget: {
    value: string;
  };
  target: {
    value: string | number;
    maxLength?: number;
    max?: string;
  };
};

export type FormMeta = { formId: string; type: string };
export interface IntermediateFormBuilderProps {
  otherParams: Record<string, unknown>;
}

export interface MultiStageFormBuilderContextProps {
  formId: string;
  otherParams: Record<string, unknown>;
  useHandleOnNext: (
    metaData: FormStore,
    sectionDataKey: string
  ) => {
    handleValidation: () => void;
    onNext: () => void;
    expanded: string | false;
    onExpand: (
      panel: string
    ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
    onChangeValueHandler: (payload: any) => void;
    value: any;
    pencilClick: () => void;
  };
  showAllErrors: (
    isForCurrSection?: boolean,
    section?: string
  ) => string[] | Record<string, string[]>;
}

export type WidgetParams = {
  onChangeValueHandler: (payload: any) => void;
  value: any;
};
export interface WidgetMapProps {
  elementId: string;
  formStore: FormStore;
  params: WidgetParams;
}

export interface MultiStageFormBuilderProps {
  otherParams: Record<string, unknown>;
  formStore: FormStore;
}

// type AllowedTypesOfSectionState =
//   | string
//   | number
//   | boolean
//   | Record<string, unknown>
//   | unknown[];

// Define State Type
export type SectionState = Record<string, any>;

// Define Action Types
export type Action =
  | { type: "UPDATE_SECTION"; section: string; payload: any }
  | { type: "DELETE_SECTION"; section: string }
  | { type: "RESET_STORE" };

export type FormatterRule =
  | "ALPHABETIC"
  | "ALPHABETIC_AND_UPPERCASE"
  | "ALPHANUMERIC"
  | "ALPHANUMERIC_AND_SYMBOLS"
  | "YEAR"
  | "NUMBER_AND_UPPERCASE"
  | "OLD_NIC"
  | "NEW_NIC"
  | "Generic"
  | "NO_FORMATTER"
  | "CURRENCY";
export interface DependencyManagement {
  visibility?: Record<string, string>;
  mandatory?: Record<string, string>;
}

export type FormStore = {
  title: string;
  type: string;
  children: FormStore[];
  dataKey: string;
  render: {
    visibleInForm?: boolean;
    required?: boolean;
    visibleInPreview?: boolean;
  };
  dependencyManagement?: DependencyManagement;
  inputOptions?: {
    formatter: string;
    type?: string;
    formatterRule?: FormatterRule;
  };
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
