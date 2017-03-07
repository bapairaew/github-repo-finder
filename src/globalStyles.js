import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body,
  #app {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }
`;
