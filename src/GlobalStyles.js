import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf")) format("truetype");
}
@font-face {
  font-family: "Caveat";
  src: local("Caveat"),
    url(("../assets/fonts/Caveat_Brush/CaveatBrush-Regular.ttf"))
      format("truetype");
}

h1, h2, h3, h4 , h5 ,h6{
  margin: 0;
}

span, p, a{
  margin: 0;
}

ul, nav{
  padding: 0;
  list-style: none;
}

img{
    display: block;
}
`;
