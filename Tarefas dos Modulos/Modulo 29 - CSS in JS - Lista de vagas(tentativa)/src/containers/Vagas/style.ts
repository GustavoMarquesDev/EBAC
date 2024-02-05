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

export const VagasContainerCard = styled.div`
  max-width: 1024px;
  border: 1px solid #0b7285;
  margin-top: 80px;
  padding: 50px 40px;
  border-radius: 15px;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.5s;
  position: relative;
  min-height: 500px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.04);
    transform: translateY(-10px);
  }
`
export const TituloCard = styled.h2`
  color: #0b7285;
  margin-bottom: 20px;
`

export const Botao = styled.button`
  background-color: #0b7285;
  color: #fff;
  padding: 15px;
  max-width: 100%;
  font-size: 18px;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  bottom: 15px;
  left: 25%;

  &:hover {
    background-color: #1098ad;
    transition: all 0.5s ease;
  }
`
export const SemVagas = styled(TituloCard)`
  margin-top: 60px;
  text-align: center;
`
