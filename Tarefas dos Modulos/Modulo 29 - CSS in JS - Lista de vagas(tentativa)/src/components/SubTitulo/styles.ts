import styled from 'styled-components'
import { Props } from '.'

export const Subtitulo = styled.h2<Props>`
  font-size: ${(props) => props.fontSize + 'px'};
  color: ${(props) => props.color};
  margin: 20px 0 15px 0;
  text-align: center;
  font-weight: normal;
`
export const Span = styled.span<Props>`
  font-size: ${(props) => props.fontSize + 'px'};
  color: ${(props) => props.color};
  font-weight: bold;
`
