import { ParagrafoTexto } from './styles'

export type Props = {
  fontSize: number
  children: string
  color?: string
}

export const Paragrafo = ({ fontSize, children, color }: Props) => (
  <ParagrafoTexto fontSize={fontSize} color={color}>
    {children}
  </ParagrafoTexto>
)
