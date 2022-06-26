type Props = {
  text:string,
  isReact?:boolean,
}

export const PrintPlaneTextComponent = ({text,isReact}:Props) => (
  <p>
    {text}. {isReact? "React": "Not React"}
  </p>
)