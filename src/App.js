import "./App.css";
import { WonderPush } from "react-wonderpush";
import SwitchButton from "./components/SwitchButton";
import EventList from "./components/EventList";
import OneSignal, { useOneSignalSetup } from "react-onesignal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function test() {
      try {
        OneSignal.initialize("0d0a98a9-0841-4d73-8098-4ee7e65f8b9a", {
          requiresUserPrivacyConsent: true,
          autoResubscribe: false,
          notifyButton: {
            enable: true,
          },
        });
      } catch (error) {
        console.log("App -> error", error);
      }
    }
    test();
  }, []);

  useOneSignalSetup(() => {
    OneSignal.setEmail("teste@gmail.com");
    OneSignal.setExternalUserId("121323");
  });
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
