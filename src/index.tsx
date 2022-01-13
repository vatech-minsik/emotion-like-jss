import React from "react";
import ReactDOM from "react-dom";
import theme from "./theme/theme";
import rtlStylis from "stylis-plugin-rtl";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "./index.css";
import App from "./App";

let cacheRtl: EmotionCache = createCache({
  key: "rtl",
  // stylisPlugins: [rtlStylis],
});

ReactDOM.render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </CacheProvider>,
  document.getElementById("root")
);
