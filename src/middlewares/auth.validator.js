import httpStatus from "http-status";

const authValidator = async (req, res, next) => {
  const { userId } = req.query; // cambiar despues por jwt

  req.user = await User.findByPk(userId);
};

export default authValidator;