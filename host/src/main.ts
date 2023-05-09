import "./app.postcss";
import { initFederation } from "@softarc/native-federation";

(async () => {
  const response = await fetch("/mfes-config.json");
  const mfesConfig = await response.json();
  console.log("CONFIG:", mfesConfig);

  await initFederation(mfesConfig);

  await import("./bootstrap");
})();
