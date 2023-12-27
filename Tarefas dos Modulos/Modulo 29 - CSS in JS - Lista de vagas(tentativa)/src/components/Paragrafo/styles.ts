import styled from 'styled-components'
import { Props } from '.'

export const ParagrafoTexto = styled.p<Props>`
  font-size: ${(props) => props.fontSize + 'px' || '20px'};
  color: ${(props) => props.color || '#fff'};
`
