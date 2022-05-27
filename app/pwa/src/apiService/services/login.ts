import { AxiosInstance, AxiosResponse } from "axios";

type IUser = {
  username: string;
  password: string;
}

export default class Login {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }
  

  public login = (data: IUser): Promise<AxiosResponse> => {
    return this._instance.post("/users/login", JSON.stringify(data));
  };
}
