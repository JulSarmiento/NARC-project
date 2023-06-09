import httpStatus from "http-status";

export default (req, res, next) => {
  const { birthdate } = req.body;

  const today = new Date();
  const birthdateDate = new Date(birthdate);
  
  const age = today.getFullYear() - birthdateDate.getFullYear();
  const month = today.getMonth() - birthdateDate.getMonth();
  const day = today.getDate() - birthdateDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  if (age < 18) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "You must be 18 years old or older to register.",
    });
    return ;
  }

  next();

};
