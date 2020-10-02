import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
html{
    width:100%;
    height: 100%;
    scroll-behavior: smooth !important;
}
::selection {
  background: rgb(209, 158, 209);
}
/* html > * {
    font-family: 'felix';
} */
*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing: border-box;
    /* color:black; */
}
`;

export default GlobalStyle
