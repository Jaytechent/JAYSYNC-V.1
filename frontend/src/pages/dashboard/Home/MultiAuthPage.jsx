import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import signInWithTiktok from '../../auth/tiktokAuth'; 
import signInWithFacebook from '../../auth/facebookAuth';
import signInWithTwitter from '../../auth/xAuth';
import signInWithInstagram from '../../auth/instagramAuth';

const MultiAuthPage = () => {
  const [tiktokAuth, setTiktokAuth] = useState(false);
  const [facebookAuth, setFacebookAuth] = useState(false);
  const [twitterAuth, setTwitterAuth] = useState(false);
  const [instagramAuth, setInstagramAuth] = useState(false);

  const navigate = useNavigate(); 

  const handleTiktokAuth = async () => {
    const result = await signInWithTiktok();
    if (result) setTiktokAuth(true);
  };

  const handleFacebookAuth = async () => {
    const result = await signInWithFacebook();
    if (result) setFacebookAuth(true);
  };

  const handleTwitterAuth = async () => {
    try {
      const result = await signInWithTwitter();
      if (result) setTwitterAuth(true);
    } catch {
      console.error("Twitter authentication failed");
    }};

  const handleInstagramAuth = async () => {
    const result = await signInWithInstagram();
    if (result) setInstagramAuth(true);
  };

  const isAllAuthComplete = tiktokAuth && facebookAuth && twitterAuth && instagramAuth;

  const handleProceed = () => {
    if (isAllAuthComplete) {
      navigate('/postpage'); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Authenticate with the following platforms:</h2>
      <div className="flex flex-col space-y-4">
        <button 
          className={`w-full py-2 text-white rounded-lg ${tiktokAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
          onClick={handleTiktokAuth} 
          disabled={tiktokAuth}
        >
          Tiktok {tiktokAuth && "✔"}
        </button>
        <button 
          className={`w-full py-2 text-white rounded-lg ${facebookAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
          onClick={handleFacebookAuth} 
          disabled={facebookAuth}
        >
          Facebook {facebookAuth && "✔"}
        </button>
        <button 
          className={`w-full py-2 text-white rounded-lg ${twitterAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
          onClick={handleTwitterAuth} 
          disabled={twitterAuth}
        >
          Twitter {twitterAuth && "✔"}
        </button>
        <button 
          className={`w-full py-2 text-white rounded-lg ${instagramAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
          onClick={handleInstagramAuth} 
          disabled={instagramAuth}
        >
          Instagram {instagramAuth && "✔"}
        </button>
      </div>

      {isAllAuthComplete ? (
        <button 
          className="mt-6 w-full py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg" 
          onClick={handleProceed} 
        >
          Proceed to Post Page
        </button>
      ) : (
        <p className="mt-4 text-red-500 text-center">Please authenticate with all platforms to proceed.</p>
      )}
    </div>
  );
};

export default MultiAuthPage













// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import signInWithTiktok from '../../auth/tiktokAuth';
// import signInWithFacebook from '../../auth/facebookAuth';
// import signInWithTwitter from '../../auth/xAuth';
// import signInWithInstagram from '../../auth/instagramAuth';

// const MultiAuthPage = () => {
//   const [tiktokAuth, setTiktokAuth] = useState(false);
//   const [facebookAuth, setFacebookAuth] = useState(false);
//   const [twitterAuth, setTwitterAuth] = useState(false);
//   const [instagramAuth, setInstagramAuth] = useState(false);
//   const [authStatus, setAuthStatus] = useState(null); // To store the status message

//   const navigate = useNavigate();
//   const location = useLocation(); // To access query params from the URL

//   // Check if 'status' is present in the query params and update the state
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const status = queryParams.get("status");
//     if (status === "true") {
//       setAuthStatus("Authentication successful!");
//     } else if (status === "false") {
//       setAuthStatus("Authentication failed. Please try again.");
//     }
//   }, [location.search]);

//   const handleTiktokAuth = async () => {
//     const result = await signInWithTiktok();
//     if (result) setTiktokAuth(true);
//   };

//   const handleFacebookAuth = async () => {
//     const result = await signInWithFacebook();
//     if (result) setFacebookAuth(true);
//   };

//   const handleTwitterAuth = async () => {
//     const result = await signInWithTwitter();
//     if (result) setTwitterAuth(true);
//   };

//   const handleInstagramAuth = async () => {
//     const result = await signInWithInstagram();
//     if (result) setInstagramAuth(true);
//   };

//   const isAllAuthComplete = tiktokAuth && facebookAuth && twitterAuth && instagramAuth;

//   const handleProceed = () => {
//     if (isAllAuthComplete) {
//       navigate('/postpage');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6">Authenticate with the following platforms:</h2>
//       <div className="flex flex-col space-y-4">
//         <button 
//           className={`w-full py-2 text-white rounded-lg ${tiktokAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
//           onClick={handleTiktokAuth} 
//           disabled={tiktokAuth}
//         >
//           Tiktok {tiktokAuth && "✔"}
//         </button>
//         <button 
//           className={`w-full py-2 text-white rounded-lg ${facebookAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
//           onClick={handleFacebookAuth} 
//           disabled={facebookAuth}
//         >
//           Facebook {facebookAuth && "✔"}
//         </button>
//         <button 
//           className={`w-full py-2 text-white rounded-lg ${twitterAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
//           onClick={handleTwitterAuth} 
//           disabled={twitterAuth}
//         >
//           Twitter {twitterAuth && "✔"}
//         </button>
//         <button 
//           className={`w-full py-2 text-white rounded-lg ${instagramAuth ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'}`} 
//           onClick={handleInstagramAuth} 
//           disabled={instagramAuth}
//         >
//           Instagram {instagramAuth && "✔"}
//         </button>
//       </div>

//       {authStatus && <p className="mt-4 text-center">{authStatus}</p>} {/* Show auth status message */}

//       {isAllAuthComplete ? (
//         <button 
//           className="mt-6 w-full py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg" 
//           onClick={handleProceed} 
//         >
//           Proceed to Post Page
//         </button>
//       ) : (
//         <p className="mt-4 text-red-500 text-center">Please authenticate with all platforms to proceed.</p>
//       )}
//     </div>
//   );
// };

// export default MultiAuthPage;
