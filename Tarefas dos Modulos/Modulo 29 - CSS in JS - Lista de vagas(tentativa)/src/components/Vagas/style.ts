import styled from 'styled-components'

export const VagasContainer = styled.div`
  max-width: 1024px;
  border: 1px solid #0b7285;
  margin-top: 80px;
  padding: 50px 40px;
  border-radius: 15px;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.5s;

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
  padding: 10px;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #1098ad;
    transition: all 0.5s ease;
  }
`
