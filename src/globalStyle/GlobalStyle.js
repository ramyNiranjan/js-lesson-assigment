import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   *{
     box-sizing: border-box;
     margin: 0;
    padding: 0;
   }
   ::before,
   ::after {
   box-sizing: border-box;
    }

   a {
   text-decoration: none;
   color: #fff;
  }
  li {
   list-style: none;
   margin-left:8px;
  }

  html {
  font-size: 12px;
  
   }
  body {
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap");
    
    /* display:flex;
    justify-content:center;
    align-items:center; */
    background: #B5D1CF;
    color: #000;
    font-family: "Poppins", sans-serif;
    transition: all 0.50s linear;
    min-height:100vh;
  }
  `;
