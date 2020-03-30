import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync<T> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    return id
      ? axios.put(`${this.rootUrl}/${id}`, data)
      : axios.post(this.rootUrl, data);
  }
}
