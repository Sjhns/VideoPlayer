import type { AppProps } from "next/app";
import GlobalStyle from "../global/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
