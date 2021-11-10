import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    
    font-family: 'Open Sans', sans-serif;
}

body { 
    background: #23263A;
}

button, input, textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    outline: none;
    border-radius: 3px;
}

p {
    color: #999;
    font-size: 1rem;
    padding: 2rem 0;
}

button{
  border: none;
  background: #ff4a57;
  cursor: pointer;
  margin: 1rem 0px;
  color: #fff;

  &:hover {
    background: #cc3b44;
    transition: 0.3s;
  }
}

h1{
  color: #f44653;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0.5rem 0;

  &::after {
    content: "";
    display: block;
    background-color: #ff4a57;
    height: 3px;
    margin: 5px;
    width: 75px;
  }
}
`;
