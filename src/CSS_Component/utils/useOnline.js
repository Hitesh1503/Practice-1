import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    /*Without return, the effect keeps running and can cause memory leaks or duplicate behaviors.*/
    return () => {
      window.removeEventListener("online", handleOnline); // Cleanup before next effect or unmount
      window.removeEventListener("offline", handleOffline); // Cleanup before next effect or unmount
    };
  }, []);

  return online;
};

export default useOnline;
