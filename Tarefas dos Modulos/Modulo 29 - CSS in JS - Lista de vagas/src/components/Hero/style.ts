import styled from 'styled-components'

export const Formulario = styled.form`
  height: 70vh;
  width: 100%;
  background-image: url('https://cer.sebrae.com.br/wp-content/uploads/2020/05/GettyImages-507065943.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const DivContainer = styled.div`
  position: relative;
  color: #eee;
`
