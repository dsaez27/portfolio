import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #999;
      border-radius: 10px;
      transition: 0.3s;
      &:hover {
        background: #666;
      }
    }
}

body { 
    background: #23263A;
}

h1, h2, h3, h4, h5, h6 {
  color: #f44653;
  margin: 0.5rem 0;
  line-height: 1.2;
  font-weight: bold;
}

h1{
  font-size: 3rem;
}

h2{
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    background-color: #ff4a57;
    height: 3px;
    margin: 5px;
    width: 75px;
  }
}

p {
    color: #777;
    font-size: 1rem;
    padding: 2rem 0;
}

button, input, textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    outline: none;
    border-radius: 3px;
}


button{
  color: #fff;
  background: #ff4a57;
  border: none;
  cursor: pointer;
  height: 3rem;
  margin: 1rem 0px;
  width: 10rem;

  &:hover {
    background: #cc3b44;
    transition: 0.3s;
  }
}
`;
