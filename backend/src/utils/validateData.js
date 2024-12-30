export const validateData = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: err.errors });
  }
};
