import styled from 'styled-components'

export const HeroBanner = styled.form`
  height: 70vh;
  width: 100%;
  background-image: url('https://cer.sebrae.com.br/wp-content/uploads/2020/05/GettyImages-507065943.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    height: 50vh;
  }
`

export const InputForm = styled.input`
  font-family: sans-serif;
  font-size: 25px;
  height: 51px;
  width: 600px;
  padding: 10px;

  @media (max-width: 800px) {
    width: 500px;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  @media (max-width: 540px) {
    width: 350px;
  }
`
export const ButtonForm = styled.button`
  width: 200px;
  color: black;
  background-color: #0b7285;
  margin-left: 5px;
  padding: 10px;
  font-size: 25px;
  border: 1px solid #0b7285;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #1098ad;
    transition: all 0.5s ease;
  }

  @media (max-width: 800px) {
    width: 500px;
    font-size: 20px;
    text-align: center;
    margin-left: 0;
  }
  @media (max-width: 540px) {
    width: 350px;
  }
`

export const FormContainer = styled.form`
  color: #eee;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
