import { HandlersParams } from "./helpers/interfaces";

export class UpploadService {
  type = "service";
  name: string = "";
  invisible = false;
  icon: string = "";
  template: () => string = () => "";
  handlers: (params: HandlersParams) => void = () => {};

  /**
   * http://kangax.github.io/compat-table/es5/#test-Object/array_literal_extensions_Reserved_words_as_property_names
   * @param i - CSS class identifier
   */
  class(name: string) {
    return `${(this.name || "1abc9c").toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")}-${name}`;
  }
}