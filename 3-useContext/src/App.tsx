import { LoginProvider } from "./context/LoginContext";
import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <LoginProvider>
      <MainComponent />
    </LoginProvider>
  );
}
