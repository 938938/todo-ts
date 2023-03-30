import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-line-color: #1B1B1E;
    --extra-color: #6D676E;
    --bg-color: #FBFFFE;
    --point-color: #FAA916;
    --point-font-color: #96031A;

    --title: 2rem;
    --default-font: 1rem;
  }

  *{
    /* font-family: 'Nanum Pen Script', cursive; */
    font-family: 'Hahmlet', serif;
    border:0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: 1rem;
    list-style: none;
    color:var(--font-line-color)
  }
  body{
    display: flex;
    justify-content: center;
    padding:30px;
    background-color: var(--bg-color);
  }
`;

export default GlobalStyle;
