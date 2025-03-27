import API from "../../services/apiConfig";
import { persistenceEndpoints } from "./endpoints";

// @ts-nocheck
export default class FormBuilderApi {
  private baseUrl: string = "http://xgendev.ddns.net:100";
  private api = API.getApiConfigIntance(this.baseUrl);
  private endpoints: Record<string, string> = persistenceEndpoints();

  private static get instance() {
    return new FormBuilderApi();
  }

  public static getForms = async (_formId: string, type: string) => {
    const { api, endpoints } = this.instance;

    const response = await api.get(
      `${endpoints.form}/${type}?dataKey=${_formId}`
    );

    return response;
  };
}
