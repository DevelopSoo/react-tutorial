const { useSelector } = require("react-redux");

export const useAuth = () => {
  // @ts-ignore
  const user = useSelector((state) => state.user);
  const isLoggedIn = () => {
    if (!user.email) return false;
    return true;
  };

  const isSameUser = (author) => {
    if (user.email !== author) return false;
    return true;
  };

  return { user, isLoggedIn, isSameUser };
};
