import { useLogin } from "../context/LoginContext";

export default function SinglePost() {
  const { password } = useLogin()!;

  return (
    <div>
      <b>Password from SinglePost is {password}.</b>
    </div>
  );
}
