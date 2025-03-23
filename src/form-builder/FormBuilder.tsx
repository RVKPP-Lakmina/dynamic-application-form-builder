import React, { useCallback, useEffect, useState } from "react";
import Logger from "../utility/logger";
import {
  FormBuilderProps,
  IntermediateFormBuilderProps,
} from "./interfaces/interfaces";
import ErrorBoundary from "../components/ErrorBoundary";
import { ErrorMessageComponent } from "../components/ErrorMessageComponent";
import MultiStageFormBuilder from "./components/other-components/MultiStageFormBuilder";
import { rdbApplication } from "../services/configs";

const FormBuilder: React.FC<FormBuilderProps> = ({
  formId,
  otherParams = {},
}: FormBuilderProps) => {
  return (
    <ErrorBoundary>
      <IntermediateFormBuilder formId={formId} otherParams={otherParams} />
    </ErrorBoundary>
  );
};

export default FormBuilder;

const IntermediateFormBuilder: React.FC<IntermediateFormBuilderProps> = ({
  // formId,
  otherParams,
}: IntermediateFormBuilderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formStore, setFormStore] = useState<any>(null);

  const getForms = useCallback(async () => {
    try {
      // const forms = await FormBuilderApi.getForms(formId);
      const forms = rdbApplication;
      setFormStore(forms);
    } catch (error) {
      Logger.error(
        "form-builder | IntermediateFormBuilder | Error while fetching forms",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getForms();
  }, [getForms]);

  if (isLoading) {
    return <></>;
  }

  if (Object.keys(formStore).length === 0) {
    return (
      <ErrorMessageComponent
        headMessage={"ERROR"}
        errorMessage={"Error On Fetching Data"}
      />
    );
  }

  if (formStore?.children.length === 0) {
    return (
      <ErrorMessageComponent
        headMessage={"ERROR"}
        errorMessage={"Error On Fetching Data"}
      />
    );
  }

  return (
    <MultiStageFormBuilder formStore={formStore} otherParams={otherParams} />
  );
};
