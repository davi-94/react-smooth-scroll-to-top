import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: left;
    line-height: 1.5;
    color: #44344F;
    background-color: #FFFFFF;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    color: #564D80;
    transition: all .15s ease-in-out;

    :hover {
      color: #44344F;
    }
  }
  
  .box {
    height: 550px;
    padding: 60px;
  }

  .item-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #C2F970;
  }

  .item-2 {
    background-color: #44344F;
  }

  .item-3 {
    background-color: #564D80;
  }
`;
