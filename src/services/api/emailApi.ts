import { ApiCore } from "./utilities/core";

const url = "emails";

const emailApi = new ApiCore({
  getAll: true,
  getOne: true,
  post: true,
  put: true,
  remove: true,
  removeMultiple: true,
  url: url,
});

export default emailApi;
