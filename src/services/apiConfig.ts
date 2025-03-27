import axios from "axios";

export default class API {
  private baseUrl: string =
    import.meta.env.VITE_APP_BASE_URL || "http://localhost:3000";
  private headers = {
    "Content-Type": "application/json",
  };
  private apiInstance;

  constructor(baseUrl?: string) {
    this.apiInstance = axios.create({
      baseURL: baseUrl || this.baseUrl,
      headers: this.headers,
    });
  }

  public static getApiConfigIntance(baseUrl?: string) {
    return new API(baseUrl);
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
