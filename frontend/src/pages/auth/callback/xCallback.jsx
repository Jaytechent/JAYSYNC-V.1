
import { useEffect } from 'react';

const TwitterCallback = () => {
  useEffect(() => {
    // Here, the backend callback logic confirms Twitter authentication
    const isAuthSuccessful = true; // or get the actual result from the URL or backend

    // Send the result back to the opener (main window)
    if (isAuthSuccessful) {
      window.opener.postMessage("twitter-auth-success", window.location.origin);
    } else {
      window.opener.postMessage("twitter-auth-failed", window.location.origin);
    }

    window.close(); // Close the popup
  }, []);

  return null;
};

export default TwitterCallback;
