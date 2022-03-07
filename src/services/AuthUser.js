export const authUser = {
  isAuth: localStorage.getItem("user") ? true : false,
  signIn(newUser, cb) {
    this.isAuth = true;
    localStorage.setItem("user", JSON.stringify(newUser));
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuth = false;
    localStorage.removeItem("user");
    setTimeout(cb, 100);
  },
};
