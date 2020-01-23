export function changeValue(event) {
  return {
    type: "VALUE_CHANGED",
    payload: event.target.value // Dado que vem junto de uma ação
  }
}