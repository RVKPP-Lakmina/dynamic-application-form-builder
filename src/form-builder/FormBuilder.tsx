import React, { useCallback, useEffect, useRef, useState } from "react";
import Logger from "../utility/logger";
import {
  FormBuilderProps,
  FormMeta,
  IntermediateFormBuilderProps,
} from "./interfaces/interfaces";
import ErrorBoundary from "../components/ErrorBoundary";
import { ErrorMessageComponent } from "../components/ErrorMessageComponent";
import MultiStageFormBuilder from "./components/other-components/MultiStageFormBuilder";
import { rdbApplication } from "../services/configs";
import { CircularProgress } from "@mui/material";

const FormBuilder: React.FC<FormBuilderProps> = ({
  otherParams = {},
}: FormBuilderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<{
    status: boolean;
    message: string;
  }>({} as { status: boolean; message: string });
  const formMeta = useRef<FormMeta>({} as FormMeta);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    try {
      if (!params.has("formId")) {
        throw new Error("Form Id is missing");
      }

      if (!params.has("type")) {
        throw new Error("Form Type is missing");
      }
      sessionStorage.setItem("theme", "fancy");
      formMeta.current.formId = params.get("formId") as string;
      formMeta.current.type = params.get("type") as string;
    } catch (e: unknown | { message: string }) {
      if (e instanceof Error) {
        setErrorState({ status: true, message: e.message });
      }
      Logger.error("form-builder | FormBuilder | Error", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (errorState.status) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <ErrorMessageComponent
          headMessage={"ERROR"}
          errorMessage={errorState.message}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <CircularProgress size={30} />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <IntermediateFormBuilder formMeta={formMeta} otherParams={otherParams} />
    </ErrorBoundary>
  );
};

export default FormBuilder;

const IntermediateFormBuilder: React.FC<IntermediateFormBuilderProps> = ({
  formMeta,
  otherParams,
}: IntermediateFormBuilderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formStore, setFormStore] = useState<any>(null);

  const getForms = useCallback(async () => {
    try {
      const formId = formMeta.current?.formId;
      console.log("formId", formId);
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
  }, [formMeta]);

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
