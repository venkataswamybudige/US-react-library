export const oktaConfig = {
    clientId:'0oajnduo40BU507qM5d7',
    issuer:'https://dev-76668208.okta.com/oauth2/default',
    redirectUri:'http://localhost:3000/login/callback',
    scopes:['openid','profile','email'],
    pkce:true,
    disableHttpsCheck:true
}