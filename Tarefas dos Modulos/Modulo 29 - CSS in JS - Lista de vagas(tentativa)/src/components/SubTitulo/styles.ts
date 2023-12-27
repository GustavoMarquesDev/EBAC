import styled from 'styled-components'
import { Props } from '.'

export const Subtitulo = styled.h2<Props>`
  font-size: ${(props) => props.fontSize + 'px'};
  color: ${(props) => props.color};
  margin: 20px 0 5px 0;
`
