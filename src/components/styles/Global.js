import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-family: sans-serif;
  color: #042825;
}

#root {
  width: 1200px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

main {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn {
  padding: 1rem;
  border-radius: 30px;
  border: none;
  font-size: 1.5rem;
  background-color: #042825;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 3rem;

  span:last-of-type {
    opacity: 0.6;
  }

  &:hover {
    background-color: rgba(4, 40, 37, 0.75);
  }
}
`;

export default GlobalStyle;
