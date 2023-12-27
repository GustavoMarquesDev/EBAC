import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 100px;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
