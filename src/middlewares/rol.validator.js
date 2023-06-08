import httpStatus from "http-status";

const rolValidator = (role) => {
  return async (req, res, next) => {
    const { role: userRol } = req.user;

    if(userRol === 'admin' || userRol === role){
      return next();
    }

    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: 'You do not have permission to access this resource'
    });
  };
}

export default rolValidator;
