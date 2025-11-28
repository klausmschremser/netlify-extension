// src/index.ts
import { NetlifyExtension } from "@netlify/sdk";

const extension = new NetlifyExtension();

// Register edge functions to be injected into consuming sites
extension.addEdgeFunctions("./src/edge-functions", {
  // This prefix is used when Netlify copies edge functions into the site.
  // The final function name will look like: otterlyai_agentic_analytics-agentic-analytics
  prefix: "otterlyai_agentic_analytics",
});

export { extension };