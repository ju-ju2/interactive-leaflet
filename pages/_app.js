import { PortfolioProvider } from "@/context/context";
import { prefix } from "@/config/config";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}
