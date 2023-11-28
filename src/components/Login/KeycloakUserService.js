import Keycloak from "keycloak-js";

const keycloakJson = {
  "realm": "eMigration",
  "url": `https://xadmin.lexxtechnologies.com/auth/`,
  "ssl-required":"none",
  "clientId": "x-team",
  // "resource": process.env.REACT_APP_KEYCLOAK_RESOURCE,
  "public-client": true,
  "confidential-port":0
}

const _kc = new Keycloak(keycloakJson);
// const _kc: KeycloakInstance = Keycloak(keycloakJson);

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      onLoad: "login-required",
      silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256"
    })
    .then((_authenticated) => {
      onAuthenticatedCallback();
    })
    .catch(console.error);
};
const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getEmail = () => _kc.idTokenParsed.email;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) => _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const getRoles = () => _kc.tokenParsed?.roles;

const getUserID = () => _kc.tokenParsed?.sub;

const isAuthenticated = () => _kc.authenticated;

const getGroups = () => _kc.tokenParsed?.groups;

const KeycloakUserService = {
  initKeycloak,
  doLogin,
  doLogout,
  getEmail,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  getRoles,
  getUserID,
  isAuthenticated,
  getGroups
};

export default KeycloakUserService;

