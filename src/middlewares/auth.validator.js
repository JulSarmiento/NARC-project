import { User } from '../models/index.js';

const authValidator = async (req, res, next) => {
  const { userId } = req.query; // cambiar despues por jwt

  req.user = await User.findByPk(userId);
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'User not found'
    });
  }
  next();
};

export default authValidator;