
export default {
  fn_lockBody: () => {
    document.querySelector("body").classList.add("ch-is-locked");
  },
  fn_unlockBody: () => {
    document.querySelector("body").classList.remove("ch-is-locked");
  }
}