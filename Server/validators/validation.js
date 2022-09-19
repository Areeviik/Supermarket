const { check, validationResult } = require("express-validator");

async function productPostValidation(req, callback) {
  await check("title").notEmpty().run(req);
  await check("description").notEmpty().run(req);
  await check("country").notEmpty().run(req);
  await check("producer").notEmpty().run(req);
  await check("price").notEmpty().run(req);
  await check("keywords").notEmpty().run(req);
  await check("imgUrl").notEmpty().run(req);
  await check("category").notEmpty().run(req);
  await check("count").notEmpty().run(req);

  await check("title").exists().run(req);
  await check("description").exists().run(req);
  await check("country").exists().run(req);
  await check("producer").exists().run(req);
  await check("price").exists().run(req);
  await check("keywords").exists().run(req);
  await check("imgUrl").exists().run(req);
  await check("category").exists().run(req);
  await check("count").exists().run(req);

  const result = validationResult(req);
  console.log(result);
  if (!result.isEmpty()) {
    return callback(false);
  }
  return callback(true);
}
module.exports = {
  productPostValidation,
};
