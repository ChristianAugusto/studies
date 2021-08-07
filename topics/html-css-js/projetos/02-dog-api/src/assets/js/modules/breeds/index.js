
import buildFakeSelect from "./buildFakeSelect";
import actionsFakeSelect from "./actionsFakeSelect";

export default {
  init() {
    actionsFakeSelect();
  },
  async build() {
    await buildFakeSelect();
  }
};