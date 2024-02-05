import styled from 'styled-components'
import { Props } from '.'

export const ParagrafoTexto = styled.p<Props>`
  font-size: ${(props) => props.fontSize + 'px' || '20px'};
  color: ${(props) => props.color || '#fff'};
  margin-top: 5px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`
