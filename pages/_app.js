import { prefix } from "@/config/config";
import { PortfolioProvider } from "@/context/context";

import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider value={prefix}>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
