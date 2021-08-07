
/* BUILD MODULES */
import buildColorSelector from "./build/colorSelector";
import buildFontSelector from "./build/fontSelector";

/* ACTIONS MODULES */
import colorsSelector from "./actions/colorsSelector";
import fontsSelector from "./actions/fontsSelector";
import dogNameInput from "./actions/dogNameInput";
import watchSteps from "./actions/watchSteps";
import save from "./actions/save";

export default {
  init() {
    colorsSelector();
    fontsSelector();
    dogNameInput();
    watchSteps();
    save();
  },
  build() {
    buildColorSelector();
    buildFontSelector();
  }
};