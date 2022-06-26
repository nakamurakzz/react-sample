type Props = {
  toggleIsLoggedIn: () => void;
}

export const LogOutButton = ({toggleIsLoggedIn}:Props) => (
    <button onClick={toggleIsLoggedIn}>LogOut</button>
  );