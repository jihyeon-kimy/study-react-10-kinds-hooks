import { useEffect } from "react";
import { useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //navigator.onLine 웹사이트가 online, offline인지 여부를 T/F로 알려준다.

  const handleChange = () => {
    if (typeof onChange == "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
function CheckNetwork() {
  const handleNetworkChange = (online) =>
    console.log(online ? "We just went online" : "We are offline");
  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
      <h1>useNetwork</h1>
      <p>{onLine ? "Onlin" : "Offline"}</p>
    </>
  );
}

export default CheckNetwork;
