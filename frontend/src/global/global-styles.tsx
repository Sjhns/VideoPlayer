import { createGlobalStyle } from "styled-components";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${poppins.style.fontFamily};
  }

  html {
    font-size: 62.5%;
  }

  body{
    background-color: #181a20;
    color: #ffffff;
  }
`;

export default GlobalStyle;
