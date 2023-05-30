import httpStatus from "http-status";

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
    code: statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message: message || "Something went wrong"
  });
};

export default errorHandler;