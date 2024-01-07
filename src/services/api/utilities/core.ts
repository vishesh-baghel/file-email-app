import { ApiOptions } from "../../model/apiOptions";
import { apiProvider } from "./provider";
import { Email } from "../../model/email";

/**
 * Testing more files this time with bug commits
 */
// more comment
export class ApiCore {
  getAll?: () => Promise<any>;
  getOne?: (id: string) => Promise<any>;
  post?: (model: Email) => Promise<any>;
  put?: (model: any, id: string) => Promise<any>;
  remove?: (id: string) => Promise<any>;
  removeMultiple?: (ids: string[]) => Promise<any>;

  constructor(options: ApiOptions) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url!);
      };
    }

    if (options.getOne) {
      this.getOne = (id) => {
        return apiProvider.getOne(options.url!, id);
      };
    }

    if (options.post) {
      this.post = (model: any) => {
        return apiProvider.post(options.url!, model);
      };
    }

    if (options.put) {
      this.put = (model: any, id: string) => {
        return apiProvider.put(options.url!, model, id);
      };
    }

    if (options.remove) {
      this.remove = (id: string) => {
        return apiProvider.remove(options.url!, id);
      };
    }

    if (options.removeMultiple) {
      this.removeMultiple = (ids: string[]) => {
        return apiProvider.removeMultiple(options.url!, ids);
      };
    }
  }
}
