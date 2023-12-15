import { useLogin } from "../context/LoginContext";
import SinglePost from "./SinglePost";

interface MainComponentUtils {
  email: string;
}

export default function MainComponent() {
  const { email } = useLogin() as MainComponentUtils;

  return (
    <div>
      <b>Email from MainComponent is {email}.</b>
      <SinglePost />
    </div>
  );
}
