import fs from "fs";
import { resolve } from "path";

export default function copyJs() {
  return {
    name: "copy-js",
    closeBundle(options, bundle) {
      fs.copyFileSync(
        resolve(__dirname, "./dist/index.umd.cjs"),
        resolve(__dirname, "./dist/index.js")
      );
      fs.unlink(resolve(__dirname, "./dist/index.umd.cjs"), () => {});
    },
  };
}
