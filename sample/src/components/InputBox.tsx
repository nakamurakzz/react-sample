import { useState } from "react";

type Props = {
  textChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({textChangeHandler}:Props) => {
  const [name,setName]=useState({
    firstName:'',
    lastName:''
  })
  const setLastNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({
      ...name,
      lastName:e.target.value
    })
  }

  const setFirstNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({
      ...name,
      firstName:e.target.value
    })
  }

  return (
    <>
      <p>type your name:</p>
      <p>
        firstName: <input type="text" defaultValue="" onChange={setFirstNameHandler}></input>
      </p>
      <p>
        LastName: <input type="text" defaultValue="" onChange={setLastNameHandler}></input>
      </p>
      <p>{name.firstName} {name.lastName}</p>
      <p>
        <input type="text" defaultValue="" onChange={textChangeHandler}></input>
      </p>
    </>
  );
}