
import fn_ajax from "./ajax.js";
import fn_buildShelf from "./build_shelf.js";

export default {
   init: function() {
      fn_ajax(fn_buildShelf);
   }
};