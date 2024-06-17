import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div className="App">
      {isOnline ? (
        <div>React Todo</div>
      ) : (
        <div>No Network. You are viewing offline content.</div>
      )}
    </div>
  );
}

export default App;
