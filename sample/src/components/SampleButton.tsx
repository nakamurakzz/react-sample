export const SampleButton = () => {
  return (
    <input type="button" value="button" onClick={samplerChange}></input>
  );
}

const samplerChange = (e:any)=>{
  console.log(e.target.value);
}