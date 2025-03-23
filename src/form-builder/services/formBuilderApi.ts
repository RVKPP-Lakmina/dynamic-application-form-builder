/* eslint-disable @typescript-eslint/no-unused-vars */
import API from "../../services/apiConfig";

// @ts-nocheck
export default class FormBuilderApi {
  private api = API.apiConfigIntance;

  private static get instance() {
    return new FormBuilderApi();
  }

  public static getForms = async (_formId: string) => {
    const { api } = this.instance;
    return api.get("/forms");
  };
}
