import JWT from 'jsonwebtoken';
import httpStatus from 'http-status';


export default (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        message: 'Token not found',
      });
  
    }
    const token = authorization.split(' ')[1];
  
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
  
    if(!decodedToken ) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid token',
      });
    }

    req.user = decodedToken;
    console.log("token decodificado", req.user);
  
    next();
  } catch (error) {
    return res.status(httpStatus.FORBIDDEN).json({
      success: false,
      message: 'Access forbidden',
    });
  }
} 
