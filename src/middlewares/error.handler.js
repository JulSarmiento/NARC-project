import httpStatus from "http-status";

/**
 * @description Handle errors
 * @param {e.Request} req
 * @param {e.Response} _res
 * @param {e.NextFunction} _next
 */
const errorHandler = (err, _req, res, _next) => {
  const { statusCode, message } = err;

  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: statusCode,
    code: httpStatus.INTERNAL_SERVER_ERROR,
    message,
  });

};

export default errorHandler;