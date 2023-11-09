import { Recipe, User } from "../model.js";

const authFunctions = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (user && user.password === password) {
      req.session.userId = user.userId;
      // console.log(req.session.userId);
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  },

  logout: async (req, res) => {
    // console.log(req.session.userId);
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
    // console.log(req.body.fname);
    if (user) {
      req.session.userId = user.userId;
      // console.log(user.userId);
      res.json({ success: true });
    }
  },
};
export default authFunctions;
