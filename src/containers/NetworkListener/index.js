import React, { useEffect, useState } from 'react';

const withNetworkListener = WrappedComponent => {
  const handleNetworkChange = status => {
    console.log('Is online: ', status);
  };

  const mountListeners = setNetworkStatus => {
    const online = window.addEventListener('online', () => {
      handleNetworkChange(true);
      setNetworkStatus(true);
    });
    const offline = window.addEventListener('offline', () => {
      handleNetworkChange(false);
      setNetworkStatus(false);
    });

    return { online, offline };
  };

  const unmountListeners = (online, offline) => {
    window.removeEventListener('online', online);
    window.removeEventListener('offline', offline);
  };

  const ContainerComponent = props => {
    const [isOnline, setNetworkStatus] = useState(navigator.onLine);
    useEffect(() => {
      const { online, offline } = mountListeners(setNetworkStatus);

      return () => unmountListeners(online, offline);
    }, [setNetworkStatus]);

    return <WrappedComponent isOnline={isOnline} props={props} />;
  };

  return ContainerComponent;
};

export default withNetworkListener;
