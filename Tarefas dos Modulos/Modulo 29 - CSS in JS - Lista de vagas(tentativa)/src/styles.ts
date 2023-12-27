import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`



*,html,body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style:none;
  font-family: sans-serif;


  body {
    background-color: #eee;
    padding-bottom: 80px;
  }

}

`

export const DivPrincipal = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`
