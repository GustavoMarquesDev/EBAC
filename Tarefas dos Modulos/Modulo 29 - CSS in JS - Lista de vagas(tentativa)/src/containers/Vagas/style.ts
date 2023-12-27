import styled from 'styled-components'

export const VagasContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
`
export const UlContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 65px;
  row-gap: 0;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
