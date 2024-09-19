const SessionUtils = {
  setToken(token) {
    localStorage.setItem("token", token);

    return token;
  },
  getToken() {
    return localStorage.getItem("token");
  },
};

export default SessionUtils;
