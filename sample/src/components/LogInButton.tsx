type Props = {
  toggleIsLoggedIn: () => void;
}

export const LogInButton = ({toggleIsLoggedIn}:Props) => {
  return (
    <button onClick={toggleIsLoggedIn}>LogIn</button>
  );
}