export const waitForTextChanged = (element, text, timeout = 5000) => {
  return browser.waitUntil(() => element.getText() === text, { timeout });
};
