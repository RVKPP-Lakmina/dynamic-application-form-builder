import React, { useCallback, useEffect, useState } from "react";
import Logger from "../utility/logger";
import {
  FormBuilderProps,
  IntermediateFormBuilderProps,
} from "./interfaces/interfaces";
import ErrorBoundary from "../components/ErrorBoundary";
import { ErrorMessageComponent } from "../components/ErrorMessageComponent";
import MultiStageFormBuilder from "./components/other-components/MultiStageFormBuilder";
import { CircularProgress } from "@mui/material";
import CachingStorage from "./services/cachingStorage";
import FormBuilderApi from "./services/formBuilderApi";

const FormBuilder: React.FC<FormBuilderProps> = ({
  otherParams = {},
}: FormBuilderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<{
    status: boolean;
    message: string;
  }>({} as { status: boolean; message: string });

  useEffect(() => {
    const updateParams = () => {
      const params = new URLSearchParams(window.location.search);
      const formId = params.get("formId");
      const type = params.get("type");
      const dependent = params.get("params") || undefined;

      try {
        if (!formId) throw new Error("Form Id is missing");
        if (!type) throw new Error("Form Type is missing");

        if (dependent) {
          try {
            const decoder = new TextDecoder();
            console.log(decodeURI(dependent));
          } catch (e) {
            console.error(e);
          }
        }

        sessionStorage.setItem("theme", "fancy");
        CachingStorage.set("formId", formId);
        CachingStorage.set("type", type);
      } catch (e) {
        if (e instanceof Error) {
          setErrorState({ status: true, message: e.message });
        }
        Logger.error("form-builder | FormBuilder | Error", e);
      } finally {
        setIsLoading(false);
      }
    };

    updateParams();
    window.addEventListener("popstate", updateParams);

    return () => {
      window.removeEventListener("popstate", updateParams);
    };
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
      <IntermediateFormBuilder otherParams={otherParams} />
    </ErrorBoundary>
  );
};

export default FormBuilder;

const IntermediateFormBuilder: React.FC<IntermediateFormBuilderProps> = ({
  otherParams,
}: IntermediateFormBuilderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formStore, setFormStore] = useState<any>(null);

  const getForms = useCallback(async () => {
    try {
      const formId = CachingStorage.get("formId") as string;
      const type = CachingStorage.get("type") as string;
      const response = await FormBuilderApi.getForms(formId, type);
      setFormStore(response);
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
