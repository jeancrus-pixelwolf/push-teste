import logo from "./logo.svg";
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
        applicationName: "Meu teste react",
        notificationDefaultUrl: "wonderpush-test.netlify.app",
        notificationIcon: "../logo512.png",
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <h1>Connecting to wonderpush</h1>
      <SwitchButton />
      <EventList />
    </WonderPush>
  );
}

export default App;
