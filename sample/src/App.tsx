import {useState,useEffect} from 'react';
import './App.css';
import { LogOutButton } from './components/LogOutButton';
import { LogInButton } from './components/LogInButton';
import { PrintPlaneTextComponent } from './components/PrintPlaneTextComponent';
import { List } from './components/List';
import { SampleButton } from './components/SampleButton';
import { InputBox } from './components/InputBox';

const LoginControl = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleIsLoggedIn = () => {
    setLoggedIn(!loggedIn);
  }

  if(loggedIn) {
    return <LogOutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  return <LogInButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}

function App() {
  const [text, setText] = useState('Hello');
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    console.log('useEffect');
  },[text]);
  
  return (
    <>
      <LoginControl />
      <PrintPlaneTextComponent text="Hello World" />
      <PrintPlaneTextComponent text="Hello World" isReact />
      <List textList={[
        {id:1,val:"Hello Japan"},
        {id:2,val:"Hello World"},
        {id:3,val:"Hello Uchu"}]} />
      <SampleButton />
      <InputBox textChangeHandler={textChangeHandler}/>
      <p>you type: {text}</p>
    </>
  );
}

export default App;
