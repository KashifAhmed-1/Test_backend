const LoginUsers = require("../modal/loginUserModal");

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check fields are filled.
    if (!email || !password) {
      res.status(400);
      return next(new Error("Name and Password fields are required"));
    }

    // Check user is already exist
    const userExist = await LoginUsers.findOne({ email });
    if (userExist) {
      res.status(404);
      return next(new Error("user already exist"));
    }

    const createUser = await LoginUsers.create({
      email,
      password,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};


module.exports = {createUser}