const signInWithFacebook = () => {
  return new Promise((resolve, reject) => {
    const email = localStorage.getItem("email");

    if (!email) {
      console.error("User email not found in localStorage");
      reject(false);
      return;
    }

    fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/facebook?email=${encodeURIComponent(email)}`)
      .then(response => response.json())
      .then(data => {
        const { authUrl } = data;

        if (!authUrl) {
          console.error("Missing authentication URL from backend");
          reject(false);
          return;
        }

        // Open the Facebook auth URL in a popup
        const popup = window.open(authUrl, "facebookAuth", "width=500,height=600");

        // Listen for the authentication message from the popup
        const handleAuthMessage = (event) => {
          if (event.data === "success") {
            console.log("Facebook authentication successful");
            resolve(true);
          } else if (event.data === "failed") {
            console.error("Facebook authentication failed");
            reject(false);
          }

          // Clean up after handling
          window.removeEventListener("message", handleAuthMessage);
          popup.close();
        };

        // Attach the event listener
        window.addEventListener("message", handleAuthMessage);
      })
      .catch(error => {
        console.error("Facebook authentication initiation failed", error);
        reject(false);
      });
  });
};

export default signInWithFacebook;
