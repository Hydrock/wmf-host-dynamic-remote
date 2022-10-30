import React from "react";

/**
 * Данный hook создает тег script на html для загрузки wmf манифеста с remote сервера
 * @param {String} remoteUrl - адрес remote манифеста
 * @returns 
 */
export const useDynamicScript = (remoteUrl) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!remoteUrl) {
      return;
    }

    const element = document.createElement("script");

    element.src = remoteUrl;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${remoteUrl}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${remoteUrl}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${remoteUrl}`);
      document.head.removeChild(element);
    };
  }, [remoteUrl]);

  return {
    ready,
    failed
  };
};
