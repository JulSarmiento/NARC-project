import httpStatus from "http-status";

/**
 * 
 * @param {object} model 
 * @description Validate the model with Joi
 * @returns  {e.NextFunction}
 */
const validateModel = (model) => async (req, res, next) => {
  const { error } = model.validate(req.body);
  if (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: error.message
    });
    return;
  }
  next();
}

export default validateModel;