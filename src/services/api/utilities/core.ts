import { ApiOptions } from "../../model/apiOptions";
import { apiProvider } from "./provider";

export class ApiCore {
  getAll?: () => Promise<any>;
  getOne?: (id: string) => Promise<any>;
  post?: (model: any) => Promise<any>;
  put?: (model: any) => Promise<any>;
  remove?: (id: string) => Promise<any>;

  constructor(options: ApiOptions) {
    if (options.getAll) {
      this.getAll = () => {
        return apiProvider.getAll(options.url!);
      };
    }

    if (options.getOne) {
      this.getOne = (id: string) => {
        return apiProvider.getOne(options.url!, id);
      };
    }

    if (options.post) {
      this.post = (model: any) => {
        return apiProvider.post(options.url!, model);
      };
    }

    if (options.put) {
      this.put = (model: any) => {
        return apiProvider.put(options.url!, model);
      };
    }

    if (options.remove) {
      this.remove = (id: string) => {
        return apiProvider.remove(options.url!, id);
      };
    }
  }
}
