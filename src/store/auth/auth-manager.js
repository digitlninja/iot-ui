import jwtDecode from "jwt-decode";
let idToken;
let accessToken;
let refreshTokensTimer;

export const hasToken = (tokenType) => {
  if (tokenType === "id") {
    return !!idToken;
  }
  if (tokenType === "access") {
    return !!accessToken;
  }
};

export const getIdToken = () => idToken;
export const getAccessToken = () => accessToken;

export const setIdToken = (token) => {
  if (!token) {
    throw new Error("Missing token argument.");
  }
  idToken = token;
};

export const setAccessToken = (token) => {
  if (!token) {
    throw new Error("Missing token argument.");
  }
  accessToken = token;
};

export const getAllTokens = () => ({
  idToken,
  accessToken,
});

export const setAllTokens = (tokens) => {
  if (!tokens) {
    throw new Error("Missing tokens argument.");
  }
  setIdToken(tokens.idToken);
  setAccessToken(tokens.accessToken);
};

export const clearAllTokens = () => {
  idToken = null;
  accessToken = null;
};

const setTimer = (time, handler) => {
  refreshTokensTimer = setTimeout(() => {
    handler();
  }, time);
};

export const setRefreshTokensTimer = (tokens, handler) => {
  const decodedToken = jwtDecode(tokens.idToken);
  const fiveMinutesBeforeExpiry =
    decodedToken.exp - decodedToken.auth_time - 300;
  try {
    if (refreshTokensTimer) {
      clearTimeout(refreshTokensTimer);
      return true;
    }
    setTimer(fiveMinutesBeforeExpiry, handler);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const clearRefreshTokensTimer = () => {
  try {
    clearTimeout(refreshTokensTimer);
  } catch (error) {
    console.error(error);
    return false;
  }
};
