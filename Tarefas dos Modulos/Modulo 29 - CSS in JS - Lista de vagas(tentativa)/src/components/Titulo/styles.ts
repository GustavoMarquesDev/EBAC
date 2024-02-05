import styled from 'styled-components'
import { Props } from '.'

export const Titte = styled.h1<Props>`
  font-size: ${(props) => props.fontSize + 'px' || '32px'};
  color: ${(props) => props.color || '#FFF'};
  text-align: center;
`
