import axios, { AxiosResponse } from "axios";
import { handleResponse, handleError } from "./response";

const BASE_URL = process.env.REACT_APP_API_URL;
async function getAll(resource: string): Promise<AxiosResponse> {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
}

async function getOne(resource: string, id: string): Promise<AxiosResponse> {
  console.log(`${BASE_URL}/${resource}/${id}`);
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
}

async function post<T>(resource: string, model: T): Promise<AxiosResponse> {
  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
}
async function put<T>(
  resource: string,
  model: T,
  id: string
): Promise<AxiosResponse> {
  return axios
    .put(`${BASE_URL}/${resource}/${id}`, model)
    .then(handleResponse)
    .catch(handleError);
}

async function remove(resource: string, id: string): Promise<AxiosResponse> {
  return axios
    .delete(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
}

async function removeMultiple(
  resource: string,
  ids: string[]
): Promise<AxiosResponse> {
  // more comment
  return axios
    .delete(`${BASE_URL}/${resource}`, { data: { ids } })
    .then(handleResponse)
    .catch(handleError);
}

export const apiProvider = {
  getAll,
  getOne,
  post,
  put,
  remove,
  removeMultiple,
};
