import { Titte } from './styles'

export type Props = {
  children: string
  fontSize: number
  color?: string
}

const Titulo = (props: Props) => (
  <Titte fontSize={props.fontSize} color={props.color}>
    {props.children}
  </Titte>
)

export default Titulo
