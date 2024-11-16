const getEmail = () => {
  const emailData = JSON.parse(localStorage.getItem('data'));
  return emailData?.user?.email || null;
};

export default getEmail;

// // src/utils/getEmailFromToken.js

// const getEmailFromToken = (token) => {
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split('.')[1])); 
//   return payload.email;
// };

// export default getEmailFromToken;
