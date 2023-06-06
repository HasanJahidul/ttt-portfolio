const baseUrl = process.env.NODE_ENV === "production" 
? 'https://takethetech.com' 
: 'http://localhost:3000';

export default baseUrl;