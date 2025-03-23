/* eslint-disable @typescript-eslint/no-unused-vars */
import API from "../../services/apiConfig";
import endpoints from "./endpoints";

// @ts-nocheck
export default class FormBuilderApi {
  private api = API.apiConfigIntance;
  private enpoints = endpoints();

  private static get instance() {
    return new FormBuilderApi();
  }

  public static getForms = async (formId: string) => {
    const { api, enpoints } = this.instance;
    return api.get("/forms");
  };
}
