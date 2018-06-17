const ACCESS_TOKEN = 'hackathon-hu-token';

export const login = (accessToken) => localStorage.setItem(ACCESS_TOKEN, accessToken);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const isLoggedIn = () => {
  const token = getAccessToken();
  return token !== 'null' && !!token;
};
