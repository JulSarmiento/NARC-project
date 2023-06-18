import httpStatus from 'http-status';

/**
 * @description Handle errors
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} _next
 */
const notPageFound = (req, res, _next) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: httpStatus.NOT_FOUND,
    message: `The route ${req.originalUrl} does not exist`,
  });
}

export default notPageFound;