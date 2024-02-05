import { Subtitulo } from './styles'

export type Props = {
  fontSize: number
  children: any
  color: string
}

const Subtitle = (props: Props) => (
  <Subtitulo fontSize={props.fontSize} color={props.color}>
    {props.children}
  </Subtitulo>
)

export default Subtitle
