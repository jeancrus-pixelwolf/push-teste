import "./App.css";
import { WonderPush } from "react-wonderpush";
import SwitchButton from "./components/SwitchButton";
import EventList from "./components/EventList";

function App() {
  return (
    <WonderPush
      options={{
        webKey:
          "23237bfb067e621bdd2f602de10d939117c6cdacbca2b17dc50470483d496b9b",
        applicationName: "Teste push",
        notificationDefaultUrl: "https://wonderpush-test.netlify.app",
        notificationIcon: "../logo512.png",
      }}
    >
      <div className="App">
        <h1>Connecting to wonderpush</h1>
        <SwitchButton />
        <EventList />
      </div>
    </WonderPush>
  );
}

export default App;
