import { createGlobalStyle } from 'styled-components';

const theme = {
    bpSmall: '48em', // 768px
    bpMedium: '64em', // 1024px
    bpLarge: '85.375em', // 1366px
    bpXlarge: '120em', // 1920px
    bpXxlarge: '160em', // 2560px

    mqSmall: '(min-width: #{$bpSmall})',
    mqMedium: '(min-width: #{$bp-medium})',
    mqLarge: '(min-width: #{$bp-large})',
    mqXlarge: '(min-width: #{$bp-xlarge})',
    mqXxlarge: '(min-width: #{$bp-xxlarge})',
    mqRetina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',

    primaryColor: '#f44653',
    secondaryColor: '#23263A',
    tertiaryColor: '#212437',
    whiteColor: '#fff',
};

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
    background: ${theme.secondaryColor};
}

h1, h2, h3, h4, h5, h6 {
  color: ${theme.primaryColor};
}

h1{
  font-size: 3rem;
}

h2{
  font-size: 2rem;

  &::after {
    content: "";
    display: block;
    background-color: ${theme.primaryColor};
    height: 3px;
    width: 10%;
  }
}

p {
    color: ${theme.whiteColor};
    font-size: 12px;
    padding: 1rem;
    font-weight: 300;
}

button, input, textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    outline: none;
    border-radius: 3px;
    font-weight: 300;
}


button{
  color: $quaternary-color;
  background: #ff4a57;
  border: none;
  cursor: pointer;
  height: 3rem;
  margin: 1rem 0px;
  width: 10rem;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #872c33;
    transition: 0.3s;
  }
}
`;
