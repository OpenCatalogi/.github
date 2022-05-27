import { AxiosInstance, AxiosResponse } from "axios";
import { Send } from "../apiService";

export default class Me {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }  

  public getMe = async (): Promise<AxiosResponse> => {
    const { data } = await Send(this._instance, "GET", `/me`);  
    return data;
  };
}
