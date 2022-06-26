type Props = {
  textList:{id:number,val:string}[],
}

export const List = ({textList}:Props) => (
  <ul>
    {textList.map((text,index) => (
      <li key={text.id}>{text.val}</li>
    ))}
  </ul>
)