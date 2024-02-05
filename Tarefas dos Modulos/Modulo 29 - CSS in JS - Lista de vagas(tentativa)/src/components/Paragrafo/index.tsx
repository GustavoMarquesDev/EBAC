import { ParagrafoTexto } from './styles'

export type Props = {
  fontSize: number
  children: any
  color?: string
}

export const Paragrafo = ({ fontSize, children, color }: Props) => (
  <ParagrafoTexto fontSize={fontSize} color={color}>
    {children}
  </ParagrafoTexto>
)
