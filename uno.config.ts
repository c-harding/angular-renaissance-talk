import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    [/^list-minus$/, () => ({ "list-style-type": '"\u2212" !important' })],
    [/^list-plus$/, () => ({ "list-style-type": '"+" !important' })],
  ],
});
