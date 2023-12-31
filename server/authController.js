import { User } from "../model.js";

const authFunctions = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });
    if (user && user.password === password) {
      req.session.userId = user.userId;
      res.json({ success: true, userId: user.userId });
    } else {
      res.json({ success: false });
    }
  },

  logout: async (req, res) => {
    req.session.destroy();
    res.json({ success: true });
  },
  createAccount: async (req, res) => {
    const { fname, lname, username, password } = req.body;
    const user = await User.create({
      fname: fname,
      lname: lname,
      username: username,
      password: password,
    });
    if (user) {
      req.session.userId = user.userId;
      res.json({ success: true, userId: user.userId });
    }
  },
  sessionCheck: async (req, res) => {
    if (req.session.userId) {
      res.json({ user: req.session.userId });
    } else {
      res.json("no user logged in");
    }
  },
};
export default authFunctions;
