import logo from "./logo.svg";
import "./App.css";
import WonderPush from "react-wonderpush";

function App() {
  return (
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
      <WonderPush
        options={{
          webKey:
            "23237bfb067e621bdd2f602de10d939117c6cdacbca2b17dc50470483d496b9b",
          applicationName: "Meu teste react",
          notificationDefaultUrl: "wonderpush-test.netlify.app",
          notificationIcon:
            "https://cdn.by.wonderpush.com/upload/01enggtgqhdbfg83/46915f9d02694ed49bfc7a9534947684103dc3fe",
        }}
      >
        <div className="App">Your components here ...</div>
      </WonderPush>
      ;
    </div>
  );
}

export default App;
