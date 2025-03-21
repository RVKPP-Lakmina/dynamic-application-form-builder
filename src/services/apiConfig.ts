import axios from "axios";

export default class API {
  private baseUrl =
    import.meta.env.VITE_APP_BASE_URL || "http://localhost:3000";
  private headers = {
    "Content-Type": "application/json",
  };
  private apiInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }

  public static get apiConfigIntance() {
    return new API();
  }

  get = async <T>(url: string): Promise<T> => {
    const response = await this.apiInstance.get<T>(url);
    return response.data;
  };

  post = async <T, U>(url: string, data: U): Promise<T> => {
    const response = await this.apiInstance.post<T>(url, data);
    return response.data;
  };
}
