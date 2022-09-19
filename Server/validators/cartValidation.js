const { check, Validation } = require("express-validator");

async function updateValidation(req, res) {
    await check("productId").exists().notEmpty().run(req);
    await check("count").exists().notEmpty().run(req);
    const result = Validation(req);
    if (!result.isEmpty()) {
      return callback(false);
    }
    return callback(true);
  }

  module.exports = {
    updateValidation
  }