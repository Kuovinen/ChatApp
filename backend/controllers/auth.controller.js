export const login = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const logout = (req, res) => {
  res.send("Signup Route");
};
export const signup = (req, res) => {
  res.send("Signup Route");
};
