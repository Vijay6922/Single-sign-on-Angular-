// import { AuthConfig } from 'angular-oauth2-oidc';
// export const authConfig: AuthConfig = {
//   // Url of the Identity Provider
//   issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
//   // URL of the SPA to redirect the user to after login
//   redirectUri: window.location.origin + '/index.html',
//   // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: 'spa-demo',
//   // set the scope for the permissions the client should request
//   // The first three are defined by OIDC. The 4th is a usecase-specific one
//   scope: 'openid profile email voucher',
// }

// import { AuthConfig } from 'angular-oauth2-oidc';
// // Define a default redirect URI for server-side rendering (SSR)
// const defaultRedirectUri = 'https://portal.azure.com/#home';
// // Dynamically determine the redirect URI based on the environment
// const redirectUri = typeof window !== 'undefined' ? window.location.origin + '/index.html' : defaultRedirectUri;
// export const authConfig: AuthConfig = {
//   // Url of the Identity Provider
//   issuer: 'https://login.microsoftonline.com/d59bd1d9-d597-456d-9502-11d721216a46/v2.0',
//   // URL of the SPA to redirect the user to after login
//   redirectUri: redirectUri,
//   // Your Azure AD OAuth client ID
//   clientId: '73b7b3de-670a-485b-ab24-6058fbc6395e',
//   // set the scope for the permissions the client should request
//   // The first three are defined by OIDC. The 4th is a usecase-specific one
//   scope: 'openid profile email',
// };




