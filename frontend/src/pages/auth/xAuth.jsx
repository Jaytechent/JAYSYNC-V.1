const signInWithTwitter = () => {
  return new Promise((resolve, reject) => {
    const email = localStorage.getItem("email");

    if (!email) {
      console.error("User email not found in localStorage");
      reject(false);
      return;
    }

    fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/twitter?email=${encodeURIComponent(email)}`)
      .then(response => response.json())
      .then(data => {
        const { authUrl, oauth_token, oauth_token_secret } = data;

        if (!authUrl || !oauth_token || !oauth_token_secret) {
          console.error("Missing authentication data from backend");
          reject(false);
          return;
        }

        // Store tokens in localStorage
        localStorage.setItem("twitter_oauth_token", oauth_token);
        localStorage.setItem("twitter_oauth_token_secret", oauth_token_secret);

        // Open the Twitter auth URL in a popup
        const popup = window.open(authUrl, "twitterAuth", "width=500,height=600");

        // Listen for the authentication message from the popup
        const handleAuthMessage = (event) => {
          // if (event.origin !== window.location.origin) {
          //   // Ignore messages from unexpected origins
          //   console.warn("Received message from unauthorized origin:", event.origin);
          //   return;
          // }

          if (event.data === "success") {
            console.log("Twitter authentication successful");
            resolve(true);
          } else if (event.data === "failed") {
            console.error("Twitter authentication failed");
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
        console.error("Twitter authentication initiation failed", error);
        reject(false);
      });
  });
};

export default signInWithTwitter;



// import getEmailFromToken from '../../utils/getEmailFromToken';

// const signInWithTwitter = async () => {
//   try {
//     const token = localStorage.getItem("token"); 
//     const email = getEmailFromToken(token); 

//     if (!email) {
//       console.error("User email not found in token");
//       return null;
//     }

    
//     window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/twitter?email=${encodeURIComponent(email)}`;
//     console.log("Redirecting to:", window.location.href);
//   } catch (error) {
//     console.error("Twitter auth error:", error);
//     return null;
//   }
// };

// export default signInWithTwitter;


// const signInWithTwitter = async () => {
//   try {
    
//     window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/twitter`;
//     console.log('redirect-url:', window.location.href)
//   } catch (error) {
//     console.error("Twitter auth error:", error);
//     return null;
//   }
// };

// export default signInWithTwitter;
